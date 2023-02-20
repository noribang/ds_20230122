// Anagram.
// Same number of values. Check length of strings.
// Same frequency of values.

function anagram(str1, str2) {
    // If lengths of strings are not equal no longer need to continue.
    // Test length of strings.
    // Check if both strings are not equal.
    // If string lengths are not equal return false.
    if (str1 !== str2) {
        return false;
    }
    // Loop through each element in str1.
    // Store to temp variable.
    // Compare temp to each element in str2.
    // If temp exists in str2 splice out that element from str1.
    for (let i = 0; i < str1.length; i++) {
        let temp = str1[i];
        // console.log(temp);
        for (let j = 0; j < str2.length; j++) {
            if (temp === str2[j]) {
                console.log(temp, " at: ", j)
            }
        }
    }


    // Retrue if str1 is empty.
    // return true;
}


strAna1 = ''
strAna2 = ''
// strAna1 = 'aaz'// false
// strAna2 = 'zza'// false
// strAna1 = 'anagram'
// strAna2 = 'nagaram'
anagram()