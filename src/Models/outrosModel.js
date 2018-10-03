const mongoose = require('mongoose')

var OutrosSchema = new mongoose.Schema({
    linkBanner: {
        type: String,
        required: [true, 'Informe o nome do Produto']
    },
    porcentagem: {
        type: String,
        required: [true, 'Informe a quantidade do Produto']
    },
    nome: {
        type: String,
        required: [true, 'Informe o valor do Produto']
    },
    valor: {
        type: String,
        required: [true, 'Informe a marca do Produto']
    },
    descricao: {
        type: String,
        required: [true, 'Informe a marca do Produto']
    }

}, {
    timestamps: true
})

module.exports = mongoose.model('Outros', OutrosSchema)