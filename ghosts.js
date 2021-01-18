

// //====================================
// // ===========GHOOOOOSSSTTTTTSSS=======
// cells[pinkGhost].classList.remove('pinkGhost')
// pacman += 1
// cells[pinkGhost].classList.add('pinkGhost')

// cells[greenGhost].classList.remove('greenGhost')
// pacman += 1
// cells[greenGhost].classList.add('greenGhost')

// cells[orangeGhost].classList.remove('orangeGhost')
// pacman += 1
// cells[orangeGhost].classList.add('orangeGhost')

// cells[blueGhost].classList.remove('blueGhost')
// pacman += 1
// cells[blueGhost].classList.add('blueGhost')



// // =====GHOST MOVEMENT====
// const ghostsMoves = setInterval(() => {
//   const randNum = Math.floor((Math.random() * 2) + 1)
//   //console.log(randNum + 'original number')

//   const newRandNum = Math.floor((Math.random() * 3) + 1)
//   //console.log(newRandNum + 'new number')

//   if (cells[pinkGhost].classList.contains('pacman')
//     && lives === 0) {
//     clearInterval(ghostsMoves)
//     console.log('gameover')
//   }
//   else if (cells[pinkGhost].classList.contains('pacman')
//     && lives >= 1) {
//     clearInterval(ghostsMoves)
//     console.log('next life')
//     lives--
//     console.log(lives)
//     cells[pinkGhost].classList.remove('pinkGhost')
//     pinkGhost = 294
//     cells[pinkGhost].classList.add('pinkGhost')
//     cells[pacman].classList.remove('pacman')


//   }


//   //--------MOVE IN A LINE --------
//   //-----------------------------
//   // move upwards in a line
//   else if (cells[pinkGhost].classList.contains('pinkGhost')
//     && (cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
//     && (cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
//     && (cells[pinkGhost + width].classList.contains('moveAlong') || cells[pinkGhost + width].classList.contains('walls'))
//     && !(cells[pinkGhost - width].classList.contains('walls'))
//   ) {

//     //--
//     cells[pinkGhost - 1].classList.remove('moveAlong')
//     cells[pinkGhost + 1].classList.remove('moveAlong')
//     cells[pinkGhost - width].classList.remove('moveAlong')
//     cells[pinkGhost + width].classList.remove('moveAlong')
//     //---
//     cells[pinkGhost].classList.remove('pinkGhost')
//     cells[pinkGhost].classList.add('moveAlong')
//     pinkGhost -= width
//     cells[pinkGhost].classList.add('pinkGhost')

//     // move downwards in a line
//   } else if (cells[pinkGhost].classList.contains('pinkGhost')
//     && (cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
//     && (cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
//     && (cells[pinkGhost - width].classList.contains('moveAlong') || cells[pinkGhost - width].classList.contains('walls'))
//     && !(cells[pinkGhost + width].classList.contains('walls'))
//   ) {

//     //--
//     cells[pinkGhost - 1].classList.remove('moveAlong')
//     cells[pinkGhost + 1].classList.remove('moveAlong')
//     cells[pinkGhost - width].classList.remove('moveAlong')
//     cells[pinkGhost + width].classList.remove('moveAlong')
//     //---
//     cells[pinkGhost].classList.remove('pinkGhost')
//     cells[pinkGhost].classList.add('moveAlong')
//     pinkGhost += width
//     cells[pinkGhost].classList.add('pinkGhost')

//     // move left in a line
//   } else if (cells[pinkGhost].classList.contains('pinkGhost')
//     && (cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
//     && (cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
//     && (cells[pinkGhost + 1].classList.contains('moveAlong') || cells[pinkGhost + 1].classList.contains('walls'))
//     && !(cells[pinkGhost - 1].classList.contains('walls'))
//   ) {

//     //--
//     cells[pinkGhost - 1].classList.remove('moveAlong')
//     cells[pinkGhost + 1].classList.remove('moveAlong')
//     cells[pinkGhost - width].classList.remove('moveAlong')
//     cells[pinkGhost + width].classList.remove('moveAlong')
//     //---
//     cells[pinkGhost].classList.remove('pinkGhost')
//     cells[pinkGhost].classList.add('moveAlong')
//     pinkGhost -= 1
//     cells[pinkGhost].classList.add('pinkGhost')


