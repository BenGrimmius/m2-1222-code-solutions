var h1 = document.querySelector('h1');
var count = 4;

function countdown() {
  h1.textContent = count;
  count--;
  if (count < 0) {
    h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(end);
  }
}

var end = setInterval(countdown, 1000);
