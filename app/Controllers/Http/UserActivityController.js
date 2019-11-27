'use strict'

const UserActivity = use('App/Models/UserActivity');

class UserActivityController {
  async store ({ request, response }) {
    try {
      const data = request.only(['user_id', 'activity_id']);

      const userActivity = UserActivity.create(data);

      return userActivity;
    } catch (err) {
      return response.status(err.status).send({ error: {
        message: 'Ops... Falha ao cadastrar a inscrição do aluno na atividade. Tente novamente mais tarde!'
      }})
    }
  }
}

module.exports = UserActivityController
