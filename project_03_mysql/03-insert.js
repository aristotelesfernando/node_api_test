var mysql = require('mysql');

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'q1w2e3r4',
    database: 'livro'
});

try {
    conn.connect();  
} catch (error_conn) {
    console.error(error_conn);
}

let sql = "insert into carro set ?";
var carro = {nome: 'Chevette SS', tipo: 'Popular'};

conn.query(sql, carro, function(error, result, fields) {
    if (error) throw error;
    console.log('Carro salvo com sucesso, id: ' + result.insertId);
});

conn.end();