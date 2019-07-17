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

module.exports = (Producto) => {
    _producto = Producto;
    return ({
        createProduct
    });
}
