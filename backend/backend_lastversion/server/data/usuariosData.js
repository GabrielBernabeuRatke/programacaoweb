const database = require('../database/database');

exports.getUsuarios = function () {
    return database.query('select * from usuario');
}

exports.getUsuario = function (usuarioID) {
    return database.query('select * from usuario where idusuario = $1',[usuarioID]);
}

exports.deleteUsuario = function (usuarioID) {
    return database.none('delete from usuario where idusuario = $1',[usuarioID]);
}

exports.saveUsuario = function (usuario) {
    return database.one('insert into usuario (usuario, senha) values ($1, $2) returning *'
    ,[usuario.usuario, usaurio.senha]);
}