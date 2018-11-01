const mongoose = require('mongoose');
const ModaMasculina = require('../Models/modamasculinaModel');

exports.registrarModaMasculina  = function(req, res, next) {
    ModaMasculina.create({
        linkBanner: req.body.linkBanner,
        porcentagem: req.body.porcentagem,
        nome: req.body.nome,
        valor: req.body.valor,
        descricao: req.body.descricao,
        localizacao: req.body.localizacao,
        telefone: req.body.telefone,
        valorMax: req.body.valorMax,
        valorMin: req.body.valorMin

    }, function(err, modamasculinas){
        if(err)
        return res.status(500).send({
            message: 'Erro ao criar produto',
            erro: err
        })
    
        return res.status(200).send({
            message: 'Protudo criando com sucesso',
            ModaMasculina: modamasculinas //no plural que indica varios
        })
    })
}
exports.getTodoModaMasculina = function(req, res, next) {
    var query = ModaMasculina.find()

    query.exec( function (err, modamasculinas){
        if(err)
            return res.status(500).send({
                message: 'Erro ao adquirir todos os produtos',
                erro: err
            })
        return res.status(200).json(modamasculinas)    
    })
}