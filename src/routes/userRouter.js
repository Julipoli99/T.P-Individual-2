const controladorUser = require ("../controllers/userController");

const express = require ("express");
const usersRouter = express.Router();
const path = require("path");
const multer = require("multer");


// MULTER CONFIGURATION //

const imageConfiguration = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, "../../public/img/users")); //Ruta donde almacenamos la foto del usuario.//
    },
    filename: function(req, file, cb) {
        let imageName = Date.now() + file.originalname;

        cb(null, imageName);
    }
});

const uploadFile = multer({ storage: imageConfiguration });

//RUTAS//

usersRouter.get("/", controladorUser.login);

usersRouter.get("/registro", controladorUser.register);

usersRouter.post("/registro", uploadFile.single("avatar"), controladorUser.create);

usersRouter.get("/registro/registroExitoso", controladorUser.success)

usersRouter.get("/edit/:idUser?", controladorUser.edit);

usersRouter.put("/edit", function (req, res) {
    res.redirect("/")
})




module.exports = usersRouter;