const express = require("express");
const path = require("path");
const app = express();

const mainRouter = require ("./src/routes/mainRouter");
const userRouter = require ("./src/routes/userRouter")




/*app.get("/login", (req, res) =>{
    res.sendFile(path.join(__dirname, "./views/login.html"))
})*/


app.use(express.static(path.join(__dirname, "./public")))

//let rutaCarpetaPublic = path.resolve(__dirname, "/public");
//app.use(express.static(rutaCarpetaPublic));


app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo en el puerto 3000");
})

app.set("view engine", "ejs");

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const methodOverride = require("method-override");
app.use(methodOverride("_method"));


// Rutas Globales:

app.use("/", mainRouter);

app.use("/users", userRouter);