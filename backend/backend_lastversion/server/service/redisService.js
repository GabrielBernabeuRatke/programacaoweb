const booksData = require('../data/redisData');

exports.getRedis = function() {
    return redisData.getRedis();
}

exports.getRedis = function (redisID) {
    return redisData.getRedis(redisID);
}

exports.deleteRedis = function (redisID) {
    return redisData.deleteRedis(redisID);
}

exports.saveRedis = function (redis) {
    return redisData.saveRedis(redis);
}