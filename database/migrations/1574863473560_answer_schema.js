'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnswerSchema extends Schema {
  up () {
    this.create('answers', (table) => {
      table.increments()
      table
        .integer('question_id')
        .references('id')
        .inTable('questions')
        .unsigned()
        .onUpdate('CASCADE')
        .onDelete('SET NULL');
      table.string('description')
      table.string('weight')
      table.boolean('correct')
      table.timestamps()
    })
  }

  down () {
    this.drop('answers')
  }
}

module.exports = AnswerSchema
