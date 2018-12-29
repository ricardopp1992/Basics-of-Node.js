const fs = require('fs')
const path = require('path')

const file = path.resolve(__dirname, './aLotOfData.txt')

// // this is a way that we could do for read a file, but the wait to buffer all data and then
// // shows to us the data

// fs.readFile(file, 'UTF-8', function(err, data) {
//     if(err){
//         process.stdout.write('Process will exit \n' + err)
//         process.exit()
//     }

//     console.log(`File Read ${data.length}`)
// })

// console.log('Reading file')

// ============================================================

// an other way to read a file is with STREAMS :D 

const stream = fs.createReadStream(file, 'UTF-8')

let data = ''

stream.once('data', () => {
    console.log('\n\n\n')
    console.log('Started Reading file')
    console.log('\n\n\n')
})

stream.on('data', (chunk) => {
    process.stdout.write(`chunk : ${chunk.length}  | `)
    data += chunk
})

stream.on('end', () => {
    console.log('\n\n\n')
    console.log(`Finished reading file ${data.length}`)
    console.log('\n\n\n')
})