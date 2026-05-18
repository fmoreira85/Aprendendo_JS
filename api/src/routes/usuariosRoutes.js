const express = require("express");

const usuariosController = require("../controller/usuariosController")

const router = express.Router();

router.get("/", usuariosController.listar);

router.post("/", usuariosController.criar);

module.exports = router;
