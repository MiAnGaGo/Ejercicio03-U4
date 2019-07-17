const router = require('express').Router();

module.exports = (wagner) => {

    const productCtrl = wagner.invoke((Product) =>
        require('../controller/product.cotroller')(Product));



    //post //http://localhost:3000/api/v1/productos
    router.post('/', (req, res) =>
        productCtrl.createProduct(req, res));

    //get //http://localhost:3000/api/v1/productos
    router.get('/', (req, res) =>
        productCtrl.findAllP(req, res));

    //get by ID //http://localhost:3000/api/v1/productos/"id"
    router.get('/:id', (req, res) =>
        productCtrl.findID(req, res));
    
    //update by ID //http://localhost:3000/api/v1/productos/"id"
    router.put('/:id', (req, res) =>
        productCtrl.updateById(req, res));
        
    //delete by ID //http://localhost:3000/api/v1/productos/"id"
    router.delete('/:id', (req, res) =>
        productCtrl.deleteByID(req, res));

    return router;


}