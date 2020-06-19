"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const gamesRoutes_1 = __importDefault(require("./routes/gamesRoutes"));
class Server {
    // El constructor es un metodo que se ejecuta apenas instanciamos la clase
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    // config sera el encargado de configarar la propiedad app
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev')); // al usar morgan podemos ver las peticiones que hacen los usuario
        this.app.use(cors_1.default()); // ayuda a angular a perdir lo datos al servidor
        this.app.use(express_1.default.json()); // configuracion que viene de express para aceptar formatos json del cliente
        this.app.use(express_1.default.urlencoded({ extended: false })); // para enviar datos desde un formulario html
    }
    // para definir las rutas del servidor
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/games', gamesRoutes_1.default);
    }
    // para inicializar el servidor
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
