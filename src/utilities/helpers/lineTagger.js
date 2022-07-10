export default function lineTagger(line){
    const tags = require('./remotiveTags')

    const isValidChar = (char)=>{
        return /^[a-zA-Z0-9]+$/.test(char)
    }

    let words = line.split(' ')
    let pWords = []

    for(let word of words){
        word=word.toLowerCase()

        if(!isValidChar(word[0])){
            word = word.slice(1,word.length) 
        }

        if(!isValidChar(word[word.length-1])){
            word = word.slice(0,word.length-1)
        }

        pWords.push(word)
    }

    //I could make this more efficient using a binary search since tags are sorted. Iceboxed.
    return pWords.filter(word=>tags.includes(word))
}

