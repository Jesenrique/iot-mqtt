const express = require('express');
const routerLog = express.Router();
const pool = require('../../mysql-connector');


routerLog.get('/:id', function (req, res) {
    const dispositivoId = req.params.id; 

    if (!dispositivoId) {
        return res.status(400).json({ error: 'El parámetro "id" es obligatorio' });
    }

    const query = 'SELECT * FROM Log_Riegos WHERE electrovalvulaId = ? ORDER BY fecha DESC LIMIT 1';
    pool.query(query, [dispositivoId], function (err, result) {
        if (err) {
            console.error('Error al ejecutar la consulta:', err);
            return res.status(500).json({ error: 'Error al consultar la base de datos' });
        }
        console.log('Resultado:', result);
        res.status(200).json(result); 
    });
});

module.exports = routerLog;
