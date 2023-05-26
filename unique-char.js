//Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

function hasUniqueChar(word){
    for (i = 0; i < word.length; i++){
        for(j = i + 1; j < word.length; j++){
            if(word[i] === word[j]){
                return false
            }
        }
    } return true
    console.log(wordArr)
}

console.log(hasUniqueChar('monday'))

//Runtime Complexity: O(n^2)
//Space Complexity: O(1)