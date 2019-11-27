'use strict'

const Model = use('Model')

class UserActivity extends Model {
  user() {
    return this.belongsTo('App/Models/User', 'user_id', 'id');
  }

  activity() {
    return this.belongsTo('App/Models/Activity', 'activity_id', 'id');
  }
}

module.exports = UserActivity
