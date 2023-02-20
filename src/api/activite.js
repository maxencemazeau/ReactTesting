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
const corsOptions ={
    origin:'*', 
    method : 'GET,PUT,POST,DELETE,OPTIONS',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

// JSON body parser, there is no `extended` option here
app.use(express.json());

// URL-encoded body parser
app.use(express.urlencoded({ limit: "20mb", extended: true }));

app.get('/activite', function(req, res, next){ 
    res.locals.connection.query('Select * from activite', function(error, results, fields){
        if (error) throw error;
        res.json(results);
    })
});

app.post('/creerActivite', (req, res) => {
    const { nomEvent, description, tarif, platforme, lieu, lienZoom } = req.body;
    const sql = 'INSERT INTO activite (nomEvent, description, tarif, platforme, lieu, lienZoom) VALUES (?, ?, ?, ?, ?, ?)';
    res.locals.connection.query(sql, [nomEvent, description, tarif, platforme, lieu, lienZoom], (err, result) => {
      if (err) {
        console.error('Error inserting data: ', err);
        res.status(500).send('Error inserting data');
        return;
      }
      console.log('Data inserted');
      res.send('Data inserted');
    });
  });

  app.delete('/deleteActivite/:id', (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM activite WHERE id = ?`;
  res.locals.connection.query(sql, [id], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error deleting event');
    } else {
      res.send(`Activite with ID ${id} deleted successfully`);
    }
  });
});