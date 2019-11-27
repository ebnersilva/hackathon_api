'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserAnswerSchema extends Schema {
  up () {
    this.create('user_answers', (table) => {
      table.increments()
      table
        .integer('activity_id')
        .references('id')
        .inTable('activities')
        .unsigned()
        .onUpdate('CASCADE')
        .onDelete('SET NULL');
      table
        .integer('user_id')
        .references('id')
        .inTable('users')
        .unsigned()
        .onUpdate('CASCADE')
        .onDelete('SET NULL');
      table
        .integer('question_id')
        .references('id')
        .inTable('questions')
        .unsigned()
        .onUpdate('CASCADE')
        .onDelete('SET NULL');
      table
        .integer('answer_id')
        .references('id')
        .inTable('answers')
        .unsigned()
        .onUpdate('CASCADE')
        .onDelete('SET NULL');
      table
        .integer('answer_correct_id')
        .references('id')
        .inTable('answers')
        .unsigned()
        .onUpdate('CASCADE')
        .onDelete('SET NULL');
      table.timestamps()
    })
  }

  down () {
    this.drop('user_answers')
  }
}

module.exports = UserAnswerSchema
