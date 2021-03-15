import "reflect-metadata";
import {createConnection} from "typeorm";

createConnection({
    type: "postgres",
    host: "localhost",
    port: 3306,
    username: "postgres",
    password: "123456",
    database: "postgres",
    entities: [
        "src/infrastructure/database/entities/*.ts"
    ],
    synchronize: true,
    logging: true
}).then(connection => {
    console.log('database connected')
   
        // here you can start to work with your entities
}).catch(error => console.log(error));

