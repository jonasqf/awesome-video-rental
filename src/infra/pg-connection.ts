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
        "./src/domain/data/entities/*.js"
    ],
    synchronize: true,
    logging: false
}).then(connection => {
    // here you can start to work with your entities
}).catch(error => console.log(error));