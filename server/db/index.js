import * as mysql from "mysql";

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    database: "confessionals",
    user: 'Ice',
    password: 'icecream'
});

export const Query = (query, values) => {
    return new Promise((resolve, reject) => {
        connection.query(query, values, (err, results) => {
            if (err) throw(err);
            resolve(results);
        });
    });
}

 import confession from "./confess";

// // this becomes db object in routes/chirps.js
export default {
    confession
}