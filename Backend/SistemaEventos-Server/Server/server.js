require('./config/config');
// import * as cors from 'cors';

const express = require('express');
const mongoose = require('mongoose');


const app = express();

const bodyParser = require('body-parser');

// =====================
// Verificar cors
// =====================

// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Acept, Athorization"
//     );
//     if (req.method === 'OPTIONS') {
//         res,
//         header('Access-Control-Allow-Mthods', 'GET; POST, PUT, DELETE, PATCH');
//         return res.status(200).json({});
//     }
// })

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use(require('./routes/user.route'));



mongoose.connect(process.env.URLDB, { useNewUrlParse: true, useCreateIndex: true },
    (err, res) => {

        if (err) throw err;

        console.log('Base de datos ONLINE');

    }
);

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});