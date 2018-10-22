'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Attendance extends Model {
  static get table () {
    return 'main_empattendance'
  }

}

module.exports = Attendance
