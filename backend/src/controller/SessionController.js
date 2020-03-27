/* Cria rotas de login a partir do ong_id */
const connection = require('../database/connection')

module.exports = {
    async index(request, response) {
        const ong_id = request.body.id
        const ongs = await connection('ongs')
            .where('id', ong_id)
            .select('ongs.name')

        if(ongs.length === 0) {
            return response.status(403).json({ error: 'Invalid login.' })
        }

        return response.status(202).json(ongs)
    }
}