(function() {
            
    let numOne = 10, numTwo = 5;

    console.log('numOne: ' + numOne);
    console.log('numTwo: ' + numTwo);

    // XOR (opposite)
    numOne = numOne ^ numTwo;   
            // 1010 ^ 0101 = 1111 (15)
    numTwo = numOne ^ numTwo;
            // 1111 ^ 0101 = 1010 (10)
    numOne = numOne ^ numTwo;
            // 1111 ^ 1010 = 0101 (5)

    console.log('\n' + 'numOne: ' + numOne);
    console.log('numTwo: ' + numTwo);
})()
