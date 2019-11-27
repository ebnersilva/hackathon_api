'use strict'

const UserPoint = use('App/Models/UserPoint');

class UserPointController {
  async store ({ request, response }) {
    try {
      const data = request.only(['user_id', 'point_id']);

      const userPoint = UserPoint.create(data);

      return userPoint;
    } catch (err) {
      return response.status(err.status).send({ error: {
        message: 'Ops... Falha ao cadastrar o registro de marcação de atividade. Tente novamente mais tarde!'
      }})
    }
  }
}

module.exports = UserPointController
