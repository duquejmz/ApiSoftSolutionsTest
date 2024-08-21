const express = require('express')
const dbConnect = require('../database/config')
const {getProduct, postProduct, putProduct, deleteProduct} = require('../controllers/productController')
const {getCategory, postCategory} = require('../controllers/categoryController')


class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        // this.host = process.env.HOST || '127.0.0.1';
        this.pathProduct = '/api-product';
        this.pathCategory = '/api-category';

        // Initialize methods in the correct order
        this.middlewares(); 
        this.routes();
        this.dbConnection(); 
    }

    async dbConnection() {
        await dbConnect();
    }

    middlewares() {
        // Add middleware to parse JSON
        this.app.use(express.json());
    } 

    routes() {
        this.app.get(this.pathProduct, getProduct);
        this.app.post(this.pathProduct, postProduct);
        this.app.put(this.pathProduct, putProduct);
        this.app.delete(this.pathProduct+'/:id', deleteProduct);
        this.app.get(this.pathCategory, getCategory);
        this.app.post(this.pathCategory, postCategory)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running at http://localhost:${this.port}`);
        });
    }
}

module.exports = Server;

// Tarea: crear nuevamente la cadena de conexion. Crear un proyecto que se permita conectar al servidor de node y a mongo. 