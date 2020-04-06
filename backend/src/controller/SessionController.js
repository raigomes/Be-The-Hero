/* Cria rotas de login a partir do ong_id */
const connection = require('../database/connection')

module.exports = {
    async index(request, response) {
        const { id } = request.body

        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first()

        if(!ong) {
            return response.status(400).json({ error: 'Invalid login.' })
        }

        return response.status(202).json(ong)
    }
}