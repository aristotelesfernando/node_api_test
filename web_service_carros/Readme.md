// Configiração para o MongoDB
docker run --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=q1w2e3 -d mongo:4

docker run --name mongoclient -p 3000:3000 --link mongodb:mongodb -d mongoclient/mongoclient

docker exec -it mongodb mongo --host localhost -u admin -p q1w2e3 --authenticationDatabase admin --eval "db.getSiblingDB('livro').createUser({user:'fernando', pwd: '123456', roles: [{role: 'readWrite', db: 'livro'}]})"