let express = require('express');
let app = express();
const carrodb = require('./model/CarroDB');
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api', require('./routes/carros'));

let server = app.listen(3000, function() {
    let host = server.address().address;
    let port = server.address.port;

    console.log(`Servidor iniciado em http://${host}:${port}`);
});

