const database = require('../database/redis/connection');

exports.getRedis = function () {
    return database.query('select * from redis');
}

exports.getRedis = function (redisID) {
    return database.query('select * from redis where idredis = $1',[redisID]);
}

exports.deleteRedis = function (redisID) {
    return database.none('delete from redis where idredis = $1',[redisID]);
}

exports.saveRedis = function (redis) {
    return database.one('set redis (descricao, editora) values ($1, $2) returning *'
    ,[redis.descricao, redis.editora]);
}