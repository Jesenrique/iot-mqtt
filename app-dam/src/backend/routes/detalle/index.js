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

routerDetalle.get('/ultimo/:id', function (req, res) {
  const dispositivoId = req.params.id;

  // Ordenamos por fecha descendente y limitamos a 1
  const query = 'SELECT * FROM Mediciones WHERE dispositivoId = ? ORDER BY fecha DESC LIMIT 1';

  pool.query(query, [dispositivoId], function (err, result) {
      if (err) {
          console.error('Error al ejecutar la consulta:', err);
          return res.status(500).json({ error: 'Error al consultar la base de datos' });
      }

      console.log('Resultado:', result);
      if (result.length > 0) {
          res.status(200).json(result[0]);  // Solo el último
      } else {
          res.status(404).json({ message: 'No se encontraron mediciones para ese dispositivo' });
      }
  });
});


// Insertar una nueva medición
routerDetalle.post('/', (req, res) => {
  const medicionId = req.body.medicionId;
  const temperatura = req.body.temperatura;
  const humedad = req.body.humedad;
  const fecha = req.body.fecha;
  const dispositivoId = req.body.dispositivoId;

  const query = 'INSERT INTO Mediciones (medicionId, temperatura, humedad, fecha, dispositivoId) VALUES (?, ?, ?, ?, ?)';
  pool.query(query, [medicionId, temperatura, humedad, fecha, dispositivoId], (err, result) => {
      if (err) {
          console.error('Error al insertar medición:', err);
          return res.status(500).json({ error: 'Error en la base de datos' });
      }

      res.status(201).json({ message: 'Medición creada', id: result.insertId });
  });
});


module.exports = routerDetalle;
