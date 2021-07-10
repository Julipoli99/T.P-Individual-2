const express = require("express");

const path = require("path");

const app = express();

/*
app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
})
*/
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/home.html"))
})


app.get("/registro", (req, res) =>{
    res.sendFile(path.join(__dirname, "./views/registrer.html"))
})

app.get("/login", (req, res) =>{
    res.sendFile(path.join(__dirname, "./views/login.html"))
})

app.use(express.static(path.join(__dirname, "./public")))

app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo en el puerto 3000");
})