//     // move right in a line
//   } else if (cells[pinkGhost].classList.contains('pinkGhost')
//     && (cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
//     && (cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
//     && (cells[pinkGhost - 1].classList.contains('moveAlong') || cells[pinkGhost - 1].classList.contains('walls'))
//     && !(cells[pinkGhost + 1].classList.contains('walls'))
//   ) {

//     //--
//     cells[pinkGhost - 1].classList.remove('moveAlong')
//     cells[pinkGhost + 1].classList.remove('moveAlong')
//     cells[pinkGhost - width].classList.remove('moveAlong')
//     cells[pinkGhost + width].classList.remove('moveAlong')
//     //---
//     cells[pinkGhost].classList.remove('pinkGhost')
//     cells[pinkGhost].classList.add('moveAlong')
//     pinkGhost += 1
//     cells[pinkGhost].classList.add('pinkGhost')


//     //-----TWO DIRECTIONS POSSIBLE----
//     //--------------------------------

//     //right blocked and top blocked rand 1 = go down
//   } else if (cells[pinkGhost].classList.contains('pinkGhost')
//     && (cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
//     && (cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
//     && randNum === 1) {
//     //--
//     cells[pinkGhost - 1].classList.remove('moveAlong')
//     cells[pinkGhost + 1].classList.remove('moveAlong')
//     cells[pinkGhost - width].classList.remove('moveAlong')
//     cells[pinkGhost + width].classList.remove('moveAlong')
//     //---
//     cells[pinkGhost].classList.remove('pinkGhost')
//     cells[pinkGhost].classList.add('moveAlong')
//     pinkGhost += width
//     cells[pinkGhost].classList.add('pinkGhost')
//   }

//   //right blocked and top blocked rand 2 = go left
//   else if (cells[pinkGhost].classList.contains('pinkGhost')
//     && (cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
//     && (cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
//     && randNum === 2) {
//     //--
//     cells[pinkGhost - 1].classList.remove('moveAlong')
//     cells[pinkGhost + 1].classList.remove('moveAlong')
//     cells[pinkGhost - width].classList.remove('moveAlong')
//     cells[pinkGhost + width].classList.remove('moveAlong')
//     //---
//     cells[pinkGhost].classList.remove('pinkGhost')
//     cells[pinkGhost].classList.add('moveAlong')
//     pinkGhost -= 1
//     cells[pinkGhost].classList.add('pinkGhost')
//   }

//   // If right is blocked and bottom is blocked + rand 1 = up
//   else if (cells[pinkGhost].classList.contains('pinkGhost')
//     && (cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
//     && (cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
//     && randNum === 1) {
//     //--
//     cells[pinkGhost - 1].classList.remove('moveAlong')
//     cells[pinkGhost + 1].classList.remove('moveAlong')
//     cells[pinkGhost - width].classList.remove('moveAlong')
//     cells[pinkGhost + width].classList.remove('moveAlong')
//     //---
//     cells[pinkGhost].classList.remove('pinkGhost')
//     cells[pinkGhost].classList.add('moveAlong')
//     pinkGhost -= width
//     cells[pinkGhost].classList.add('pinkGhost')
//   }

//   // If right is blocked and bottom is blocked + rand 2 = left
//   else if (cells[pinkGhost].classList.contains('pinkGhost')
//     && (cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
//     && (cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
//     && randNum === 2) {
//     //--
//     cells[pinkGhost - 1].classList.remove('moveAlong')
//     cells[pinkGhost + 1].classList.remove('moveAlong')
//     cells[pinkGhost - width].classList.remove('moveAlong')
//     cells[pinkGhost + width].classList.remove('moveAlong')
//     //---
//     cells[pinkGhost].classList.remove('pinkGhost')
//     cells[pinkGhost].classList.add('moveAlong')
//     pinkGhost -= 1
//     cells[pinkGhost].classList.add('pinkGhost')
//   }

