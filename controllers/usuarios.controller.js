const { response, request } = require('express')

const getUsuarios = (req = request, res = response) => {
    const { despedida, mensaje, page = 1, limit = 10 } = req.query
    res.json({
        msg: 'get API - controlador',
        despedida,
        mensaje,
    })
}

const postUsuarios = (req = request, res = response) => {
    res.json(
        { msg: 'post API - controlador' }
    )
}

const putUsuarios = (req = request, res = response) => {
    const id = req.params.id
    res.json(
        { msg: 'put API - controlador' }
    )
}

const patchUsuarios = (req = request, res = response) => {
    res.json(
        { msg: 'patch API - controlador' }
    )
}

const deleteUsuarios = (req = request, res = response) => {
    res.json(
        { msg: 'delete API - controlador' }
    )
}

module.exports = {
    getUsuarios,
    postUsuarios,
    patchUsuarios,
    putUsuarios,
    deleteUsuarios
}