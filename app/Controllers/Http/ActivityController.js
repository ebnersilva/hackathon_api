'use strict'

const Activity = use('App/Models/Activity');

class ActivityController {
  async store ({ request, response }) {
    try {
      const data = request.only(['name', 'user_id'])

      const activity = await Activity.create(data);

      return activity;
    } catch (err) {
      return response.status(err.status).send({ error: {
        message: 'Ops... Falha ao cadastrar a atividade. Tente novamente mais tarde!'
      }})
    }
  }
}

module.exports = ActivityController
