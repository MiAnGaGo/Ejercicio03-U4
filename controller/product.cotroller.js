const http = require('http');
const path = require('path');
const status = require('http-status');
const jwt = require('jsonwebtoken');
const _config = require('../_config');


let _producto;



const createProduct = (req, res) => {
    const producto = req.body;
    _producto.create(producto)
        .then((data) => {
            res.status(200);    
            res.json({ msg:"producto creado"+"\n"+data});
            
        })
        .catch((err) => {
            res.status(400);
            res.json({ msg: "Error!!!!", data: err });
        });    
}

const findAllP = (req, res) => {
    _producto.find()
        .then ((data) =>{
            if(data.length==0){
                res.status(status.NO_CONTENT);
                res.json({msg:"No se encontro el producto"});
            }
            else{
                res.status(status.OK);
                res.json({msg:"Exito!!!", data:data});
            }
        })
        .catch((err) =>{
            res.status(status.BAD_REQUEST);
            res.json({msg:"Error"})
        });
}

const findID = (req, res) => {
    const {id}=req.params;
    const params = {
        _id:id
    };
    _producto.findOne(params)
        .then((data) =>{
            res.status(status.OK);
            res.json({msg:"Exito!!!",data:data});
        })
        .catch((err) =>{
            res.status(status.NOT_FOUND);
            res.json({msg:"Error!!! No se encontro",err:err})
        });
}

const updateById = (req,res) =>{
    const {id} = req.params;
    const product = req.body;

    const params = {
        _id:id
    }
    
    _producto.findByIdAndUpdate(params,product,{new:true})
        .then((data)=>{
            res.status(status.OK);
            res.json({msg:"Update correcto",data:data});
        })
        .catch((err)=>{
            res.status(status.NOT_FOUND);
            res.json({msg:"Error, documento no actualizado",err:err});
        })
}

const deleteByID = (req,res) =>{
    const {id} = req.params;

    const params={
        _id:id
    };
    _producto.findByIdAndRemove(params)
        .then((data) =>{
                res.status(status.OK);
                res.json({msg:"Exito!!!",data:data});
        })
        .catch((err) =>{
            res.status(status.NOT_FOUND);
            res.json({msg:"Error!!! No se encontro",err:err})
        });
}

module.exports = (Producto) => {
    _producto = Producto;
    return ({
        createProduct,
        findAllP,
        findID,
        updateById,
        deleteByID
    });
}
