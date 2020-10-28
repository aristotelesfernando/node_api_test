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

let sql = "delete from carro where id = ?";
let id = 31;

conn.query(sql, id, function(error, result, fields) {
    if (error) throw error;
    console.log('Carro deletado com sucesso!');
    console.log('Foram excluidos :' + result.affectedRows);
});

conn.end();