//   // If left blocked and bottom is blocked + rand 1 = go up
//   else if (cells[pinkGhost].classList.contains('pinkGhost')
//     && (cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
//     && (cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
//     && randNum === 1) {
//     //--
//     cells[pinkGhost - 1].classList.remove('moveAlong')
//     cells[pinkGhost + 1].classList.remove('moveAlong')
//     cells[pinkGhost - width].classList.remove('moveAlong')
//     cells[pinkGhost + width].classList.remove('moveAlong')
//     //---
//     cells[pinkGhost].classList.remove('pinkGhost')
//     cells[pinkGhost].classList.add('moveAlong')
//     pinkGhost -= width
//     cells[pinkGhost].classList.add('pinkGhost')
//   }
//   // If left blocked and bottom is blocked + rand 2 = go right
//   else if (cells[pinkGhost].classList.contains('pinkGhost')
//     && (cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
//     && (cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
//     && randNum === 2) {
//     //--
//     cells[pinkGhost - 1].classList.remove('moveAlong')
//     cells[pinkGhost + 1].classList.remove('moveAlong')
//     cells[pinkGhost - width].classList.remove('moveAlong')
//     cells[pinkGhost + width].classList.remove('moveAlong')
//     //---
//     cells[pinkGhost].classList.remove('pinkGhost')
//     cells[pinkGhost].classList.add('moveAlong')
//     pinkGhost += 1
//     cells[pinkGhost].classList.add('pinkGhost')
//   }


//   // If left blocker and top blocked + rand 1 = go down

//   else if (cells[pinkGhost].classList.contains('pinkGhost')
//     && (cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
//     && (cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
//     && randNum === 1) {
//     //--
//     cells[pinkGhost - 1].classList.remove('moveAlong')
//     cells[pinkGhost + 1].classList.remove('moveAlong')
//     cells[pinkGhost - width].classList.remove('moveAlong')
//     cells[pinkGhost + width].classList.remove('moveAlong')
//     //---
//     cells[pinkGhost].classList.remove('pinkGhost')
//     cells[pinkGhost].classList.add('moveAlong')
//     pinkGhost += width
//     cells[pinkGhost].classList.add('pinkGhost')
//   }

//   // If left blocked and top blaocked + rand 2 = go right
//   else if (cells[pinkGhost].classList.contains('pinkGhost')
//     && (cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
//     && (cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
//     && randNum === 2) {
//     //--
//     cells[pinkGhost - 1].classList.remove('moveAlong')
//     cells[pinkGhost + 1].classList.remove('moveAlong')
//     cells[pinkGhost - width].classList.remove('moveAlong')
//     cells[pinkGhost + width].classList.remove('moveAlong')
//     //---
//     cells[pinkGhost].classList.remove('pinkGhost')
//     cells[pinkGhost].classList.add('moveAlong')
//     pinkGhost += 1
//     cells[pinkGhost].classList.add('pinkGhost')
//   }


//   //---- THREE DIRECTIONS POSSIBLE----
//   //------------------------------------------

//   // Top, bottom and left are empty - new rand 1(left)
//   else if (cells[pinkGhost].classList.contains('pinkGhost')
//     && !(cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
//     && !(cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
//     && !(cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
//     && newRandNum === 1) {
//     //--
//     cells[pinkGhost - 1].classList.remove('moveAlong')
//     cells[pinkGhost + 1].classList.remove('moveAlong')
//     cells[pinkGhost - width].classList.remove('moveAlong')
//     cells[pinkGhost + width].classList.remove('moveAlong')
//     //---
//     cells[pinkGhost].classList.remove('pinkGhost')
//     cells[pinkGhost].classList.add('moveAlong')
//     pinkGhost -= 1
//     cells[pinkGhost].classList.add('pinkGhost')
//   }

//   // Top, bottom and left are empty - new rand 2 (bottom)
//   else if (cells[pinkGhost].classList.contains('pinkGhost')
//     && !(cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
//     && !(cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
//     && !(cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
//     && newRandNum === 2) {
//     //--
//     cells[pinkGhost - 1].classList.remove('moveAlong')
//     cells[pinkGhost + 1].classList.remove('moveAlong')
//     cells[pinkGhost - width].classList.remove('moveAlong')
//     cells[pinkGhost + width].classList.remove('moveAlong')
//     //---
//     cells[pinkGhost].classList.remove('pinkGhost')
//     cells[pinkGhost].classList.add('moveAlong')
//     pinkGhost += width
//     cells[pinkGhost].classList.add('pinkGhost')
//   }

