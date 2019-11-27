'use strict'

const Point = use('App/Models/Point');
const Area = use('App/Models/Area');

class PointController {

  async index ({ response }) {
    try {
      const points = await Point.all()

      return points
    } catch (err) {
      return response.status(err.status).send({ error: {
        message: 'Ops... Falha ao listar todos os Points. Tente novamente mais tarde!'
      }})
    }
  }

  async store ({ request, response, auth }) {
    try {
      const user = await auth.getUser();

      const data = request.only(['latitude', 'longitude', 'activity_id']);

      if (user.type > 0) {
        return response.status(400).send({ error: {
          message: "Você não é um professor para criar uma atividade."
        }})
      }

      const areaIds = await Point.query().where('activity_id', data.activity_id).pluck('area_id')
      const areasAvailable = await Area.query().whereNotIn('id', areaIds).fetch();

      if (areasAvailable.toJSON().length > 0){
        data.area_id = areasAvailable.toJSON()[0].id
        const point = await Point.create(data);
        return point;
      } else {
        return response.status(400).send({ error: {
          message: "Não existe mais áreas disponíveis para essa atividade!"
        }})
      }
    } catch (err) {
      return response.status(err.status).send({ error: {
        message: 'Ops... Falha ao gravar o Point. Tente novamente mais tarde!'
      }})
    }
  }
}

module.exports = PointController
