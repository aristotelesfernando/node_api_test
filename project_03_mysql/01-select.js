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


let sql = "select id, nome, tipo from carro";
try {
    conn.query(sql, function(error, result, fields) {
        if (error) throw error;
        let carros = result;
        // for(let i = 0; i < carros.length; i++) {
        //     console.log(carros[i].id+': '+carros[i].nome+'('+carros[i].tipo+')');
        // };

        // ou 

        for(let i in carros) {
            console.log(carros[i].id+': '+carros[i].nome+'('+carros[i].tipo+')');
        }
    });    
} catch (error) {
    console.error(error);
}

conn.end();
