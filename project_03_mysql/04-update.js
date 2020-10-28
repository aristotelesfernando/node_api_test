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

let sql = "update carro set ? where id = ?";
var json = {id: 31, nome:'Chevette SS 2.5 Turbo', tipo: 'Esportivo Popular'};

let id = json.id;

conn.query(sql, [json, id], function(error, result, fields) {
    if (error) throw error;
    console.log('Carro atualizado com sucesso !');
    console.log('Quantidade de registros atualizados: ' + result.affectedRows);
});

conn.end();