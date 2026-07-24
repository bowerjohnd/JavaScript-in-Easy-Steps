let i = 0;
for (i = 1; i < 11; i++) {
    console.log('Iteration Number: ' + i);
}

// seeing if you can use let for iterator variable instead declaring above
for (let j = 0; j < 100; j++) {
    if (j % 13 === 0) {
        console.log('Divisible by 13: ' + j);
    }
}