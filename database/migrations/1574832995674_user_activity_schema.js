'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserActivitySchema extends Schema {
  up () {
    this.create('user_activities', (table) => {
      table.increments()
      table
        .integer('user_id')
        .references('id')
        .inTable('users')
        .unsigned()
        .onUpdate('CASCADE')
        .onDelete('SET NULL');
      table
        .integer('activity_id')
        .references('id')
        .inTable('activities')
        .unsigned()
        .onUpdate('CASCADE')
        .onDelete('SET NULL');
      table.timestamps()
    })
  }

  down () {
    this.drop('user_activities')
  }
}

module.exports = UserActivitySchema
