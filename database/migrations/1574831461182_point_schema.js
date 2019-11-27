'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PointSchema extends Schema {
  up () {
    this.create('points', (table) => {
      table.increments()
      table.string('latitude').notNullable()
      table.string('longitude').notNullable()
      table
        .integer('area_id')
        .references('id')
        .inTable('areas')
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
    this.drop('points')
  }
}

module.exports = PointSchema
