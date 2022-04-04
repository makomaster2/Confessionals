// import * as mysql from "mysql";

// const connection = mysql.createConnection({
//     host: 'localhost',
//     port: 3306,
//     database: "c16_chirpr",
//     user: 'chirprapp',
//     password: 'password'
// });

// export const Query = (query, values) => {
//     return new Promise((resolve, reject) => {
//         connection.query(query, values, (err, results) => {
//             if (err) throw err;
//             resolve(results);
//         });
//     });
// }

// import chirps from "./example";

// // this becomes db object in routes/chirps.js
// export default {
//     chirps
// }