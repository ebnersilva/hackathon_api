'use strict'

const Question = use('App/Models/Question');

class QuestionController {
  async index ({ request, response, view }) {
    try {
      const questions = await Question.all()

      return questions;
    } catch (err) {
      return response.status(err.status).send({ error: {
        message: "Ops... Algo deu errado ao listar as perguntas. Tente novamente mais tarde"
      }})
    }
  }
}

module.exports = QuestionController
