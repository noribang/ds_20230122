function sumZero(arr) {
    // Iterate through array starting at 0.
    for (let i= 0; i < arr.length; i++) {
        // console.log(arr[i])
        for (let j = i + 1; j < arr.length; j++) {
            console.log(arr[j])

        }
    }


}

sumZero([-4,-3,-2,-1,0,1,2,5])