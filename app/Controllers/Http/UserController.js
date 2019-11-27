'use strict'

const User = use('App/Models/User');

class UserController {
  async index ({ response }) {
    try {
      const users = await User.all()

      return users
    } catch (err) {
      return response.status(err.status).send({ error: {
        message: 'Ops... Falha ao listar todos os usuários. Tente novamente mais tarde!'
      }})
    }
  }

  async store ({ request, response }) {
    try {
      const data = request.only(['name', 'email', 'phone', 'password', 'type']);

      const user = await User.create(data);

      return user;
    } catch (err) {
      return response.status(err.status).send({ error: {
        message: 'Ops... Falha ao cadastrar o usuário. Tente novamente mais tarde!'
      }})
    }
  }

  async show ({ params, response }) {
    try {
      const user = await User.findOrFail(params.id);

      return user;
    } catch (err) {
      return response.status(err.status).send({ error: {
        message: 'Ops... Falha ao mostrar o usuário. Tente novamente mais tarde!'
      }})
    }
  }

  async update ({ params, request, response }) {
    try {
      const data = request.only(['name', 'email', 'phone', 'password', 'type']);
      const user = await User.findOrFail(params.id);

      await user.merge(data);

      await user.save();

      return user;
    } catch (err) {
      return response.status(err.status).send({ error: {
        message: 'Ops... Falha ao atualizar o usuário. Tente novamente mais tarde!'
      }})
    }
  }

  async destroy ({ params, response }) {
    try {
      const user = await User.findOrFail(params.id);

      await user.delete();
    } catch (err) {
      return response.status(err.status).send({ error: {
        message: 'Ops... Falha ao excluir o usuário. Tente novamente mais tarde!'
      }})
    }
  }
}

module.exports = UserController
