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
    },

    edit: (req, res) => {
        let idUser = req.params.idUser;

        let users = [
            {id: 1, name: "Julián"},
            {id: 2, name: "Agustín"},
            {id: 3, name: "Tomás"},
            {id: 4, name: "Nicolás"}
        ]

        let userToEdit = users[idUser]

        res.render("UserEdit", {userToEdit: userToEdit})
    }

    
}

module.exports = controladorUser;