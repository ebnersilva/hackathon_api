'use strict'

const Area = use('App/Models/Area')
class AreaController {

  async index ({ response }) {
    try {
      const areas = await Area.all()

      return areas
    } catch (err) {
      return response.status(err.status).send({ error: {
        message: 'Ops... Falha ao listar todas as areas. Tente novamente mais tarde!'
      }})
    }
  }

  async store ({ request, response }) {
    try {
      const data = request.only(['name', 'content']);

      const area = await Area.create(data);

      return area
    } catch (err) {
      return response.status(err.status).send({ error: {
        message: 'Ops... Falha ao criar a area. Tente novamente mais tarde!'
      }})
    }
  }

  async show ({ params }) {
    try {
      const area = await Area.findOrFail(params.id);

      return area
    } catch (err) {
      return response.status(err.status).send({ error: {
        message: 'Ops... Falha ao mostrar a area. Tente novamente mais tarde!'
      }})
    }
  }
}

module.exports = AreaController
