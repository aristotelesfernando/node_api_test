let express = require('express');
const router = express.Router();
const exec = require('./util');
let fs = require('fs');
const bodyParser = require('body-parser');

router.post('/', exec(async(req, res, next) => {
    let fileName = req.body.fileName;
    let Base64 = req.body.Base64;

    console.log('-------> processando imagem');

    let buf = Buffer.from(Base64, 'base64');

    fs.writeFile('./fotos/'+fileName, buf, 'binary', function(err) {
        if(err) {
            next(err);
            res.json({msg: 'Erro ao salvar o arquivo de imagem'});
        } else {
            res.json({msg: 'Arquivo de imagem salvo com sucesso...'});
        }
    });
}));

module.exports = router;