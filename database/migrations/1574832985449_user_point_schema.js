'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserPointSchema extends Schema {
  up () {
    this.create('user_points', (table) => {
      table.increments()
      table
        .integer('user_id')
        .references('id')
        .inTable('users')
        .unsigned()
        .onUpdate('CASCADE')
        .onDelete('SET NULL');
      table
        .integer('point_id')
        .references('id')
        .inTable('points')
        .unsigned()
        .onUpdate('CASCADE')
        .onDelete('SET NULL');
      table.timestamps()
    })
  }

  down () {
    this.drop('user_points')
  }
}

module.exports = UserPointSchema
