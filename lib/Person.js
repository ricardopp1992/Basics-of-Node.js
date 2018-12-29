const EventEmitter = require('events').EventEmitter
const util = require('util')

const Person = function(name){
    this.name = name
}

// la funcion (prototype) Person hereda las funcionalidades de EventEmitter
util.inherits(Person, EventEmitter)

module.exports = Person