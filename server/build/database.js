"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
// npm i promise-mysql@3.3.1 resuelve el peo
// mysql.createConnection se podria usar para traer un hilo de conexion
// important el archivo keys con los datos de la conexion
const keys_1 = __importDefault(require("./keys"));
const pool = promise_mysql_1.default.createPool(keys_1.default.database); // esta es otra forma de crear la conexi'on
//pool.get("getConnection").then() 
pool.getConnection()
    .then(connection => {
    pool.releaseConnection(connection);
    console.log('DB is Connected');
});
exports.default = pool;
