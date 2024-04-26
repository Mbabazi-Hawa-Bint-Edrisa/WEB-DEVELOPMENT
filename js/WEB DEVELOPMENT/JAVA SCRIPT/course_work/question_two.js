
function square(number) {
    return number * number;
  }
  

function squaredNumbers() {
    for (let i = 1; i <= 10; i++) {
        const squaredValue = square(i);
        console.log(`Square of ${i} is: ${squaredValue}`);
    }
}

// Call the function to display squared numbers
squaredNumbers();

  