'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class QuestionSchema extends Schema {
  up () {
    this.create('questions', (table) => {
      table.increments()
      table.string('description').notNullable()
      table
        .integer('area_id')
        .references('id')
        .inTable('areas')
        .unsigned()
        .onUpdate('CASCADE')
        .onDelete('SET NULL');
      table.string('link_video')
      table.string('link_image')
      table.timestamps()
    })
  }

  down () {
    this.drop('questions')
  }
}

module.exports = QuestionSchema
