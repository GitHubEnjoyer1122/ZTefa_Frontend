var commentContainer = document.querySelector('.comments');
var commentCards = document.querySelectorAll('[class^="comment-"]');
var stars = document.querySelectorAll('[class^="star-input-"]');
var cardCount = commentCards.length;
var inputComment = document.querySelector('.input-comment')

var addLength = cardCount - 3

//merubah ke negative
var addLengthFinal = addLength - (addLength * 2)

stars.forEach(element => {
 element.addEventListener('click', starToggle) 
});

function makeComment() {
  // ADDING THE ELEMENT ITSELF
  var obj_obj = document.createElement('div')

  var objPar1 = document.createElement('div')
  var objPar2 = document.createElement('div')

  var objContPar1 = document.createElement('div')
  var objContPar2 = document.createElement('div')

  var objCont1 = document.createElement('img')
  var objCont2 = document.createElement('div')
  var objCont3 = document.createElement('div')
  var objCont4 = document.createElement('div')

  var objStar1 = document.createElement('i')
  var objStar2 = document.createElement('i')
  var objStar3 = document.createElement('i')
  var objStar4 = document.createElement('i')
  var objStar5 = document.createElement('i')
  // ADDING THE ELEMENT ITSELF 

  // ADDING CLASSES TO ELEMENT
  obj_obj.classList.add("comment-" + (cardCount + 1))

  objPar1.classList.add("star-name-" + (cardCount + 1))
  objPar2.classList.add("the-comment-" + (cardCount + 1))

  objContPar1.classList.add("img-rank-name-" + (cardCount + 1))
  objContPar2.classList.add("star-par-" + (cardCount + 1))

  objCont1.classList.add("profile-image-" + (cardCount + 1))
  objCont2.classList.add("name-and-rank-" + (cardCount + 1))
  objCont3.classList.add("long-name-" + (cardCount + 1))
  objCont4.classList.add("rank-" + (cardCount + 1))    

  objStar1.classList.add("star-display-1-" + (cardCount + 1))
  objStar2.classList.add("star-display-2-" + (cardCount + 1))
  objStar3.classList.add("star-display-3-" + (cardCount + 1))
  objStar4.classList.add("star-display-4-" + (cardCount + 1))
  objStar5.classList.add("star-display-5-" + (cardCount + 1))


  // ADDING CLASSES TO ELEMENT

  // ADDING TEXTNODE/CONTENT
  objPar2.innerHTML = inputComment.value 

  objCont1.setAttribute('src', 'ZETA.png')
  objCont3.innerHTML = "ZETA BOT"
  objCont4.innerHTML = "Silly Little Bot"

  // for (let i = 0; i < stars.length; i++) {
  //   var slicedClass = stars[i].className.slice(13, 25);
  //   starsInput[i].classList.add(slicedClass)
  // }

  var slicedClass1 = stars[0].className.slice(13, 25)
  var slicedClass2 = stars[1].className.slice(13, 25)
  var slicedClass3 = stars[2].className.slice(13, 25)
  var slicedClass4 = stars[3].className.slice(13, 25)
  var slicedClass5 = stars[4].className.slice(13, 25)

  objStar1.classList.add(slicedClass1)
  objStar2.classList.add(slicedClass2)
  objStar3.classList.add(slicedClass3)
  objStar4.classList.add(slicedClass4)
  objStar5.classList.add(slicedClass5)

  // ADDING TEXTNODE/CONTENT

 //APPENDING ELEMNTS 
  commentContainer.appendChild(obj_obj)

  objContPar1.appendChild(objCont1)
  objContPar1.appendChild(objCont2)
  objCont2.appendChild(objCont3)
  objCont2.appendChild(objCont4)

  objContPar2.appendChild(objStar1)
  objContPar2.appendChild(objStar2)
  objContPar2.appendChild(objStar3)
  objContPar2.appendChild(objStar4)
  objContPar2.appendChild(objStar5)

  objPar1.appendChild(objContPar1)
  objPar1.appendChild(objContPar2)

  obj_obj.appendChild(objPar1)
  obj_obj.appendChild(objPar2)


 //APPENDING ELEMNTS 


  const NewcommentCards = document.querySelectorAll('[class^="comment-"]');
  const NewcardCount = NewcommentCards.length;

  // console.log("INI card count "+ NewcardCount)

  const membuat_i_baru = Number(getComputedStyle(NewcommentCards[NewcardCount - 2/*ini harus 9*/]).getPropertyValue('--i') -1);
  
  console.log("INI Membuat i baru "+ membuat_i_baru)

  obj_obj.style.setProperty('--i', membuat_i_baru)
  
  console.log(commentCards)


  commentCards = NewcommentCards
  cardCount = NewcardCount
  addLength = NewcardCount - 3
  addLengthFinal = addLength * -1

  console.log("me is >>> "+addLengthFinal)

  var getting_last_Comment_I_STYLE = Number(getComputedStyle(NewcommentCards[(cardCount - 1)]).getPropertyValue('--i'))

  commentCards.forEach((element, index) => {
    
    if (Number(getComputedStyle(NewcommentCards[(index)]).getPropertyValue('--i')) > getting_last_Comment_I_STYLE && Number(getComputedStyle(NewcommentCards[(index)]).getPropertyValue('--i')) <= 2 || index === (cardCount - 1)) {
      return
    }else{
      console.log("THIS IS INDEX MADUD "+index)
      commentCards[index].style.setProperty('--i', Number(getComputedStyle(NewcommentCards[index]).getPropertyValue('--i')) - 1)
    }
  });

  // commentCards[0].style.setProperty('--i', Number(getComputedStyle(NewcommentCards[0]).getPropertyValue('--i')) -1)
  // commentCards[1].style.setProperty('--i', Number(getComputedStyle(NewcommentCards[1]).getPropertyValue('--i')) -1)
  // commentCards[2].style.setProperty('--i', Number(getComputedStyle(NewcommentCards[2]).getPropertyValue('--i')) -1)
  // commentCards[3].style.setProperty('--i', Number(getComputedStyle(NewcommentCards[3]).getPropertyValue('--i')) -1)
  // commentCards[4].style.setProperty('--i', Number(getComputedStyle(NewcommentCards[4]).getPropertyValue('--i')) -1)
  // commentCards[5].style.setProperty('--i', Number(getComputedStyle(NewcommentCards[5]).getPropertyValue('--i')) -1)
  // commentCards[6].style.setProperty('--i', Number(getComputedStyle(NewcommentCards[6]).getPropertyValue('--i')) -1)
  // commentCards[7].style.setProperty('--i', Number(getComputedStyle(NewcommentCards[7]).getPropertyValue('--i')) -1)
  // commentCards[8].style.setProperty('--i', Number(getComputedStyle(NewcommentCards[8]).getPropertyValue('--i')) -1)

  // commentCards.forEach((card, index) => {
  //   if (index !== (NewcardCount - 1)) {
  //     console.log("Index >>> "+index)
  //     console.log("NCC >>> "+NewcardCount)
  //   // }else if(index === NewcardCount){
  //   //   commentCards[index].style.setProperty('--i', Number(getComputedStyle(NewcommentCards[index]).getPropertyValue('--i')) -1)
  //   }
  // });

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
      card.style.height = '97px'
      card.style.opacity = '0.7'
    }else if(parseFloat(card.style.getPropertyValue('--i')) === 0){
      card.style.height = '159px'
      card.style.opacity = '1'
    }

    });
}


