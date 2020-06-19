"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexControllers_1 = __importDefault(require("../controllers/indexControllers"));
class IndexRoutes {
    constructor() {
        this.router = express_1.Router(); // esto es Router = Router(); para inicializarlos de una vez
        this.config();
    }
    config() {
        this.router.get('/', indexControllers_1.default.index); // Crear la ruta inicial de la app
    }
}
const indexRoutes = new IndexRoutes(); // cuando se intancia la clase el constructor de ejecuta
exports.default = indexRoutes.router;
