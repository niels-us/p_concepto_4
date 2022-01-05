const model = require('../models/fieldAdditional')

const getAll = async (req, res)=>{
    const additional = await model.getAll(req.body)
    return res.status(200).json({message: "Listado de campos adicionales", data: additional, err: false})
}

const create = async (req, res)=>{
    const additional = await model.create(req.body)
    return res.status(200).json({message: "Creado campos adicionales", data: additional, err: false})
}

module.exports = {getAll, create}