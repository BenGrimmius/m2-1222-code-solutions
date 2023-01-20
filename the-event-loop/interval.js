var currentCount = 3;

var minusOne = setInterval(countDown, 1000);

function countDown() {
  console.log(currentCount--);
  if (currentCount < 0) {
    currentCount = 'Blast off!';
    console.log(currentCount);
    clearInterval(minusOne);
  }
}
