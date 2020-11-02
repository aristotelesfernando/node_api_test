// Classe CarroDB utilizando promises em todos os seus métodos

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
        return new Promise(function(resolve, reject) {
            let conn = CarroDB.connect();
            let sql = 'select * from carro';

            let query = conn.query(sql, function(error, results, fields) {
                if (error) {
                    // callback(error, null);
                    // return;
                    reject(error);
                } else {
                    resolve(results); 
                }                
            });
            console.log(query.sql);
            conn.end();
        });
    }

    static getCarrosByTipo(tipo, callback) {
        return new Promise(function(resolve, reject) {
            let conn = CarroDB.connect();
            let sql = "select * from carro where tipo ='"+ tipo +"'";

            let query = conn.query(sql, function(error, results, fields) {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
            console.log(query.sql);
            conn.end();
        });
    }

    static getCarrosById(id, callback) {
        return new Promise(function(resolve, reject) {
            let conn = CarroDB.connect();
            let sql = 'select * from carro where id = ?';

            let query = conn.query(sql, id, function(error, results, fields) {
                if (error) {
                    reject(error);
                } else {
                    if(results.length == 0) {
                        let error = new Error('A consulta não retornou resultados...');
                        reject(error);
                    }
                    let carro = results[0];
                    resolve(carro);
                }
            });
            console.log(query.sql);
            conn.end();
        });
    }    

    static save(carro, callback) {
        return new Promise(function(resolve, reject) {
            let conn = CarroDB.connect();
            let sql = 'insert into carro set ?';

            let query = conn.query(sql, carro, function(error, results, fields) {
                if (error){
                    reject(error);
                } else {
                    carro.id = results.insertId;
                    resolve(carro);
                }
            });
            console.log(query.sql);
            conn.end();
        });
    }

    static update(carro, callback) {
        return new Promise(function(resolve, reject) {
            let conn = CarroDB.connect();
            let sql = 'update carro set ? where id = ?';

            let id = carro.id;
            let query = conn.query(sql, [carro, id], function(error, results, fields) {
                if (error){
                    reject(error);
                } else {
                    resolve(carro);
                }
            });
            console.log(query.sql);
            conn.end;
        });
    }

    static deleteById(id, callback) {
        return new Promise(function(resolve, reject) {
            let conn = CarroDB.connect();
            let sql = 'delete from carro where id = ?';

            let query = conn.query(sql, id, function(error, results, fields) {
                if (error) {
                    reject(error);
                } else {
                    resolve(results.affectedRows);
                }
            });
            console.log(query.sql);
            conn.end();
        });       
    }

    static delete(carro) {
        return new Promise(function(resolve, reject) {
            let conn = CarroDB.connect();
            let sql = 'delete from carro where id = ?';
            let id = carro.id;

            conn.query(sql, id, function(error, results, fields) {
                if (error) {
                    reject(error);
                } else {
                    resolve(carro);
                }
            });
            console.log(query.sql);
            conn.end();            
        });
    }
}

module.exports = CarroDB;