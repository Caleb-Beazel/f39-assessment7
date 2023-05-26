//Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

function addToZero(array){
    for (i = 0; i < array.length; i++){
        for(j = i + 1; j < array.length; j++){
            if(array[i] + array[j] === 0){
                return true
            }
        }
    } return false
}

console.log(addToZero([3,4,5,6,3,-4]))

// Runtime Complexity: O(n^2)
// Space Complexity: O(1)