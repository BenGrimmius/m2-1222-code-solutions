var chevLeft = document.querySelector('.left');
var chevRight = document.querySelector('.right');
var img = document.querySelector('img');

var dotOne = document.querySelector('.one');
var dotTwo = document.querySelector('.two');
var dotThree = document.querySelector('.three');
var dotFour = document.querySelector('.four');
var dotFive = document.querySelector('.five');

var dots = [dotOne, dotTwo, dotThree, dotFour, dotFive];

dots.forEach(function (dot) {
  dot.addEventListener('click', function (event) {
    for (var i = 0; i < dots.length; i++) {
      if (event.target === dots[i]) {
        dots[i].classList.replace('fa-regular', 'fa-solid');
      } else if (event.target !== dots[i]) {
        dots[i].classList.replace('fa-solid', 'fa-regular');
      }
    }

    if (event.target === dotOne) {
      img.setAttribute('src', 'images/001.png');
    } else if (event.target === dotTwo) {
      img.setAttribute('src', 'images/004.png');
    } else if (event.target === dotThree) {
      img.setAttribute('src', 'images/007.png');
    } else if (event.target === dotFour) {
      img.setAttribute('src', 'images/025.png');
    } else if (event.target === dotFive) {
      img.setAttribute('src', 'images/039.png');
    }
  }
  );
});

function getCurrentSlide() {
  if (dotOne.classList.contains('fa-solid')) {
    return 1;
  } else if (dotTwo.classList.contains('fa-solid')) {
    return 2;
  } else if (dotThree.classList.contains('fa-solid')) {
    return 3;
  } else if (dotFour.classList.contains('fa-solid')) {
    return 4;
  } else if (dotFive.classList.contains('fa-solid')) {
    return 5;
  }
}

function setSlide(number) {
  for (var i = 0; i < dots.length; i++) {
    if (dots[i].classList.contains('fa-solid')) {
      dots[i].classList.remove('fa-solid');
      dots[i].classList.add('fa-regular');
    }
  }
  if (number === 1) {
    img.setAttribute('src', 'images/001.png');
    dotOne.classList.remove('fa-regular');
    dotOne.classList.add('fa-solid');
  } else if (number === 2) {
    img.setAttribute('src', 'images/004.png');
    dotTwo.classList.remove('fa-regular');
    dotTwo.classList.add('fa-solid');
  } else if (number === 3) {
    img.setAttribute('src', 'images/007.png');
    dotThree.classList.remove('fa-regular');
    dotThree.classList.add('fa-solid');
  } else if (number === 4) {
    img.setAttribute('src', 'images/025.png');
    dotFour.classList.remove('fa-regular');
    dotFour.classList.add('fa-solid');
  } else if (number === 5) {
    img.setAttribute('src', 'images/039.png');
    dotFive.classList.remove('fa-regular');
    dotFive.classList.add('fa-solid');
  } else {
    return 'Error';
  }
}

chevLeft.addEventListener('click', function (event) {
  var currentSlide = getCurrentSlide();
  var nextSlide = 0;

  if (currentSlide === 1) {
    nextSlide = 5;
  } else if (currentSlide === 2) {
    nextSlide = 1;
  } else if (currentSlide === 3) {
    nextSlide = 2;
  } else if (currentSlide === 4) {
    nextSlide = 3;
  } else if (currentSlide === 5) {
    nextSlide = 4;
  } else {
    return 'Error';
  }

  setSlide(nextSlide);
});

chevRight.addEventListener('click', function (event) {
  var currentSlide = getCurrentSlide();
  var nextSlide = 0;

  if (currentSlide === 1) {
    nextSlide = 2;
  } else if (currentSlide === 2) {
    nextSlide = 3;
  } else if (currentSlide === 3) {
    nextSlide = 4;
  } else if (currentSlide === 4) {
    nextSlide = 5;
  } else if (currentSlide === 5) {
    nextSlide = 1;
  } else {
    return 'Error';
  }

  setSlide(nextSlide);
});

function toTheRight() {
  var currentSlide = getCurrentSlide();
  var nextSlide = 0;

  if (currentSlide === 1) {
    nextSlide = 2;
  } else if (currentSlide === 2) {
    nextSlide = 3;
  } else if (currentSlide === 3) {
    nextSlide = 4;
  } else if (currentSlide === 4) {
    nextSlide = 5;
  } else if (currentSlide === 5) {
    nextSlide = 1;
  } else {
    return 'Error';
  }

  setSlide(nextSlide);
}

setInterval(toTheRight, 3000);
