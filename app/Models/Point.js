'use strict'

const Model = use('Model')

class Point extends Model {
  area() {
    return this.belongsTo('App/Models/Area', 'area_id', 'id');
  }

  activity() {
    return this.belongsTo('App/Models/Activity', 'activity_id', 'id');
  }
}

module.exports = Point
