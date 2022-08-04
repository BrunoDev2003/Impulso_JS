function substituiPares(array) {
    if(!array) return -1;
    if(!array.length ) return -1;
    for(let i = 0;i< array.length;i++) {
        if(array[i] ===0) {
            console.log("voce já é zero");
        } else if(array[i] % 2 ===0) {
            console.log(`substituindo ${array[i]} por 0...`)
            array[i] = 0;
        } 
    }

    return array; 
}

let nums = [1,3,4,6,76,345,56,323,56,23,87,345,7,7,5,45];
console.log(substituiPares(nums));