// Problem: Given two strings determine if 
// second string is an anagram of the second string.
// Anagram is a word, phrase or name formed by 
// rearranging the letters of another, such as,
// "cinema", formed from "iceman".

// Same elements in each array.
// Same frequency of elements in each array.

function checkAnagram(first, second) {
    // Test if two arrays are the same length.
    // If not return 
    if (first.length !== second.length) {
        return false;
    }
}


validAnagram('','') //true
validAnagram('aaz','zza') //false
validAnagram('anagram','nagaram') //true
validAnagram('rat','car') //false