function moveCarouselInfinite(theComment) {
  const gap = parseFloat(getComputedStyle(commentCards[0]).getPropertyValue('--r'));

  // console.log(theComment)

    
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
      console.log("Im working")
        card.style.setProperty('--i', addLengthFinal)
        moveCarouselInfinite(card);
      }
  });



}

function slideRight() {
  commentCards.forEach((card, index) => {

    const currentI = parseFloat(card.style.getPropertyValue('--i'));

    console.log("me is button right addLengthfinal >>> "+ addLengthFinal)
    console.log("me is button right Cureent I >>> "+ currentI + " Index Nya : " + index)


    if (currentI === addLengthFinal) {
      // console.log("me is button right OPOPOPOPOPO >>> "+addLengthFinal)
      card.style.setProperty('--i', currentI + (Math.abs(currentI) + 2) )
      moveCarouselInfinite(card);
    }else{
    card.style.setProperty('--i', currentI - 1);
    updateCarousel();
    }

  });




  // commentCards.forEach((card, index) => {
  //   const currentI = parseFloat(card.style.getPropertyValue('--i'));

  //   console.log("this is parse float: " + index + " " + currentI)


  // });
}

function starToggle(params) {
  for (let i = 0; i < stars.length; i++) {
  
    if (this.id < stars[i].id) {    
      stars[i].classList.remove("ri-star-fill")
      stars[i].classList.add("ri-star-line") 
  
    }  else if (this.id >= stars[i].id && !stars[i].classList.contains("ri-star-fill")) {    
      stars[i].classList.add("ri-star-fill")
      stars[i].classList.remove("ri-star-line") 
    }
  
  }
  }


// Initialize carousel
updateCarousel();
