const productController = require ("../controllers/productController")

const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");

//MULTER CONFIGURATION//

const imageConfiguration = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, "../../public/img/products")); //RUTA DONDE ALMACENAMOS LA FOTO DEL PERFIL.//
    },
    filename: function(req, file, cb) {
        let imageName = Date.now() + file.originalname;

        cb(null, imageName);
    }
})

const uploadFile = multer({ storage: imageConfiguration});



//RUTAS//

router.get("/", productController.index);




router.get("detail/:id", productController.detail);

module.exports = router;