//   // Top, bottom and left are empty - new rand 3 (top)
//   else if (cells[pinkGhost].classList.contains('pinkGhost')
//     && !(cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
//     && !(cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
//     && !(cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
//     && newRandNum === 3) {
//     //--
//     cells[pinkGhost - 1].classList.remove('moveAlong')
//     cells[pinkGhost + 1].classList.remove('moveAlong')
//     cells[pinkGhost - width].classList.remove('moveAlong')
//     cells[pinkGhost + width].classList.remove('moveAlong')
//     //---
//     cells[pinkGhost].classList.remove('pinkGhost')
//     cells[pinkGhost].classList.add('moveAlong')
//     pinkGhost -= width
//     cells[pinkGhost].classList.add('pinkGhost')
//   }

//   // Top, bottom and right are empty - new rand 1(right)
//   else if (cells[pinkGhost].classList.contains('pinkGhost')
//     && !(cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
//     && !(cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
//     && !(cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
//     && newRandNum === 1) {
//     //--
//     cells[pinkGhost - 1].classList.remove('moveAlong')
//     cells[pinkGhost + 1].classList.remove('moveAlong')
//     cells[pinkGhost - width].classList.remove('moveAlong')
//     cells[pinkGhost + width].classList.remove('moveAlong')
//     //---
//     cells[pinkGhost].classList.remove('pinkGhost')
//     cells[pinkGhost].classList.add('moveAlong')
//     pinkGhost += 1
//     cells[pinkGhost].classList.add('pinkGhost')
//   }

//   // Top, bottom and right are empty -  new rand 2 (bottom)
//   else if (cells[pinkGhost].classList.contains('pinkGhost')
//     && !(cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
//     && !(cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
//     && !(cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
//     && newRandNum === 2) {
//     //--
//     cells[pinkGhost - 1].classList.remove('moveAlong')
//     cells[pinkGhost + 1].classList.remove('moveAlong')
//     cells[pinkGhost - width].classList.remove('moveAlong')
//     cells[pinkGhost + width].classList.remove('moveAlong')
//     //---
//     cells[pinkGhost].classList.remove('pinkGhost')
//     cells[pinkGhost].classList.add('moveAlong')
//     pinkGhost += width
//     cells[pinkGhost].classList.add('pinkGhost')
//   }

//   // Top, bottom and right are empty - new rand 3 (up)
//   else if (cells[pinkGhost].classList.contains('pinkGhost')
//     && !(cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
//     && !(cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
//     && !(cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
//     && newRandNum === 3) {
//     //--
//     cells[pinkGhost - 1].classList.remove('moveAlong')
//     cells[pinkGhost + 1].classList.remove('moveAlong')
//     cells[pinkGhost - width].classList.remove('moveAlong')
//     cells[pinkGhost + width].classList.remove('moveAlong')
//     //---
//     cells[pinkGhost].classList.remove('pinkGhost')
//     cells[pinkGhost].classList.add('moveAlong')
//     pinkGhost -= width
//     cells[pinkGhost].classList.add('pinkGhost')
//   }

//   // Bottom, right and left are empty - new rand 1(left)
//   else if (cells[pinkGhost].classList.contains('pinkGhost')
//     && !(cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
//     && !(cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
//     && !(cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
//     && newRandNum === 1) {
//     //--
//     cells[pinkGhost - 1].classList.remove('moveAlong')
//     cells[pinkGhost + 1].classList.remove('moveAlong')
//     cells[pinkGhost - width].classList.remove('moveAlong')
//     cells[pinkGhost + width].classList.remove('moveAlong')
//     //---
//     cells[pinkGhost].classList.remove('pinkGhost')
//     cells[pinkGhost].classList.add('moveAlong')
//     pinkGhost -= 1
//     cells[pinkGhost].classList.add('pinkGhost')
//   }


//   // Bottom, right and left are empty -  new rand 2 (down)
//   else if (cells[pinkGhost].classList.contains('pinkGhost')
//     && !(cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
//     && !(cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
//     && !(cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
//     && newRandNum === 2) {
//     //--
//     cells[pinkGhost - 1].classList.remove('moveAlong')
//     cells[pinkGhost + 1].classList.remove('moveAlong')
//     cells[pinkGhost - width].classList.remove('moveAlong')
//     cells[pinkGhost + width].classList.remove('moveAlong')
//     //---
//     cells[pinkGhost].classList.remove('pinkGhost')
//     cells[pinkGhost].classList.add('moveAlong')
//     pinkGhost += width
//     cells[pinkGhost].classList.add('pinkGhost')
//   }
//   // Bottom, right and left are empty -  new rand 3 (right)

