"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controller = require("../controllers/controller.computador");
var rutaComputador = (0, _express.Router)();
rutaComputador.get("/pc", _controller.mostrarPc);
rutaComputador.get("/pc/:id", _controller.listarPc);
rutaComputador.post("/pc", _controller.crearPc);
rutaComputador.put("/pc/:id", _controller.modificarPc);
rutaComputador["delete"]("/pc/:id", _controller.eliminarPc);
var _default = exports["default"] = rutaComputador;