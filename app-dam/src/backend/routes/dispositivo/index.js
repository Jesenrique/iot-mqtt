const express = require('express')

const routerDispositivo = express.Router()

var pool = require('../../mysql-connector');

routerDispositivo.get('/', function(req, res) {
    pool.query('Select * from Dispositivos', function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        console.log(result); 
        res.send(result);
    });
})

routerDispositivo.put('/', (req, res) => {

    console.log("entro al put")
    const id = req.body.id;
    const estado = req.body.estado;
    
    const query = 'UPDATE Dispositivos SET estado = ? WHERE electrovalvulaId = ?';
    
    pool.query(query, [estado, id], (err, result) => {
      if (err) {
        console.error('Error al actualizar estado:', err);
        return res.status(500).json({ error: 'Error en la base de datos' });
      }
      res.status(201).json({ message: 'Estado actualizado' });
    });
});


module.exports = routerDispositivo