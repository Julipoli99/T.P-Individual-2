const controladorUser = {
    login: (req, res) => {
        res.render("login")
    },

    register: (req, res) => {
        res.render("registrer")
    }
}

module.exports = controladorUser;