'use strict'

const UserAnswer = use('App/Models/UserAnswer');

class UserAnswerController {

  async index ({ response }) {
    try {
      const userAnswers = await UserAnswer.all()

      return userAnswers;
    } catch (err) {
      return response.status(err.status).send({ error: {
        message: "Ops... Algo deu errado ao listar a resposta do usuário. Tente novamente mais tarde"
      }})
    }
  }

  async store ({ request, response }) {
    try {
      const data = request.only(['activity_id', 'user_id', 'question_id', 'answer_id', 'answer_correct_id'])

      const userAnswer = await UserAnswer.create(data)

      return userAnswer;
    } catch (err) {
      return response.status(err.status).send({ error: {
        message: "Ops... Algo deu errado ao criar a resposta do usuário. Tente novamente mais tarde"
      }})
    }
  }
}

module.exports = UserAnswerController
