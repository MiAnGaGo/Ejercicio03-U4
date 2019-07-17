const router = require('express').Router();

module.exports = (wagner) => {

    const productCtrl = wagner.invoke((Product) =>
        require('../controller/product.cotroller')(Product));



    //post //http://localhost:3000/api/v1/productos
    router.post('/', (req, res) =>
        userCtrl.createProduc(req, res));




}