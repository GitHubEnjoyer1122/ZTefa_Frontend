var commentContainer = document.querySelector('.comments');
var commentCards = document.querySelectorAll('[class^="comment-"]');
var cardCount = commentCards.length;

var addLength = cardCount - 3

//merubah ke negative
var addLengthFinal = addLength - (addLength * 2)

function makeComment() {
  var obj_obj = document.createElement('div')
  obj_obj.innerHTML = cardCount + 1
  obj_obj.classList.add("comment-" + (cardCount + 1))
  commentContainer.appendChild(obj_obj)

  const NewcommentCards = document.querySelectorAll('[class^="comment-"]');
  const NewcardCount = NewcommentCards.length;


  const membuat_i_baru = Number(getComputedStyle(NewcommentCards[NewcardCount - 2/*ini harus 9*/]).getPropertyValue('--i') -1);
  

  obj_obj.style.setProperty('--i', membuat_i_baru)
  


  commentCards = NewcommentCards
  cardCount = NewcardCount
  addLength = NewcardCount - 3
  addLengthFinal = addLength * -1


  var getting_last_Comment_I_STYLE = Number(getComputedStyle(NewcommentCards[(cardCount - 1)]).getPropertyValue('--i'))

  commentCards.forEach((element, index) => {
    
    if (Number(getComputedStyle(NewcommentCards[(index)]).getPropertyValue('--i')) > getting_last_Comment_I_STYLE && Number(getComputedStyle(NewcommentCards[(index)]).getPropertyValue('--i')) <= 2 || index === (cardCount - 1)) {
      return
    }else{
      commentCards[index].style.setProperty('--i', Number(getComputedStyle(NewcommentCards[index]).getPropertyValue('--i')) - 1)
    }
  });

  updateCarousel()
}

function updateCarousel() {
  const gap = parseFloat(getComputedStyle(commentCards[0]).getPropertyValue('--r'));

  commentCards.forEach((card) => {
    
    const distanceX = (parseFloat(card.style.getPropertyValue('--i'))) * (450 + gap);
    card.style.transition = 'transform 0.5s, height 0.5s, opacity 0.5s';

    //Ketika menggunakan calc() operand yang diganti di js tidak akan mengubah style
    //melainkan harus diubah / diperbaharui lagi dari style translateX nya seperti
    //di bawah ini
    card.style.transform = `translateX(${distanceX}px)`;

    if (parseFloat(card.style.getPropertyValue('--i')) !== 0) {
      card.style.height = '100px'
      card.style.opacity = '0.7'
    }else if(parseFloat(card.style.getPropertyValue('--i')) === 0){
      card.style.height = '160px'
      card.style.opacity = '1'
    }

    });
}


function moveCarouselInfinite(theComment) {
  const gap = parseFloat(getComputedStyle(commentCards[0]).getPropertyValue('--r'));


    
    const distanceX = (parseFloat(theComment.style.getPropertyValue('--i'))) * (450 + gap);
    theComment.style.transform = `translateX(${distanceX}px)`;
    theComment.style.transition = 'none';
}


function slideLeft() {
  commentCards.forEach(card => {

    const currentI = parseFloat(card.style.getPropertyValue('--i'));
      card.style.setProperty('--i', currentI + 1);
    updateCarousel();
    
    if (currentI === 2) {
        card.style.setProperty('--i', addLengthFinal)
        moveCarouselInfinite(card);
      }
  });



}

function slideRight() {
  commentCards.forEach((card, index) => {

    const currentI = parseFloat(card.style.getPropertyValue('--i'));



    if (currentI === addLengthFinal) {
      card.style.setProperty('--i', currentI + (Math.abs(currentI) + 2) )
      moveCarouselInfinite(card);
    }else{
    card.style.setProperty('--i', currentI - 1);
    updateCarousel();
    }

  });



}

// Initialize carousel
updateCarousel();
