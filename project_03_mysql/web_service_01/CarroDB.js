var mysql = require('mysql');

class CarroDB {
    static connect() {
        var conn = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'q1w2e3r4',
            database: 'livro'
        });

        conn.connect();
        return conn;
    }

    static getCarros(callback) {
        let conn = CarroDB.connect();
        let sql = 'select * from carro';

        let query = conn.query(sql, function(error, results, fields) {
            if (error) throw error;
            callback(results); 
        });
        console.log(query.sql);
        conn.end();
    }

    static getCarrosByTipo(tipo, callback) {
        let conn = CarroDB.connect();
        let sql = "select * from carro where tipo ='"+ tipo +"'";

        let query = conn.query(sql, function(error, results, fields) {
            if (error) throw error;
            callback(results);
        });
        console.log(query.sql);
        conn.end();
    }

    static getCarrosById(id, callback) {
        let conn = CarroDB.connect();
        let sql = 'select * from carro where id = ?';

        let query = conn.query(sql, id, function(error, results, fields) {
            if (error) throw error;

            if(results.length == 0) {
                console.error('Nenum carro encontrado...');
                return;
            }

            let carro = results[0];
            callback(carro); 
        });
        console.log(query.sql);
        conn.end();
    }    

    static save(carro, callback) {
        let conn = CarroDB.connect();
        let sql = 'insert into carro set ?';

        let query = conn.query(sql, carro, function(error, results, fields) {
            if (error) throw error;

            carro.id = results.insertId;
            callback(carro);
        });

        console.log(query.sql);
        conn.end();
    }

    static update(carro, callback) {
        let conn = CarroDB.connect();
        let sql = 'update carro set ? where id = ?';

        let id = carro.id;
        let query = conn.query(sql, [carro, id], function(error, results, fields) {
            if (error) throw error;
            callback(carro);
        });

        console.log(query.sql);
        conn.end;
    }

    static deleteById(id, callback) {
        let conn = CarroDB.connect();
        let sql = 'delete from carro where id = ?';

        let query = conn.query(sql, id, function(error, results, fields) {
            if (error) throw error;
            callback(results.affectedRows); 
        });
        console.log(query.sql);
        conn.end();       
    }
}

module.exports = CarroDB;