//   else if (cells[pinkGhost].classList.contains('pinkGhost')
//     && !(cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
//     && !(cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
//     && !(cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
//     && newRandNum === 1) {
//     //--
//     cells[pinkGhost - 1].classList.remove('moveAlong')
//     cells[pinkGhost + 1].classList.remove('moveAlong')
//     cells[pinkGhost - width].classList.remove('moveAlong')
//     cells[pinkGhost + width].classList.remove('moveAlong')
//     //---
//     cells[pinkGhost].classList.remove('pinkGhost')
//     cells[pinkGhost].classList.add('moveAlong')
//     pinkGhost += 1
//     cells[pinkGhost].classList.add('pinkGhost')
//   }

//   // Top, left and right are empty - new rand 1(left)

//   else if (cells[pinkGhost].classList.contains('pinkGhost')
//     && !(cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
//     && !(cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
//     && !(cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
//     && newRandNum === 1) {
//     //--
//     cells[pinkGhost - 1].classList.remove('moveAlong')
//     cells[pinkGhost + 1].classList.remove('moveAlong')
//     cells[pinkGhost - width].classList.remove('moveAlong')
//     cells[pinkGhost + width].classList.remove('moveAlong')
//     //---
//     cells[pinkGhost].classList.remove('pinkGhost')
//     cells[pinkGhost].classList.add('moveAlong')
//     pinkGhost -= 1
//     cells[pinkGhost].classList.add('pinkGhost')
//   }
//   // Top, left and right are empty - new rand 2 (up)

//   else if (cells[pinkGhost].classList.contains('pinkGhost')
//     && !(cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
//     && !(cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
//     && !(cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
//     && newRandNum === 2) {
//     //--
//     cells[pinkGhost - 1].classList.remove('moveAlong')
//     cells[pinkGhost + 1].classList.remove('moveAlong')
//     cells[pinkGhost - width].classList.remove('moveAlong')
//     cells[pinkGhost + width].classList.remove('moveAlong')
//     //---
//     cells[pinkGhost].classList.remove('pinkGhost')
//     cells[pinkGhost].classList.add('moveAlong')
//     pinkGhost -= width
//     cells[pinkGhost].classList.add('pinkGhost')
//   }

//   // Top, left and right are empty - new rand 3 (right)

//   else if (cells[pinkGhost].classList.contains('pinkGhost')
//     && !(cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
//     && !(cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
//     && !(cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
//     && newRandNum === 3) {
//     //--
//     cells[pinkGhost - 1].classList.remove('moveAlong')
//     cells[pinkGhost + 1].classList.remove('moveAlong')
//     cells[pinkGhost - width].classList.remove('moveAlong')
//     cells[pinkGhost + width].classList.remove('moveAlong')
//     //---
//     cells[pinkGhost].classList.remove('pinkGhost')
//     cells[pinkGhost].classList.add('moveAlong')
//     pinkGhost += 1
//     cells[pinkGhost].classList.add('pinkGhost')
//   }


//   //---- STOP  GETTING STUCK IN CORNERS ----
//   //----------------------------------------------
//   // If right, top and left are blocked = go down
//   else if (cells[pinkGhost].classList.contains('pinkGhost')
//     && (cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
//     && (cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
//     && (cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
//     && cells[pinkGhost + width].classList.contains('moveAlong')
//   ) {
//     //--
//     cells[pinkGhost - 1].classList.remove('moveAlong')
//     cells[pinkGhost + 1].classList.remove('moveAlong')
//     cells[pinkGhost - width].classList.remove('moveAlong')
//     cells[pinkGhost + width].classList.remove('moveAlong')
//     //---
//     cells[pinkGhost].classList.remove('pinkGhost')
//     cells[pinkGhost].classList.add('moveAlong')
//     pinkGhost += width
//     cells[pinkGhost].classList.add('pinkGhost')
//   }


//   // If right, bottom and left are blocked = go up

//   else if (cells[pinkGhost].classList.contains('pinkGhost')
//     && (cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
//     && (cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
//     && (cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
//     && cells[pinkGhost - width].classList.contains('moveAlong')
//   ) {
//     //--
//     cells[pinkGhost - 1].classList.remove('moveAlong')
//     cells[pinkGhost + 1].classList.remove('moveAlong')
//     cells[pinkGhost - width].classList.remove('moveAlong')
//     cells[pinkGhost + width].classList.remove('moveAlong')
//     //---
//     cells[pinkGhost].classList.remove('pinkGhost')
//     cells[pinkGhost].classList.add('moveAlong')
//     pinkGhost -= width
//     cells[pinkGhost].classList.add('pinkGhost')
//   }

