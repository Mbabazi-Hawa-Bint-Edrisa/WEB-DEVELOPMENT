function fibonacci() {
    let a = 0, b = 1, temp;
    console.log(a); 
    console.log(b); 
    while (a + b <= 100) {
        num = a + b;
        console.log(num);
        a = b;
        b = num;
    }
}

fibonacci();
