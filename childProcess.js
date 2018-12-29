const exec = require('child_process').exec


// abrir una nueva terminal (no funciona aquí) 
// exec('open -a Terminal .')

// exec('ls', (err, stdout) => {
//     if(err){
//         console.error(err)
//         return
//     }

//     console.log('Listing Finished')
//     console.log(stdout)
// })

exec('git --version', (err, stdout) => {
    if(err){
        console.error(err)
        return
    }

    console.log(stdout)
})