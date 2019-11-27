'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddInputTitleOnQuestionsSchema extends Schema {
  up () {
    this.table('questions', (table) => {
      table.string('title').notNullable()
    })
  }

  down () {
    this.table('questions', (table) => {
      table.dropColumns(['title'])
    })
  }
}

module.exports = AddInputTitleOnQuestionsSchema
