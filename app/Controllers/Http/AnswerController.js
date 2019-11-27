'use strict'

const Answer = use('App/Models/Answer')
class AnswerController {

  async index ({ request, response, view }) {
    try {
      const answers = await Answer.all()

      return answers;
    } catch (err) {
      return response.status(err.status).send({ error: {
        message: "Ops... Algo deu errado ao listar as respostas. Tente novamente mais tarde"
      }})
    }
  }
}

module.exports = AnswerController
