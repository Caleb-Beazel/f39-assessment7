/* A pangram is a sentence that contains all the letters of the English alphabet 
at least once, like “The quick brown fox jumps over the lazy dog.”

Write a function to check a sentence to see if it is a pangram or not. */

function isPangram(sentence){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'

    for(letter of alphabet){
        if (!sentence.includes(letter)){
            return false       
        }
    } return true
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"))


//Runtime Complexity: O(n)
//Space Complexity: O(n)