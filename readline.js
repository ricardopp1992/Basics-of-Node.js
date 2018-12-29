const readline = require('readline')
const rl = readline.createInterface(process.stdin, process.stdout)

let realPerson = {
    name : '',
    saying : []
}

rl.question("What is the name of real person?", function(answer){
    realPerson.name = answer
    
    rl.setPrompt(`What would ${realPerson.name} say? `)
    rl.prompt()

    // se active cada vez que escribimos algo en consola y damos enter
    rl.on('line', (saying) => {
        realPerson.saying.push(saying.trim())

        if(saying.toLowerCase().trim() == 'exit'){
            rl.close()

        }else{
            rl.setPrompt(`What else would ${realPerson.name} say? `)
            rl.prompt()

        }

    })

    rl.on('close', ()=>{
        console.log('%s would say %j', realPerson.name, realPerson.saying)
    })
})