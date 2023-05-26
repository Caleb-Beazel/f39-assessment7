//Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

function findLongestWord(wordsArr){
    let longestWordCount = 0
    for(word of wordsArr){
        if (word.length > longestWordCount){
            longestWordCount = word.length
        }
    } return longestWordCount
}

console.log(findLongestWord(['camel','caterpillar', 'cat']))

//Runtime Complexity: O(n)
//Space Complexity: O(1)