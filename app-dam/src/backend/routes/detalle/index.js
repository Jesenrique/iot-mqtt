const express = require('express');
const routerDetalle = express.Router();
const pool = require('../../mysql-connector');


routerDetalle.get('/:id', function (req, res) {
    const dispositivoId = req.params.id; 

    const query = 'SELECT * FROM Mediciones WHERE dispositivoId = ? ';
    pool.query(query, [dispositivoId], function (err, result) {
        if (err) {
            console.error('Error al ejecutar la consulta:', err);
            return res.status(500).json({ error: 'Error al consultar la base de datos' });
        }
        
        console.log('Resultado:', result);
        res.status(200).json(result); 
    });
});

routerDetalle.post('/', (req, res) => {
    const medicionId = req.body.medicionId;
    const valor = req.body.valor;
    const fecha = req.body.fecha;
    const dispositivoId = req.body.dispositivoId;
    
    const query = 'INSERT INTO Mediciones (medicionId, fecha ,valor, dispositivoId) VALUES (?, ?, ?, ?)';
    pool.query(query, [medicionId, fecha ,valor, dispositivoId], (err, result) => {
      if (err) {
        console.error('Error al insertar medición:', err);
        return res.status(500).json({ error: 'Error en la base de datos' });
      }
  
      res.status(201).json({ message: 'Medición creada', id: result.insertId });
    });
  });


module.exports = routerDetalle;
