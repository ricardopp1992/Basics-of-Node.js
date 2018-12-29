let saying = [
    'You may delay, but time will not',
    'tell me and I forget. Teach me and I remember. Involve me and I learn',
    'It takes many goods deeds to build a good reputation, and only one bad one to lose it',
    'Early to bed and early to rise makes a man healthy, wealthy and wise',
    'By failing to prepare, you are preparing to fail',
    'An investment in knowledge pays the best interest',
    'Well done is better than well said'
]

let interval = setInterval(() => {
    // floor ->  redondea
    let i = Math.floor(Math.random() * saying.length)
    process.stdout.write(`${saying[i]} \n`)
}, 1000)

process.stdin.on('data', (data) => {
    console.log(`STDIN Data Recieve -> ${data.toString().trim()}`)
    clearInterval(interval)
    process.exit()
})