const controladorUser = {
    login: (req, res) => {
        res.render("login")
    },

    register: (req, res) => {
        res.render("registrer")
    },

    create: (req, res) => {
        let datosRegistro = {
            nombreApellido: req.body.nombreApellido,
            nombreUsuario: req.body.nombreUsuario,
            fechaNacimiento: req.body.fecha,
            domicilio: req.body.domicilio,
            tipoDeUsuario: req.body.perfilUsuario,
            interes: req.body.interes
        }
        res.redirect("registro/registroExitoso");
    },

    success: (req, res) => {
        res.render("RegisterSucceded")
    }

    
}

module.exports = controladorUser;