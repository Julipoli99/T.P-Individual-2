const controladorMain = require ("../controllers/mainController");

const express = require("express");
const router = express.Router();

router.get("/", controladorMain.index);

module.exports = router;