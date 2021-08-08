const express = require("express");
const path = require("path");
const app = express();
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
//const cookieParser = require('cookie-parser');
const createError = require('http-errors');
//const logger = require('morgan');





app.use(express.urlencoded({ extended: false }));
//app.use(logger('dev'));
app.use(express.json());
//app.use(cookieParser());





//Requerimientos de Rutas:

const mainRouter = require ("./src/routes/mainRouter");
const userRouter = require ("./src/routes/userRouter")
const productRouter = require ("./src/routes/productRouter");




/*app.get("/login", (req, res) =>{
    res.sendFile(path.join(__dirname, "./views/login.html"))
})*/


app.use(express.static(path.join(__dirname, "./public")))// Necesario para los archivos estáticos en el folder /public




//let rutaCarpetaPublic = path.resolve(__dirname, "/public");
//app.use(express.static(rutaCarpetaPublic));


app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo en el puerto 3000");
})

app.set("view engine", "ejs");

app.use(express.urlencoded({extended: false}));
app.use(express.json());




// Rutas Globales:

app.use("/", mainRouter);
app.use("/users", userRouter);
app.use("/products", productRouter);