const fs = require('fs')
const path = require('path')

// fs.watchFile('./modificar/modificar.txt',{interval : 1000}, (curr, prev) => {
//     console.log(`the event ${curr} has been triggered on ${prev}`)
// })

// el error estaba en que estaba tomando mal la dirección, para evitar eso
// usé el modulo path
const file = path.resolve(__dirname, './modificar')
console.log(`waiting for changes on ${file}`)

fs.watch(file, {encoding : 'utf8'}, (event, filename) => {
    if(event === 'change'){
        process.stdout.write('HOLA SE CAMBIÓ \n')
    }else if(event == 'rename'){
    process.stdout.write('se cambió el nombre \n')
    }
})


