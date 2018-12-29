// const events = require('events')

// const emitter = new events.EventEmitter()

// emitter.on('anyEvent', (message, status) => {
//     console.log(`${status}: ${message}`)
// })

// emitter.emit('anyEvent', 'hello world', 200) 

// ==========================================================

const Person = require('./lib/Person')

let ricardo = new Person('Ricardo Pérez')
let camila = new Person('Camila Di Virgilio')

ricardo.on('speak', function(said) {
    console.log(`${this.name}: ${said}`)
})

camila.on('speak', function(said){
    console.log(`${this.name}: ${said}`)
})

ricardo.emit('speak', "Yo may delay, but time will not.")
camila.emit('speak', 'It is far better to be alone, than to be in bad company')