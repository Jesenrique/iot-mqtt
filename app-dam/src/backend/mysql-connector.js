const mysql = require('mysql');

const configMysql = {
    connectionLimit: 10,
    host: 'mysql-server', // Nombre del contenedor o 'host.docker.internal' desde el host
    port: '3306',         // Puerto expuesto en el host
    user: 'root',
    password: 'userpass',
    database: 'DAM'
};

const pool = mysql.createPool(configMysql);

const MAX_RETRIES = 3; // Número máximo de reintentos
let retries = 0; // Contador de intentos fallidos

function connectToDatabase() {
    pool.getConnection((err, connection) => {
        if (err) {
            console.error(`Error al intentar conectar: ${err.code}`);

            if (retries < MAX_RETRIES) {
                retries++;
                console.log(`Reintentando conexión (${retries}/${MAX_RETRIES}) en 5 segundos...`);
                setTimeout(connectToDatabase, 5000); // Intentar de nuevo tras 5 segundos
            } else {
                console.error('Se alcanzó el máximo número de reintentos. No se pudo establecer la conexión.');
            }
            return;
        }

        // Si la conexión es exitosa
        if (connection) {
            console.log('Conexión exitosa:', connection.threadId);
            connection.release(); // Liberar la conexión al pool
        }
    });
}

// Iniciar el primer intento tras 5 segundos
setTimeout(connectToDatabase, 5000);

module.exports = pool;
