import { Router} from 'express';

import gamesController from '../controllers/gamesControllers' 

class GamesRoutes {
    public router: Router = Router(); // esto es Router = Router(); para inicializarlos de una vez

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', gamesController.list); // Crear la ruta del indexRoutes
        this.router.get('/:id', gamesController.getOne);
        this.router.post('/',gamesController.create);
        this.router.delete('/:id',gamesController.delete);
        this.router.put('/:id',gamesController.update);
    }
}

const gamesRoutes = new GamesRoutes(); // cuando se intancia la clase el constructor de ejecuta
export default gamesRoutes.router;