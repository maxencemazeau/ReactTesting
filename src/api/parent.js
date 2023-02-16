const express = require('express');
const mysql = require('mysql');
const cors = require ('cors');


const app = express();
const port = process.env.PORT || 8080


app.listen(port, () => console.log('Listen on port ' + port))
//Mysql

app.use(function(req, res, next){
    res.locals.connection = mysql.createConnection({
    connectionLimit : 10,
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'Allaitement'
});
    res.locals.connection.connect();
    next();
});

app.use(cors());

app.get('/parent', function(req, res, next){ 
    res.locals.connection.query('Select * from parent', function(error, results, fields){
        if (error) throw error;
        res.json(results);
    })
});