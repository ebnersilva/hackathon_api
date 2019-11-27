'use strict'

const Model = use('Model')

class UserPoint extends Model {
  user() {
    return this.belongsTo('App/Models/User', 'user_id', 'id');
  }

  point() {
    return this.belongsTo('App/Models/Point', 'point_id', 'id');
  }
}

module.exports = UserPoint