//   // If bottom, top and right are blocked = go left

//   else if (cells[pinkGhost].classList.contains('pinkGhost')
//     && (cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
//     && (cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
//     && (cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
//     && cells[pinkGhost - 1].classList.contains('moveAlong')
//   ) {
//     //--
//     cells[pinkGhost - 1].classList.remove('moveAlong')
//     cells[pinkGhost + 1].classList.remove('moveAlong')
//     cells[pinkGhost - width].classList.remove('moveAlong')
//     cells[pinkGhost + width].classList.remove('moveAlong')
//     //---
//     cells[pinkGhost].classList.remove('pinkGhost')
//     cells[pinkGhost].classList.add('moveAlong')
//     pinkGhost -= 1
//     cells[pinkGhost].classList.add('pinkGhost')
//   }
//   // If bottom, top and left are blocked = go right

//   else if (cells[pinkGhost].classList.contains('pinkGhost')
//     && (cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
//     && (cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
//     && (cells[pinkGhost + width].classList.contains('walls' || cells[pinkGhost + width].classList.contains('moveAlong')))
//     && cells[pinkGhost + 1].classList.contains('moveAlong')
//   ) {
//     //--
//     cells[pinkGhost - 1].classList.remove('moveAlong')
//     cells[pinkGhost + 1].classList.remove('moveAlong')
//     cells[pinkGhost - width].classList.remove('moveAlong')
//     cells[pinkGhost + width].classList.remove('moveAlong')
//     //---
//     cells[pinkGhost].classList.remove('pinkGhost')
//     cells[pinkGhost].classList.add('moveAlong')
//     pinkGhost += 1
//     cells[pinkGhost].classList.add('pinkGhost')
//   }

//   // ---- random direction when reach up/down

//   // if left is move along, right is wall move upwards in a line rand 1
//   else if (cells[pinkGhost].classList.contains('pinkGhost')
//     && cells[pinkGhost - 1].classList.contains('moveAlong')
//     && cells[pinkGhost + 1].classList.contains('walls')
//     && cells[pinkGhost + width].classList.contains('notwalls')
//     && cells[pinkGhost - width].classList.contains('notwalls')
//     && randNum === 1) {

//     //--
//     cells[pinkGhost - 1].classList.remove('moveAlong')
//     cells[pinkGhost + 1].classList.remove('moveAlong')
//     cells[pinkGhost - width].classList.remove('moveAlong')
//     cells[pinkGhost + width].classList.remove('moveAlong')
//     //---
//     cells[pinkGhost].classList.remove('pinkGhost')
//     cells[pinkGhost].classList.add('moveAlong')
//     pinkGhost -= width
//     cells[pinkGhost].classList.add('pinkGhost')
//   }
//   // if left move along, right is wall move downward in a line rand 2
//   else if (cells[pinkGhost].classList.contains('pinkGhost')
//     && cells[pinkGhost - 1].classList.contains('moveAlong')
//     && cells[pinkGhost + 1].classList.contains('walls')
//     && cells[pinkGhost + width].classList.contains('notwalls')
//     && cells[pinkGhost - width].classList.contains('notwalls')
//     && randNum === 2) {

//     //--
//     cells[pinkGhost - 1].classList.remove('moveAlong')
//     cells[pinkGhost + 1].classList.remove('moveAlong')
//     cells[pinkGhost - width].classList.remove('moveAlong')
//     cells[pinkGhost + width].classList.remove('moveAlong')
//     //---
//     cells[pinkGhost].classList.remove('pinkGhost')
//     cells[pinkGhost].classList.add('moveAlong')
//     pinkGhost += width
//     cells[pinkGhost].classList.add('pinkGhost')
//   }
//   // if right is move along, left wall move upwards in a line rand 1
//   else if (cells[pinkGhost].classList.contains('pinkGhost')
//     && cells[pinkGhost + 1].classList.contains('moveAlong')
//     && cells[pinkGhost - 1].classList.contains('walls')
//     && cells[pinkGhost + width].classList.contains('notwalls')
//     && cells[pinkGhost - width].classList.contains('notwalls')
//     && randNum === 1) {

