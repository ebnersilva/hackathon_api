'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddInputQuestionOnQuestionsSchema extends Schema {
  up () {
    this.table('questions', (table) => {
      table.string('question').notNullable()
    })
  }

  down () {
    this.table('questions', (table) => {
      table.dropColumns(['question'])
    })
  }
}

module.exports = AddInputQuestionOnQuestionsSchema
