let express = require('express');
const router = express.Router();
const exec = require('./util');
let fs = require('fs');
const s3 = require('../s3');

router.post('/', exec(async(req, res, next) => {
    let fileName = req.body.fileName;
    let Base64 = req.body.Base64;

    console.log('-------> processando imagem para o Amazon S3');

    let buf = Buffer.from(Base64, 'base64');

    fs.writeFile('./fotos/'+fileName, buf, 'binary', function(err) {
        if(err) {
            next(err);
            res.json({msg: 'Erro ao salvar o arquivo de imagem'});
        } else {
            res.json({msg: 'Arquivo de imagem salvo com sucesso...'});
        }
    });

    let path = "fotos/"+fileName;
    s3.upload(buf, path);
}));

module.exports = router_s3;