//     //--
//     cells[pinkGhost - 1].classList.remove('moveAlong')
//     cells[pinkGhost + 1].classList.remove('moveAlong')
//     cells[pinkGhost - width].classList.remove('moveAlong')
//     cells[pinkGhost + width].classList.remove('moveAlong')
//     //---
//     cells[pinkGhost].classList.remove('pinkGhost')
//     cells[pinkGhost].classList.add('moveAlong')
//     pinkGhost -= width
//     cells[pinkGhost].classList.add('pinkGhost')
//   }
//   // if right move along, move downward in a line rand 2
//   else if (cells[pinkGhost].classList.contains('pinkGhost')
//     && cells[pinkGhost + 1].classList.contains('moveAlong')
//     && cells[pinkGhost - 1].classList.contains('walls')
//     && cells[pinkGhost + width].classList.contains('notwalls')
//     && cells[pinkGhost - width].classList.contains('notwalls')
//     && randNum === 2) {

//     //--
//     cells[pinkGhost - 1].classList.remove('moveAlong')
//     cells[pinkGhost + 1].classList.remove('moveAlong')
//     cells[pinkGhost - width].classList.remove('moveAlong')
//     cells[pinkGhost + width].classList.remove('moveAlong')
//     //---
//     cells[pinkGhost].classList.remove('pinkGhost')
//     cells[pinkGhost].classList.add('moveAlong')
//     pinkGhost += width
//     cells[pinkGhost].classList.add('pinkGhost')
//   }
//   // if top is move along, bottom wall move left in a line rand 1
//   else if (cells[pinkGhost].classList.contains('pinkGhost')
//     && cells[pinkGhost - width].classList.contains('moveAlong')
//     && cells[pinkGhost + width].classList.contains('walls')
//     && cells[pinkGhost + 1].classList.contains('notwalls')
//     && cells[pinkGhost - 1].classList.contains('notwalls')
//     && randNum === 1) {

//     //--
//     cells[pinkGhost - 1].classList.remove('moveAlong')
//     cells[pinkGhost + 1].classList.remove('moveAlong')
//     cells[pinkGhost - width].classList.remove('moveAlong')
//     cells[pinkGhost + width].classList.remove('moveAlong')
//     //---
//     cells[pinkGhost].classList.remove('pinkGhost')
//     cells[pinkGhost].classList.add('moveAlong')
//     pinkGhost -= 1
//     cells[pinkGhost].classList.add('pinkGhost')
//   }

//   // if top move along, bottom wall, move right in a line rand 2
//   else if (cells[pinkGhost].classList.contains('pinkGhost')
//     && cells[pinkGhost - width].classList.contains('moveAlong')
//     && cells[pinkGhost + width].classList.contains('walls')
//     && cells[pinkGhost + 1].classList.contains('notwalls')
//     && cells[pinkGhost - 1].classList.contains('notwalls')
//     && randNum === 2) {

//     //--
//     cells[pinkGhost - 1].classList.remove('moveAlong')
//     cells[pinkGhost + 1].classList.remove('moveAlong')
//     cells[pinkGhost - width].classList.remove('moveAlong')
//     cells[pinkGhost + width].classList.remove('moveAlong')
//     //---
//     cells[pinkGhost].classList.remove('pinkGhost')
//     cells[pinkGhost].classList.add('moveAlong')
//     pinkGhost += 1
//     cells[pinkGhost].classList.add('pinkGhost')
//   }

//   // if bottom is move along, top wall move left in a line rand 1
//   else if (cells[pinkGhost].classList.contains('pinkGhost')
//     && cells[pinkGhost + width].classList.contains('moveAlong')
//     && cells[pinkGhost - width].classList.contains('walls')
//     && cells[pinkGhost + 1].classList.contains('notwalls')
//     && cells[pinkGhost - 1].classList.contains('notwalls')
//     && randNum === 1) {

