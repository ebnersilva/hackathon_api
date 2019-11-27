'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddInputCallOnQuestionsSchema extends Schema {
  up () {
    this.table('questions', (table) => {
      table.string('call').notNullable()
    })
  }

  down () {
    this.table('questions', (table) => {
      table.dropColumns(['call'])
    })
  }
}

module.exports = AddInputCallOnQuestionsSchema
