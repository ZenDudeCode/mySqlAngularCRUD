import mysql from 'promise-mysql';
// npm i promise-mysql@3.3.1 resuelve el peo

 // mysql.createConnection se podria usar para traer un hilo de conexion

 // important el archivo keys con los datos de la conexion
import keys from './keys';

const pool = mysql.createPool(keys.database); // esta es otra forma de crear la conexi'on



 //pool.get("getConnection").then() 
 
 pool.getConnection()
    .then(connection => {
        pool.releaseConnection(connection);
        console.log('DB is Connected')
    });        

export default pool;