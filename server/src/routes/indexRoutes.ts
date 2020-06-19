import { Router} from 'express';

import  indexController  from '../controllers/indexControllers'

class IndexRoutes {
    public router: Router = Router(); // esto es Router = Router(); para inicializarlos de una vez

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', indexController.index); // Crear la ruta inicial de la app
    }
}

const indexRoutes = new IndexRoutes(); // cuando se intancia la clase el constructor de ejecuta
export default indexRoutes.router;