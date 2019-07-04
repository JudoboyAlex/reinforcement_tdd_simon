function echo(word){
    return word;
}

function shout(word){
    return word.toUpperCase();
}

function repeat(word, num){
   return word.concat(' ').repeat(num).substring(0,((word.length + 1)*num-1));    
}

function startOfWord(word, num){
    return word.substring(0, num)
}

function firstWord(word){
    return word.split(' ')[0]
}

module.exports = {echo: echo, shout: shout, repeat: repeat, startOfWord: startOfWord, firstWord: firstWord};

