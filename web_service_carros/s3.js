let AWS = require('aws-sdk');
let accessKey = 'xxxxx'; //falta definir no aws
let secretKey = 'xxxxx';
let bucket = 'livro-aws';

class S3Helper {
    /**
     *  Faz Upload
     * 
     *  @param buffer  - buffer binário do arquivo
     *  @param path - caminho no qual o arquivo será salvo no S3
     * 
     */
    static upload(buffer, path) {
        // Configurando chaves de acesso
        AWS.config.update({accessKeyId: accessKey, secretAccessKey: secretKey});
        // Cria o objeto so S3
        let s3 = new AWS.S3();

        // Adiciona o arquivo no bucket espedificado no S3
        s3.putObject({
            Bucket: bucket,
            Key: path,
            Body: buffer,
            ACL: 'public-read',
            ContentType: 'image/jpeg'
        },function(resp) {
            console.log('Arquivo enviado com sucesso!');
        });
    }   
}

module.exports = S3Helper;