var chevLeft = document.querySelector('.left');
var chevRight = document.querySelector('.right');
var img = document.querySelector('img');

var dotOne = document.querySelector('.one');
var dotTwo = document.querySelector('.two');
var dotThree = document.querySelector('.three');
var dotFour = document.querySelector('.four');
var dotFive = document.querySelector('.five');

dotOne.addEventListener('click', function () {
  img.setAttribute('src', 'images/001.png');
  dotOne.setAttribute('class', 'dot one fa-solid fa-circle');
  dotTwo.setAttribute('class', 'dot two fa-regular fa-circle');
  dotThree.setAttribute('class', 'dot three fa-regular fa-circle');
  dotFour.setAttribute('class', 'dot four fa-regular fa-circle');
  dotFive.setAttribute('class', 'dot five fa-regular fa-circle');
});

dotTwo.addEventListener('click', function () {
  img.setAttribute('src', 'images/004.png');
  dotOne.setAttribute('class', 'dot one fa-regular fa-circle');
  dotTwo.setAttribute('class', 'dot two fa-solid fa-circle');
  dotThree.setAttribute('class', 'dot three fa-regular fa-circle');
  dotFour.setAttribute('class', 'dot four fa-regular fa-circle');
  dotFive.setAttribute('class', 'dot five fa-regular fa-circle');
});

dotThree.addEventListener('click', function () {
  img.setAttribute('src', 'images/007.png');
  dotOne.setAttribute('class', 'dot one fa-regular fa-circle');
  dotTwo.setAttribute('class', 'dot two fa-regular fa-circle');
  dotThree.setAttribute('class', 'dot three fa-solid fa-circle');
  dotFour.setAttribute('class', 'dot four fa-regular fa-circle');
  dotFive.setAttribute('class', 'dot five fa-regular fa-circle');
});

dotFour.addEventListener('click', function () {
  img.setAttribute('src', 'images/025.png');
  dotOne.setAttribute('class', 'dot one fa-regular fa-circle');
  dotTwo.setAttribute('class', 'dot two fa-regular fa-circle');
  dotThree.setAttribute('class', 'dot three fa-regular fa-circle');
  dotFour.setAttribute('class', 'dot four fa-solid fa-circle');
  dotFive.setAttribute('class', 'dot five fa-regular fa-circle');
});

dotFive.addEventListener('click', function () {
  img.setAttribute('src', 'images/039.png');
  dotOne.setAttribute('class', 'dot one fa-regular fa-circle');
  dotTwo.setAttribute('class', 'dot two fa-regular fa-circle');
  dotThree.setAttribute('class', 'dot three fa-regular fa-circle');
  dotFour.setAttribute('class', 'dot four fa-regular fa-circle');
  dotFive.setAttribute('class', 'dot five fa-solid fa-circle');
});

chevLeft.addEventListener('click', function () {
  if (dotOne.className === 'dot one fa-solid fa-circle') {
    img.setAttribute('src', 'images/039.png');
    dotFive.setAttribute('class', 'dot five fa-solid fa-circle');
    dotOne.setAttribute('class', 'dot one fa-regular fa-circle');
  } else if (dotFive.className === 'dot five fa-solid fa-circle') {
    img.setAttribute('src', 'images/025.png');
    dotFive.setAttribute('class', 'dot five fa-regular fa-circle');
    dotFour.setAttribute('class', 'dot four fa-solid fa-circle');
  } else if (dotFour.className === 'dot four fa-solid fa-circle') {
    img.setAttribute('src', 'images/007.png');
    dotFour.setAttribute('class', 'dot four fa-regular fa-circle');
    dotThree.setAttribute('class', 'dot three fa-solid fa-circle');
  } else if (dotThree.className === 'dot three fa-solid fa-circle') {
    img.setAttribute('src', 'images/004.png');
    dotThree.setAttribute('class', 'dot three fa-regular fa-circle');
    dotTwo.setAttribute('class', 'dot two fa-solid fa-circle');
  } else if (dotTwo.className === 'dot two fa-solid fa-circle') {
    img.setAttribute('src', 'images/001.png');
    dotTwo.setAttribute('class', 'dot two fa-regular fa-circle');
    dotOne.setAttribute('class', 'dot one fa-solid fa-circle');
  }
});

chevRight.addEventListener('click', function () {
  if (dotOne.className === 'dot one fa-solid fa-circle') {
    img.setAttribute('src', 'images/004.png');
    dotTwo.setAttribute('class', 'dot two fa-solid fa-circle');
    dotOne.setAttribute('class', 'dot one fa-regular fa-circle');
  } else if (dotTwo.className === 'dot two fa-solid fa-circle') {
    img.setAttribute('src', 'images/007.png');
    dotTwo.setAttribute('class', 'dot two fa-regular fa-circle');
    dotThree.setAttribute('class', 'dot three fa-solid fa-circle');
  } else if (dotThree.className === 'dot three fa-solid fa-circle') {
    img.setAttribute('src', 'images/025.png');
    dotThree.setAttribute('class', 'dot three fa-regular fa-circle');
    dotFour.setAttribute('class', 'dot four fa-solid fa-circle');
  } else if (dotFour.className === 'dot four fa-solid fa-circle') {
    img.setAttribute('src', 'images/039.png');
    dotFour.setAttribute('class', 'dot four fa-regular fa-circle');
    dotFive.setAttribute('class', 'dot five fa-solid fa-circle');
  } else if (dotFive.className === 'dot five fa-solid fa-circle') {
    img.setAttribute('src', 'images/001.png');
    dotFive.setAttribute('class', 'dot five fa-regular fa-circle');
    dotOne.setAttribute('class', 'dot one fa-solid fa-circle');
  }
});

function toTheRight() {
  if (dotOne.className === 'dot one fa-solid fa-circle') {
    img.setAttribute('src', 'images/004.png');
    dotTwo.setAttribute('class', 'dot two fa-solid fa-circle');
    dotOne.setAttribute('class', 'dot one fa-regular fa-circle');
  } else if (dotTwo.className === 'dot two fa-solid fa-circle') {
    img.setAttribute('src', 'images/007.png');
    dotTwo.setAttribute('class', 'dot two fa-regular fa-circle');
    dotThree.setAttribute('class', 'dot three fa-solid fa-circle');
  } else if (dotThree.className === 'dot three fa-solid fa-circle') {
    img.setAttribute('src', 'images/025.png');
    dotThree.setAttribute('class', 'dot three fa-regular fa-circle');
    dotFour.setAttribute('class', 'dot four fa-solid fa-circle');
  } else if (dotFour.className === 'dot four fa-solid fa-circle') {
    img.setAttribute('src', 'images/039.png');
    dotFour.setAttribute('class', 'dot four fa-regular fa-circle');
    dotFive.setAttribute('class', 'dot five fa-solid fa-circle');
  } else if (dotFive.className === 'dot five fa-solid fa-circle') {
    img.setAttribute('src', 'images/001.png');
    dotFive.setAttribute('class', 'dot five fa-regular fa-circle');
    dotOne.setAttribute('class', 'dot one fa-solid fa-circle');
  }
}

setInterval(toTheRight, 3000);
