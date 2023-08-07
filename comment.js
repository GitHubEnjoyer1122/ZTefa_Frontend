// function left() {
//     const allComment = document.querySelectorAll('[class^="comment-"]');
//     const lastElement = allComment[allComment.length - 1];
  
//     for (let i = allComment.length - 1; i > 0; i--) {
//       allComment[i].style.setProperty('--i', i - 1);
//     }
  
//     allComment[0].style.setProperty('--i', allComment.length - 1);
//   }
  
//   function right() {
//     const allComment = document.querySelectorAll('[class^="comment-"]');
//     const firstElement = allComment[0];
  
//     for (let i = 0; i < allComment.length - 1; i++) {
//       allComment[i].style.setProperty('--i', i + 1);
//     }
  
//     allComment[allComment.length - 1].style.setProperty('--i', -1);
//   }
  
//   // Call left() to initialize the positions
//   left();
  

//UNFINISHED