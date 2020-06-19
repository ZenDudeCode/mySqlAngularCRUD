import express, { Application } from 'express';

import morgan from 'morgan';

import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import gamesRoutes from './routes/gamesRoutes';

class Server {

        public app: Application;
        // El constructor es un metodo que se ejecuta apenas instanciamos la clase
        constructor(){
            this.app = express();
            this.config();
            this.routes();
        }

        // config sera el encargado de configarar la propiedad app
        config(): void{
            this.app.set('port', process.env.PORT || 3000);
            this.app.use(morgan('dev')); // al usar morgan podemos ver las peticiones que hacen los usuario
            this.app.use(cors()); // ayuda a angular a perdir lo datos al servidor
            this.app.use(express.json()); // configuracion que viene de express para aceptar formatos json del cliente
            this.app.use(express.urlencoded({extended: false})); // para enviar datos desde un formulario html
        }

        // para definir las rutas del servidor
        routes(): void{
            this.app.use('/', indexRoutes);
            this.app.use('/api/games', gamesRoutes);
        }

        // para inicializar el servidor
        start(): void{
            this.app.listen(this.app.get('port'),() => {
                console.log('Server on port ', this.app.get('port'));
            });
        }
}

const server = new Server();
server.start();