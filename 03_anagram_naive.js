// Problem: Given two strings determine if 
// second string is an anagram of the second string.
// Anagram is a word, phrase or name formed by 
// rearranging the letters of another, such as,
// "cinema", formed from "iceman".

// Same elements in each string.
// Same frequency of elements in each string.

function checkAnagram(first, second) {
    // Test if two arrays are the same length.
    // If not return 
    if (first.length !== second.length) {
        return false;
    }
    // Create object to hold frequency of each character in first string.
    const lookup = {};
    // Loop through each character in 1st string.
    for (i = 0; i < first.length; i++) {
        let letter = first[i];
        // If letter exists, increment, otherwise set to 1.
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    // console.log(lookup);
    // Test for anagram in second string.
    for (let i = 0; i < second.length; i++) {
        // Loop through each letter in string.
        let letter = second[i];
        // console.log(letter)
        // If letter in second string is not found
        // in first string return false.
        
        if (!lookup[letter]) {
            // console.log(lookup[letter])
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
}


validAnagram('','') //true
validAnagram('aaz','zza') //false
validAnagram('anagram','nagaram') //true
validAnagram('rat','car') //false