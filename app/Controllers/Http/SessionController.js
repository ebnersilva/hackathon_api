'use strict'

const User = use('App/Models/User');

class SessionController {
  async store ({ request, response, auth }) {
    try {
      const data = request.only(['email', 'password']);

      const user = await User.findByOrFail('email', data.email);

      const token = await auth.attempt(
        data.email,
        data.password
      );

      return [ token, user ];
    } catch (err) {
      return response.status(err.status).send({ error: {
        message: err.message
      }})
    }
  }
}

module.exports = SessionController