//     //--
//     cells[pinkGhost - 1].classList.remove('moveAlong')
//     cells[pinkGhost + 1].classList.remove('moveAlong')
//     cells[pinkGhost - width].classList.remove('moveAlong')
//     cells[pinkGhost + width].classList.remove('moveAlong')
//     //---
//     cells[pinkGhost].classList.remove('pinkGhost')
//     cells[pinkGhost].classList.add('moveAlong')
//     pinkGhost -= 1
//     cells[pinkGhost].classList.add('pinkGhost')
//   }
//   // if bottom move along, top wall, move right in a line rand 2
//   else if (cells[pinkGhost].classList.contains('pinkGhost')
//     && cells[pinkGhost + width].classList.contains('moveAlong')
//     && cells[pinkGhost - width].classList.contains('walls')
//     && cells[pinkGhost + 1].classList.contains('notwalls')
//     && cells[pinkGhost - 1].classList.contains('notwalls')
//     && randNum === 1) {

//     //--
//     cells[pinkGhost - 1].classList.remove('moveAlong')
//     cells[pinkGhost + 1].classList.remove('moveAlong')
//     cells[pinkGhost - width].classList.remove('moveAlong')
//     cells[pinkGhost + width].classList.remove('moveAlong')
//     //---
//     cells[pinkGhost].classList.remove('pinkGhost')
//     cells[pinkGhost].classList.add('moveAlong')
//     pinkGhost += 1
//     cells[pinkGhost].classList.add('pinkGhost')
//   }



// }, 500)

//===============================
//===============================





// setInterval(() => { 

//   const randNum = Math.floor((Math.random() * 8) + 1)
//   console.log(randNum)

// if (cells[pinkGhost].classList.contains('pinkGhost') 
//     && (randNum === 2 || randNum === 6 || randNum === 8)
//     && cells[pinkGhost + 1].classList.contains('notwalls') 
//     && !(cells[pinkGhost + 1].classList.contains('moveAlong'))) {
//   //console.log('hello')
//   //--
//   cells[pinkGhost - 1].classList.remove('moveAlong')
//   cells[pinkGhost + 1].classList.remove('moveAlong')
//   cells[pinkGhost - width].classList.remove('moveAlong')
//   cells[pinkGhost + width].classList.remove('moveAlong')
//   //---
//   cells[pinkGhost].classList.remove('pinkGhost')
//   cells[pinkGhost].classList.add('moveAlong')
//   pinkGhost += 1
//   cells[pinkGhost].classList.add('pinkGhost') 
// } else if (cells[pinkGhost].classList.contains('pinkGhost') 
//     && (randNum === 1 || randNum === 5 || randNum === 7 )
//     && cells[pinkGhost - 1].classList.contains('notwalls') 
//     && !(cells[pinkGhost - 1].classList.contains('moveAlong'))) {
//   //console.log('hello')
//     //--
//     cells[pinkGhost - 1].classList.remove('moveAlong')
//     cells[pinkGhost + 1].classList.remove('moveAlong')
//     cells[pinkGhost - width].classList.remove('moveAlong')
//     cells[pinkGhost + width].classList.remove('moveAlong')
//     //---
//   cells[pinkGhost].classList.remove('pinkGhost')
//   cells[pinkGhost].classList.add('moveAlong')
//   pinkGhost -= 1
//   cells[pinkGhost].classList.add('pinkGhost') 
// } else if (cells[pinkGhost].classList.contains('pinkGhost') 
//     && randNum === 3 
//     && cells[pinkGhost - width].classList.contains('notwalls') 
//     && !(cells[pinkGhost - width].classList.contains('moveAlong'))) {
//   //console.log('hello')
//     //--
//     cells[pinkGhost - 1].classList.remove('moveAlong')
//     cells[pinkGhost + 1].classList.remove('moveAlong')
//     cells[pinkGhost - width].classList.remove('moveAlong')
//     cells[pinkGhost + width].classList.remove('moveAlong')
//     //---
//   cells[pinkGhost].classList.remove('pinkGhost')
//   cells[pinkGhost].classList.add('moveAlong')
//   pinkGhost -= width
//   cells[pinkGhost].classList.add('pinkGhost') 
// } else if (cells[pinkGhost].classList.contains('pinkGhost') 
//     && randNum === 4 
//     && cells[pinkGhost + width].classList.contains('notwalls') 
//     && !(cells[pinkGhost + width].classList.contains('moveAlong')))
//     {
//   //console.log('hello')
//     //--
//     cells[pinkGhost - 1].classList.remove('moveAlong')
//     cells[pinkGhost + 1].classList.remove('moveAlong')
//     cells[pinkGhost - width].classList.remove('moveAlong')
//     cells[pinkGhost + width].classList.remove('moveAlong')
//     //---
//   cells[pin