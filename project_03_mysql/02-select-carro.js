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

let sql = "select id, nome, tipo from carro where id = ?";
let id = 31;

conn.query(sql, id, function(error, result, fields) {
    if (error) throw error;
    if (result.length == 0) {
        console.error('Nenhum carro encontrado');
        return;
    }

    let carro = result[0];
    console.log(carro.id+': '+carro.nome+'('+carro.tipo+')');
});

conn.end();