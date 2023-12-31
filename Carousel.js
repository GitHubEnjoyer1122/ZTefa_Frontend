const commentCardsParent = document.querySelector('.comments-par');
const commentContainer = document.querySelector('.comments');
const commentCards = document.querySelectorAll('[class^="comment-"]');
var commentCards2;

const cardCount = commentCards.length;
const totalWidth = commentContainer.offsetWidth
let currentIndex = 2;
let isShrinked = false;

function updateCarousel() {
  const gap = parseFloat(getComputedStyle(commentCards[0]).getPropertyValue('--r'));
  const middleComment = commentCards[currentIndex];
  const middleWidth = middleComment.offsetWidth;

  commentCards.forEach((card, index) => {
    const distanceX = getDistanceX(index);

    const isMiddle = index === currentIndex;
    const isNotMiddle = !isMiddle;

    const scale = isShrinked && isNotMiddle ? (middleWidth / card.offsetWidth) : 1;
    const opacity = isMiddle ? 1 : 0.7;
    const height = isMiddle ? '160px' : '100px';

    console.log(index + distanceX)

    card.style.transition = 'transform 0.5s, opacity 0.5s, height 0.5s';
    card.style.transform = `translate(${distanceX}px) scale(${scale})`;
    card.style.opacity = opacity;
    card.style.height = height;
  });
}

function getDistanceX(index) {
  const distanceFromCurrent = (index - currentIndex) * (450 + parseFloat(getComputedStyle(commentCards[0]).getPropertyValue('--r')));
  
  // if (distanceFromCurrent === -2200) {
  //   console.log("APAKAH INI AKAN DIJALANKAN??")
  //   distanceFromCurrent + 2750
  //   return distanceFromCurrent
  // }

  return distanceFromCurrent;
}

function slideLeft() {
  currentIndex = (currentIndex - 1 + cardCount) % cardCount;

  updateCarousel();
  isShrinked = false; // Reset shrink state


}

function slideRight() {
  currentIndex = (currentIndex + 1) % cardCount;

  updateCarousel();

  console.log("TOTAL WIDTHNYA " + totalWidth)

  isShrinked = false; // Reset shrink state
}

// Add a listener to toggle shrink state when clicking on a comment
commentContainer.addEventListener('click', () => {
  isShrinked = !isShrinked;
  updateCarousel();
});

// Initialize carousel
updateCarousel();
  

