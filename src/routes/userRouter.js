const controladorUser = require ("../controllers/userController");

const express = require ("express");
const usersRouter = express.Router();

usersRouter.get("/", controladorUser.login);

usersRouter.get("/registro", controladorUser.register);




module.exports = usersRouter;