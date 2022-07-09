const tags = require('./remotiveTags')

let testLine = 'I am an expert in React.js and JavaScript and nosql.'


/* 
console.log(
    isValidChar('a'),
    isValidChar('A'),
    isValidChar('0'),
    isValidChar('.'),
    isValidChar('?'),
    isValidChar(',')
) */

function lineTagger(line){

    const isValidChar = (char)=>{
        return /^[a-zA-Z0-9]+$/.test(char)
    }

    let words = line.split(' ')
    let pWords = []

    for(let word of words){
        word=word.toLowerCase()
        isValidChar(word[0]) ? null : word = word.slice(1,word.length) 
        isValidChar(word[word.length-1]) ? null : word = word.slice(0,word.length-1)
        pWords.push(word)
    }

    return pWords.filter(word=>tags.includes(word))
}

