let spawn = require('child_process').spawn

//como estoy ejecutando en la terminal desde nodeYoutube file,
// debemos indicarle la ruta del archivo desde donde estamos en la terminal
let cp = spawn('node', ['exec/alwaysTalking'])

cp.stdout.on('data', function(data){
    console.log(`STDOUT: ${data.toString().toUpperCase()}`)
})

cp.on('close', function() {
    console.log('Child Process has ended')
    
    process.exit()

})

setTimeout(() =>{
    cp.stdin.write('stop')
    // no funciona con console.log
    // console.log('stop')
    
}, 4000)