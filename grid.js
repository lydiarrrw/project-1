
//GRID & WALLS
const grid = document.querySelector('.grid')
const width = 20
const cells = []
const walls = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 27, 28, 29, 39, 40, 42, 43, 44, 45, 51, 52, 53, 55, 57, 59, 60, 65,
  67, 68, 69, 71, 75, 76, 77, 79, 80, 82, 84, 85, 87, 89, 91, 92, 93, 95, 96, 97, 99, 100, 102, 103, 104, 107, 109, 113, 115, 117, 119, 120, 122, 124, 125, 129,
  131, 132, 133, 135, 137, 139, 140, 142, 144, 145, 147, 148, 149, 151, 152, 153, 155, 157, 159, 160, 179, 180, 182, 183, 184, 185, 187, 188, 189, 190, 191, 192,
  193, 194, 196, 197, 199, 200, 231, 213, 214, 215, 216, 217, 219, 220, 222, 223, 224, 225, 227, 228, 229, 230, 231, 239, 240, 247, 249, 251, 253, 254, 255, 257, 259, 260, 261, 263, 265,
  267, 271, 273, 274, 275, 277, 279, 280, 281, 283, 285, 287, 288, 290, 291, 293, 295, 297, 299, 300, 301, 303, 305, 307, 311, 313, 315, 316, 317, 319, 320, 327,
  329, 331, 333, 335, 336, 337, 339, 340, 342, 343, 344, 345, 349, 359, 360, 363, 364, 367, 371, 372, 374, 375, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388,
  389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399]
const pen = [248, 250, 268, 269, 270, 289]
const scoreKeeper = document.querySelector('.score')
// const scoring = document.querySelector('.life')
const scoring = document.querySelectorAll('#life')
//console.log(scoring)
const energizer = [21, 38, 361, 358]
let pacman = 353
let score = 0

let pinkGhost = 294 //248
let greenGhost = 248
let orangeGhost = 269
let blueGhost = 270

let lives = 3

for (let index = 0; index < width ** 2; index++) {
  const cell = document.createElement('div')

  if (walls.includes(index)) {
    cell.classList.add('walls')
  } else {
    cell.classList.add('notwalls')
  }

  if (energizer.includes(index)) {
    cell.classList.add('energy')
  } else if (pen.includes(index)) {
    cell.classList.add('pen')
  } else {
    cell.classList.add('food1')
    cell.innerHTML = '.'
  }



  grid.appendChild(cell)
  cells.push(cell)
  //cell.innerHTML = index
  cell.style.width = `${100 / width}%`
  cell.style.height = `${100 / width}%`

}



// && (cells.classList.includes('energy'))

  
  // console.log('gameeee overrr')
  // 'you win x points'

// console.log(cells)



document.addEventListener('keydown', (event) => {
  const key = event.key

  // --- START ---




  if (key === 's'
    && lives === 3) {


    cells[pacman].classList.remove('pacman')
    pacman += 1
    cells[pacman].classList.add('pacman')


    document.addEventListener('keyup', (event) => {
      const key = event.key


      if (key === 'ArrowRight'
        && cells[pacman + 1].classList.contains('notwalls')
        && cells[pacman].classList.contains('energy')) {
        cells[pacman].classList.remove('energy')
        cells[pacman].classList.remove('pacman')
        pacman += 1 //right
        score += 200
        cells[pacman].classList.add('pacman')

      } else if (key === 'ArrowRight'
        && cells[pacman + 1].classList.contains('notwalls')) {
        cells[pacman].classList.remove('pacman')
        cells[pacman].classList.remove('food1')
        pacman += 1 //right
        score += 10
        cells[pacman].classList.add('pacman')

      } else if (key === 'ArrowRight'
        && cells[pacman + 1].classList.contains('notwalls')
        && cells[pacman + 1].classList.contains('food1')) {
        cells[pacman].classList.remove('pacman')
        cells[pacman].classList.remove('food1')
        pacman += 1 //right
        score += 10
        cells[pacman].classList.add('pacman')

      } else if (key === 'ArrowLeft'
        && cells[pacman - 1].classList.contains('notwalls')
        && cells[pacman].classList.contains('energy')) {
        cells[pacman].classList.remove('energy')
        cells[pacman].classList.remove('pacman')
        pacman -= 1 //left
        score += 200
        cells[pacman].classList.add('pacman')

      } else if (key === 'ArrowLeft'
        && cells[pacman - 1].classList.contains('notwalls')
        && !(cells[pacman - 1].classList.contains('food1'))) {
        cells[pacman].classList.remove('food1')
        cells[pacman].classList.remove('pacman')
        pacman -= 1 //left
        cells[pacman].classList.add('pacman')

      } else if (key === 'ArrowLeft'
        && cells[pacman - 1].classList.contains('notwalls')
        && cells[pacman - 1].classList.contains('food1')) {
        cells[pacman].classList.remove('pacman')
        cells[pacman].classList.remove('food1')
        pacman -= 1 //left
        score += 10
        cells[pacman].classList.add('pacman')

      } else if (key === 'ArrowDown'
        && cells[pacman + width].classList.contains('notwalls')
        && cells[pacman].classList.contains('energy')) {
        cells[pacman].classList.remove('energy')
        cells[pacman].classList.remove('pacman')
        pacman += width //down
        score += 200
        cells[pacman].classList.add('pacman')


      } else if (key === 'ArrowDown'
        && cells[pacman + width].classList.contains('notwalls')
        && !(cells[pacman + width].classList.contains('food1'))) {
        cells[pacman].classList.remove('food1')
        cells[pacman].classList.remove('pacman')
        pacman += width // down
        cells[pacman].classList.add('pacman')

      } else if (key === 'ArrowDown'
        && cells[pacman + width].classList.contains('notwalls')
        && cells[pacman + width].classList.contains('food1')) {
        cells[pacman].classList.remove('pacman')
        cells[pacman].classList.remove('food1')
        pacman += width // down
        score += 10
        cells[pacman].classList.add('pacman')


      } else if (key === 'ArrowUp'
        && cells[pacman - width].classList.contains('notwalls')
        && cells[pacman].classList.contains('energy')) {
        cells[pacman].classList.remove('energy')
        cells[pacman].classList.remove('pacman')
        pacman -= width //up
        score += 200
        cells[pacman].classList.add('pacman')

      } else if (key === 'ArrowUp'
        && cells[pacman - width].classList.contains('notwalls')
        && !(cells[pacman - width].classList.contains('food1'))) {
        cells[pacman].classList.remove('food1')
        cells[pacman].classList.remove('pacman')
        pacman -= width //up
        cells[pacman].classList.add('pacman')

      } else if (key === 'ArrowUp'
        && cells[pacman - width].classList.contains('notwalls')
        && cells[pacman - width].classList.contains('food1')) {
        cells[pacman].classList.remove('pacman')
        cells[pacman].classList.remove('food1')
        pacman -= width //up
        score += 10
        cells[pacman].classList.add('pacman')


      }
      //console.log(score)

      // ==== GREY GHOST MODE =====
      if (cells[pacman].classList.contains('energy')) {
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('greyGhost')
        setTimeout(() => {
          cells[pinkGhost].classList.remove('greyGhost')
          cells[pinkGhost].classList.add('pinkGhost')
          //}

        }, 5000)
      }








    })



    //====================================
    // ===========GHOOOOOSSSTTTTTSSS=======
    cells[pinkGhost].classList.remove('pinkGhost')
    // pinkGhost += width
    cells[pinkGhost].classList.add('pinkGhost')

    cells[greenGhost].classList.remove('greenGhost')
    // greenGhost += 1
    cells[greenGhost].classList.add('greenGhost')

    cells[orangeGhost].classList.remove('orangeGhost')
    // orangeGhost+= 1
    cells[orangeGhost].classList.add('orangeGhost')

    cells[blueGhost].classList.remove('blueGhost')
    // blueGhost += 1
    cells[blueGhost].classList.add('blueGhost')



    // =====GHOST MOVEMENT====
    const ghostsMoves = setInterval(() => {
      const randNum = Math.floor((Math.random() * 2) + 1)
      //console.log(randNum + 'original number')

      const newRandNum = Math.floor((Math.random() * 3) + 1)
      //console.log(newRandNum + 'new number')

      if (cells.forEach(cell => {
        cell.classList.contains('food1')
        console.log(cells.childNodes.length)
      })) {
        console.log('game over')
      } else {
        console.log('game over 2')
      }
    

      if (cells[pinkGhost].classList.contains('greyGhost')
        && cells[pinkGhost].classList.contains('pacman')) {
        //console.log('hello')
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.remove('pinkGhost')
        score += 200
        pinkGhost = 294
        cells[pinkGhost].classList.add('pinkGhost')
      }
      else if (cells[pinkGhost].classList.contains('pacman')
        && lives === 0) {
        clearInterval(ghostsMoves)
        console.log('gameover')
      }
      else if (cells[pinkGhost].classList.contains('pacman')
        && lives >= 1) {
        //console.log('next life')
        setTimeout(() => {
          lives--
          console.log(lives)
          cells[pinkGhost].classList.remove('pinkGhost')
          pinkGhost = 294
          cells[pinkGhost].classList.add('pinkGhost')
          cells[pacman].classList.remove('pacman')
          pacman = 353
          cells[pacman].classList.add('pacman')
        }, 1000)
       
        clearInterval(ghostsMoves)


      }




      //--------MOVE IN A LINE --------
      //-----------------------------
      // move upwards in a line
      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && (cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && (cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && (cells[pinkGhost + width].classList.contains('moveAlong') || cells[pinkGhost + width].classList.contains('walls'))
        && !(cells[pinkGhost - width].classList.contains('walls'))
      ) {

        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= width
        cells[pinkGhost].classList.add('pinkGhost')

        // move downwards in a line
      } else if (cells[pinkGhost].classList.contains('pinkGhost')
        && (cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && (cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && (cells[pinkGhost - width].classList.contains('moveAlong') || cells[pinkGhost - width].classList.contains('walls'))
        && !(cells[pinkGhost + width].classList.contains('walls'))
      ) {

        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += width
        cells[pinkGhost].classList.add('pinkGhost')

        // move left in a line
      } else if (cells[pinkGhost].classList.contains('pinkGhost')
        && (cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && (cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && (cells[pinkGhost + 1].classList.contains('moveAlong') || cells[pinkGhost + 1].classList.contains('walls'))
        && !(cells[pinkGhost - 1].classList.contains('walls'))
      ) {

        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= 1
        cells[pinkGhost].classList.add('pinkGhost')


        // move right in a line
      } else if (cells[pinkGhost].classList.contains('pinkGhost')
        && (cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && (cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && (cells[pinkGhost - 1].classList.contains('moveAlong') || cells[pinkGhost - 1].classList.contains('walls'))
        && !(cells[pinkGhost + 1].classList.contains('walls'))
      ) {

        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += 1
        cells[pinkGhost].classList.add('pinkGhost')


        //-----TWO DIRECTIONS POSSIBLE----
        //--------------------------------

        //right blocked and top blocked rand 1 = go down
      } else if (cells[pinkGhost].classList.contains('pinkGhost')
        && (cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && (cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && randNum === 1) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += width
        cells[pinkGhost].classList.add('pinkGhost')
      }

      //right blocked and top blocked rand 2 = go left
      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && (cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && (cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && randNum === 2) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= 1
        cells[pinkGhost].classList.add('pinkGhost')
      }

      // If right is blocked and bottom is blocked + rand 1 = up
      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && (cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && (cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && randNum === 1) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= width
        cells[pinkGhost].classList.add('pinkGhost')
      }

      // If right is blocked and bottom is blocked + rand 2 = left
      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && (cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && (cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && randNum === 2) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= 1
        cells[pinkGhost].classList.add('pinkGhost')
      }

      // If left blocked and bottom is blocked + rand 1 = go up
      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && (cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && (cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && randNum === 1) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= width
        cells[pinkGhost].classList.add('pinkGhost')
      }
      // If left blocked and bottom is blocked + rand 2 = go right
      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && (cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && (cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && randNum === 2) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += 1
        cells[pinkGhost].classList.add('pinkGhost')
      }


      // If left blocker and top blocked + rand 1 = go down

      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && (cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && (cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && randNum === 1) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += width
        cells[pinkGhost].classList.add('pinkGhost')
      }

      // If left blocked and top blaocked + rand 2 = go right
      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && (cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && (cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && randNum === 2) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += 1
        cells[pinkGhost].classList.add('pinkGhost')
      }


      //---- THREE DIRECTIONS POSSIBLE----
      //------------------------------------------

      // Top, bottom and left are empty - new rand 1(left)
      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && !(cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && !(cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && !(cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && newRandNum === 1) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= 1
        cells[pinkGhost].classList.add('pinkGhost')
      }

      // Top, bottom and left are empty - new rand 2 (bottom)
      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && !(cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && !(cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && !(cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && newRandNum === 2) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += width
        cells[pinkGhost].classList.add('pinkGhost')
      }

      // Top, bottom and left are empty - new rand 3 (top)
      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && !(cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && !(cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && !(cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && newRandNum === 3) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= width
        cells[pinkGhost].classList.add('pinkGhost')
      }

      // Top, bottom and right are empty - new rand 1(right)
      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && !(cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && !(cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && !(cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && newRandNum === 1) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += 1
        cells[pinkGhost].classList.add('pinkGhost')
      }

      // Top, bottom and right are empty -  new rand 2 (bottom)
      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && !(cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && !(cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && !(cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && newRandNum === 2) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += width
        cells[pinkGhost].classList.add('pinkGhost')
      }

      // Top, bottom and right are empty - new rand 3 (up)
      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && !(cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && !(cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && !(cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && newRandNum === 3) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= width
        cells[pinkGhost].classList.add('pinkGhost')
      }

      // Bottom, right and left are empty - new rand 1(left)
      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && !(cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && !(cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && !(cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && newRandNum === 1) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= 1
        cells[pinkGhost].classList.add('pinkGhost')
      }


      // Bottom, right and left are empty -  new rand 2 (down)
      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && !(cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && !(cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && !(cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && newRandNum === 2) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += width
        cells[pinkGhost].classList.add('pinkGhost')
      }
      // Bottom, right and left are empty -  new rand 3 (right)

      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && !(cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && !(cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && !(cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && newRandNum === 1) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += 1
        cells[pinkGhost].classList.add('pinkGhost')
      }

      // Top, left and right are empty - new rand 1(left)

      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && !(cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && !(cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && !(cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && newRandNum === 1) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= 1
        cells[pinkGhost].classList.add('pinkGhost')
      }
      // Top, left and right are empty - new rand 2 (up)

      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && !(cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && !(cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && !(cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && newRandNum === 2) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= width
        cells[pinkGhost].classList.add('pinkGhost')
      }

      // Top, left and right are empty - new rand 3 (right)

      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && !(cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && !(cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && !(cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && newRandNum === 3) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += 1
        cells[pinkGhost].classList.add('pinkGhost')
      }


      //---- STOP  GETTING STUCK IN CORNERS ----
      //----------------------------------------------
      // If right, top and left are blocked = go down
      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && (cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && (cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && (cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && cells[pinkGhost + width].classList.contains('moveAlong')
      ) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += width
        cells[pinkGhost].classList.add('pinkGhost')
      }


      // If right, bottom and left are blocked = go up

      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && (cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && (cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && (cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && cells[pinkGhost - width].classList.contains('moveAlong')
      ) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= width
        cells[pinkGhost].classList.add('pinkGhost')
      }

      // If bottom, top and right are blocked = go left

      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && (cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && (cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && (cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && cells[pinkGhost - 1].classList.contains('moveAlong')
      ) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= 1
        cells[pinkGhost].classList.add('pinkGhost')
      }
      // If bottom, top and left are blocked = go right

      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && (cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && (cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && (cells[pinkGhost + width].classList.contains('walls' || cells[pinkGhost + width].classList.contains('moveAlong')))
        && cells[pinkGhost + 1].classList.contains('moveAlong')
      ) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += 1
        cells[pinkGhost].classList.add('pinkGhost')
      }

      // ---- random direction when reach up/down

      // if left is move along, right is wall move upwards in a line rand 1
      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && cells[pinkGhost - 1].classList.contains('moveAlong')
        && cells[pinkGhost + 1].classList.contains('walls')
        && cells[pinkGhost + width].classList.contains('notwalls')
        && cells[pinkGhost - width].classList.contains('notwalls')
        && randNum === 1) {

        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= width
        cells[pinkGhost].classList.add('pinkGhost')
      }
      // if left move along, right is wall move downward in a line rand 2
      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && cells[pinkGhost - 1].classList.contains('moveAlong')
        && cells[pinkGhost + 1].classList.contains('walls')
        && cells[pinkGhost + width].classList.contains('notwalls')
        && cells[pinkGhost - width].classList.contains('notwalls')
        && randNum === 2) {

        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += width
        cells[pinkGhost].classList.add('pinkGhost')
      }
      // if right is move along, left wall move upwards in a line rand 1
      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && cells[pinkGhost + 1].classList.contains('moveAlong')
        && cells[pinkGhost - 1].classList.contains('walls')
        && cells[pinkGhost + width].classList.contains('notwalls')
        && cells[pinkGhost - width].classList.contains('notwalls')
        && randNum === 1) {

        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= width
        cells[pinkGhost].classList.add('pinkGhost')
      }
      // if right move along, move downward in a line rand 2
      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && cells[pinkGhost + 1].classList.contains('moveAlong')
        && cells[pinkGhost - 1].classList.contains('walls')
        && cells[pinkGhost + width].classList.contains('notwalls')
        && cells[pinkGhost - width].classList.contains('notwalls')
        && randNum === 2) {

        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += width
        cells[pinkGhost].classList.add('pinkGhost')
      }
      // if top is move along, bottom wall move left in a line rand 1
      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && cells[pinkGhost - width].classList.contains('moveAlong')
        && cells[pinkGhost + width].classList.contains('walls')
        && cells[pinkGhost + 1].classList.contains('notwalls')
        && cells[pinkGhost - 1].classList.contains('notwalls')
        && randNum === 1) {

        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= 1
        cells[pinkGhost].classList.add('pinkGhost')
      }

      // if top move along, bottom wall, move right in a line rand 2
      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && cells[pinkGhost - width].classList.contains('moveAlong')
        && cells[pinkGhost + width].classList.contains('walls')
        && cells[pinkGhost + 1].classList.contains('notwalls')
        && cells[pinkGhost - 1].classList.contains('notwalls')
        && randNum === 2) {

        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += 1
        cells[pinkGhost].classList.add('pinkGhost')
      }

      // if bottom is move along, top wall move left in a line rand 1
      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && cells[pinkGhost + width].classList.contains('moveAlong')
        && cells[pinkGhost - width].classList.contains('walls')
        && cells[pinkGhost + 1].classList.contains('notwalls')
        && cells[pinkGhost - 1].classList.contains('notwalls')
        && randNum === 1) {

        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= 1
        cells[pinkGhost].classList.add('pinkGhost')
      }
      // if bottom move along, top wall, move right in a line rand 2
      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && cells[pinkGhost + width].classList.contains('moveAlong')
        && cells[pinkGhost - width].classList.contains('walls')
        && cells[pinkGhost + 1].classList.contains('notwalls')
        && cells[pinkGhost - 1].classList.contains('notwalls')
        && randNum === 1) {

        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += 1
        cells[pinkGhost].classList.add('pinkGhost')
      }




      // ===== GREY GHOST START

      //--------MOVE IN A LINE --------
      //-----------------------------
      // move upwards in a line
      else if (cells[pinkGhost].classList.contains('greyGhost')
        && (cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && (cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && (cells[pinkGhost + width].classList.contains('moveAlong') || cells[pinkGhost + width].classList.contains('walls'))
        && !(cells[pinkGhost - width].classList.contains('walls'))
      ) {

        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= width
        cells[pinkGhost].classList.add('greyGhost')

        // move downwards in a line
      } else if (cells[pinkGhost].classList.contains('greyGhost')
        && (cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && (cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && (cells[pinkGhost - width].classList.contains('moveAlong') || cells[pinkGhost - width].classList.contains('walls'))
        && !(cells[pinkGhost + width].classList.contains('walls'))
      ) {

        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += width
        cells[pinkGhost].classList.add('greyGhost')

        // move left in a line
      } else if (cells[pinkGhost].classList.contains('greyGhost')
        && (cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && (cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && (cells[pinkGhost + 1].classList.contains('moveAlong') || cells[pinkGhost + 1].classList.contains('walls'))
        && !(cells[pinkGhost - 1].classList.contains('walls'))
      ) {

        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= 1
        cells[pinkGhost].classList.add('greyGhost')


        // move right in a line
      } else if (cells[pinkGhost].classList.contains('greyGhost')
        && (cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && (cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && (cells[pinkGhost - 1].classList.contains('moveAlong') || cells[pinkGhost - 1].classList.contains('walls'))
        && !(cells[pinkGhost + 1].classList.contains('walls'))
      ) {

        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += 1
        cells[pinkGhost].classList.add('greyGhost')


        //-----TWO DIRECTIONS POSSIBLE----
        //--------------------------------

        //right blocked and top blocked rand 1 = go down
      } else if (cells[pinkGhost].classList.contains('greyGhost')
        && (cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && (cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && randNum === 1) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += width
        cells[pinkGhost].classList.add('greyGhost')
      }

      //right blocked and top blocked rand 2 = go left
      else if (cells[pinkGhost].classList.contains('greyGhost')
        && (cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && (cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && randNum === 2) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= 1
        cells[pinkGhost].classList.add('greyGhost')
      }

      // If right is blocked and bottom is blocked + rand 1 = up
      else if (cells[pinkGhost].classList.contains('greyGhost')
        && (cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && (cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && randNum === 1) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= width
        cells[pinkGhost].classList.add('greyGhost')
      }

      // If right is blocked and bottom is blocked + rand 2 = left
      else if (cells[pinkGhost].classList.contains('greyGhost')
        && (cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && (cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && randNum === 2) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= 1
        cells[pinkGhost].classList.add('greyGhost')
      }

      // If left blocked and bottom is blocked + rand 1 = go up
      else if (cells[pinkGhost].classList.contains('greyGhost')
        && (cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && (cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && randNum === 1) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= width
        cells[pinkGhost].classList.add('greyGhost')
      }
      // If left blocked and bottom is blocked + rand 2 = go right
      else if (cells[pinkGhost].classList.contains('greyGhost')
        && (cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && (cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && randNum === 2) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += 1
        cells[pinkGhost].classList.add('greyGhost')
      }


      // If left blocker and top blocked + rand 1 = go down

      else if (cells[pinkGhost].classList.contains('greyGhost')
        && (cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && (cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && randNum === 1) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += width
        cells[pinkGhost].classList.add('greyGhost')
      }

      // If left blocked and top blaocked + rand 2 = go right
      else if (cells[pinkGhost].classList.contains('greyGhost')
        && (cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && (cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && randNum === 2) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += 1
        cells[pinkGhost].classList.add('greyGhost')
      }


      //---- THREE DIRECTIONS POSSIBLE----
      //------------------------------------------

      // Top, bottom and left are empty - new rand 1(left)
      else if (cells[pinkGhost].classList.contains('greyGhost')
        && !(cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && !(cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && !(cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && newRandNum === 1) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= 1
        cells[pinkGhost].classList.add('greyGhost')
      }

      // Top, bottom and left are empty - new rand 2 (bottom)
      else if (cells[pinkGhost].classList.contains('greyGhost')
        && !(cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && !(cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && !(cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && newRandNum === 2) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += width
        cells[pinkGhost].classList.add('greyGhost')
      }

      // Top, bottom and left are empty - new rand 3 (top)
      else if (cells[pinkGhost].classList.contains('greyGhost')
        && !(cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && !(cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && !(cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && newRandNum === 3) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= width
        cells[pinkGhost].classList.add('greyGhost')
      }

      // Top, bottom and right are empty - new rand 1(right)
      else if (cells[pinkGhost].classList.contains('greyGhost')
        && !(cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && !(cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && !(cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && newRandNum === 1) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += 1
        cells[pinkGhost].classList.add('greyGhost')
      }

      // Top, bottom and right are empty -  new rand 2 (bottom)
      else if (cells[pinkGhost].classList.contains('greyGhost')
        && !(cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && !(cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && !(cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && newRandNum === 2) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += width
        cells[pinkGhost].classList.add('greyGhost')
      }

      // Top, bottom and right are empty - new rand 3 (up)
      else if (cells[pinkGhost].classList.contains('greyGhost')
        && !(cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && !(cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && !(cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && newRandNum === 3) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= width
        cells[pinkGhost].classList.add('greyGhost')
      }

      // Bottom, right and left are empty - new rand 1(left)
      else if (cells[pinkGhost].classList.contains('greyGhost')
        && !(cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && !(cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && !(cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && newRandNum === 1) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= 1
        cells[pinkGhost].classList.add('greyGhost')
      }


      // Bottom, right and left are empty -  new rand 2 (down)
      else if (cells[pinkGhost].classList.contains('greyGhost')
        && !(cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && !(cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && !(cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && newRandNum === 2) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += width
        cells[pinkGhost].classList.add('greyGhost')
      }
      // Bottom, right and left are empty -  new rand 3 (right)

      else if (cells[pinkGhost].classList.contains('greyGhost')
        && !(cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && !(cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && !(cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && newRandNum === 1) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += 1
        cells[pinkGhost].classList.add('greyGhost')
      }

      // Top, left and right are empty - new rand 1(left)

      else if (cells[pinkGhost].classList.contains('greyGhost')
        && !(cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && !(cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && !(cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && newRandNum === 1) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= 1
        cells[pinkGhost].classList.add('greyGhost')
      }
      // Top, left and right are empty - new rand 2 (up)

      else if (cells[pinkGhost].classList.contains('greyGhost')
        && !(cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && !(cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && !(cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && newRandNum === 2) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= width
        cells[pinkGhost].classList.add('greyGhost')
      }

      // Top, left and right are empty - new rand 3 (right)

      else if (cells[pinkGhost].classList.contains('greyGhost')
        && !(cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && !(cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && !(cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && newRandNum === 3) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += 1
        cells[pinkGhost].classList.add('greyGhost')
      }


      //---- STOP  GETTING STUCK IN CORNERS ----
      //----------------------------------------------
      // If right, top and left are blocked = go down
      else if (cells[pinkGhost].classList.contains('greyGhost')
        && (cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && (cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && (cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && cells[pinkGhost + width].classList.contains('moveAlong')
      ) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += width
        cells[pinkGhost].classList.add('greyGhost')
      }


      // If right, bottom and left are blocked = go up

      else if (cells[pinkGhost].classList.contains('greyGhost')
        && (cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && (cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && (cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && cells[pinkGhost - width].classList.contains('moveAlong')
      ) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= width
        cells[pinkGhost].classList.add('greyGhost')
      }

      // If bottom, top and right are blocked = go left

      else if (cells[pinkGhost].classList.contains('greyGhost')
        && (cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && (cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && (cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && cells[pinkGhost - 1].classList.contains('moveAlong')
      ) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= 1
        cells[pinkGhost].classList.add('greyGhost')
      }
      // If bottom, top and left are blocked = go right

      else if (cells[pinkGhost].classList.contains('greyGhost')
        && (cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && (cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && (cells[pinkGhost + width].classList.contains('walls' || cells[pinkGhost + width].classList.contains('moveAlong')))
        && cells[pinkGhost + 1].classList.contains('moveAlong')
      ) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += 1
        cells[pinkGhost].classList.add('greyGhost')
      }

      // ---- random direction when reach up/down

      // if left is move along, right is wall move upwards in a line rand 1
      else if (cells[pinkGhost].classList.contains('greyGhost')
        && cells[pinkGhost - 1].classList.contains('moveAlong')
        && cells[pinkGhost + 1].classList.contains('walls')
        && cells[pinkGhost + width].classList.contains('notwalls')
        && cells[pinkGhost - width].classList.contains('notwalls')
        && randNum === 1) {

        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= width
        cells[pinkGhost].classList.add('greyGhost')
      }
      // if left move along, right is wall move downward in a line rand 2
      else if (cells[pinkGhost].classList.contains('greyGhost')
        && cells[pinkGhost - 1].classList.contains('moveAlong')
        && cells[pinkGhost + 1].classList.contains('walls')
        && cells[pinkGhost + width].classList.contains('notwalls')
        && cells[pinkGhost - width].classList.contains('notwalls')
        && randNum === 2) {

        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += width
        cells[pinkGhost].classList.add('greyGhost')
      }
      // if right is move along, left wall move upwards in a line rand 1
      else if (cells[pinkGhost].classList.contains('greyGhost')
        && cells[pinkGhost + 1].classList.contains('moveAlong')
        && cells[pinkGhost - 1].classList.contains('walls')
        && cells[pinkGhost + width].classList.contains('notwalls')
        && cells[pinkGhost - width].classList.contains('notwalls')
        && randNum === 1) {

        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= width
        cells[pinkGhost].classList.add('greyGhost')
      }
      // if right move along, move downward in a line rand 2
      else if (cells[pinkGhost].classList.contains('greyGhost')
        && cells[pinkGhost + 1].classList.contains('moveAlong')
        && cells[pinkGhost - 1].classList.contains('walls')
        && cells[pinkGhost + width].classList.contains('notwalls')
        && cells[pinkGhost - width].classList.contains('notwalls')
        && randNum === 2) {

        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += width
        cells[pinkGhost].classList.add('greyGhost')
      }
      // if top is move along, bottom wall move left in a line rand 1
      else if (cells[pinkGhost].classList.contains('greyGhost')
        && cells[pinkGhost - width].classList.contains('moveAlong')
        && cells[pinkGhost + width].classList.contains('walls')
        && cells[pinkGhost + 1].classList.contains('notwalls')
        && cells[pinkGhost - 1].classList.contains('notwalls')
        && randNum === 1) {

        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= 1
        cells[pinkGhost].classList.add('greyGhost')
      }

      // if top move along, bottom wall, move right in a line rand 2
      else if (cells[pinkGhost].classList.contains('greyGhost')
        && cells[pinkGhost - width].classList.contains('moveAlong')
        && cells[pinkGhost + width].classList.contains('walls')
        && cells[pinkGhost + 1].classList.contains('notwalls')
        && cells[pinkGhost - 1].classList.contains('notwalls')
        && randNum === 2) {

        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += 1
        cells[pinkGhost].classList.add('greyGhost')
      }

      // if bottom is move along, top wall move left in a line rand 1
      else if (cells[pinkGhost].classList.contains('greyGhost')
        && cells[pinkGhost + width].classList.contains('moveAlong')
        && cells[pinkGhost - width].classList.contains('walls')
        && cells[pinkGhost + 1].classList.contains('notwalls')
        && cells[pinkGhost - 1].classList.contains('notwalls')
        && randNum === 1) {

        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= 1
        cells[pinkGhost].classList.add('greyGhost')
      }
      // if bottom move along, top wall, move right in a line rand 2
      else if (cells[pinkGhost].classList.contains('greyGhost')
        && cells[pinkGhost + width].classList.contains('moveAlong')
        && cells[pinkGhost - width].classList.contains('walls')
        && cells[pinkGhost + 1].classList.contains('notwalls')
        && cells[pinkGhost - 1].classList.contains('notwalls')
        && randNum === 1) {

        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += 1
        cells[pinkGhost].classList.add('greyGhost')
      }

      //======= END GREY GHOST ======


    }, 500)

    //===============================
    //===============================


  }


  else if (key === 's'
    && lives <= 2) {


    cells[pacman].classList.remove('pacman')
    pacman += 1
    cells[pacman].classList.add('pacman')



    //====================================
    // ===========GHOOOOOSSSTTTTTSSS=======
    cells[pinkGhost].classList.remove('pinkGhost')
    //ghost move?
    cells[pinkGhost].classList.add('pinkGhost')

    cells[greenGhost].classList.remove('greenGhost')
    //ghost move?
    cells[greenGhost].classList.add('greenGhost')

    cells[orangeGhost].classList.remove('orangeGhost')
    //ghost move?
    cells[orangeGhost].classList.add('orangeGhost')

    cells[blueGhost].classList.remove('blueGhost')
    //ghost move?
    cells[blueGhost].classList.add('blueGhost')



    // =====GHOST MOVEMENT====
    const ghostsMoves = setInterval(() => {
      const randNum = Math.floor((Math.random() * 2) + 1)
      //console.log(randNum + 'original number')

      const newRandNum = Math.floor((Math.random() * 3) + 1)
      //console.log(newRandNum + 'new number')

      if (cells[pinkGhost].classList.contains('greyGhost')
        && cells[pinkGhost].classList.contains('pacman')) {
        console.log('hello')
      }


      else if (cells[pinkGhost].classList.contains('pacman')
        && lives === 1) {
        clearInterval(ghostsMoves)
        console.log('gameover')
        // scoring.innerHTML = 'GAMEOVER'

      }

      else if (cells[pinkGhost].classList.contains('pacman')
      && lives >= 1) {
      //console.log('next life')
      setTimeout(() => {
        lives--
        console.log(lives)
        cells[pinkGhost].classList.remove('pinkGhost')
        pinkGhost = 294
        cells[pinkGhost].classList.add('pinkGhost')
        cells[pacman].classList.remove('pacman')
        pacman = 353
        cells[pacman].classList.add('pacman')
      }, 1000)
     
      clearInterval(ghostsMoves)

    }




      //--------MOVE IN A LINE --------
      //-----------------------------
      // move upwards in a line
      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && (cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && (cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && (cells[pinkGhost + width].classList.contains('moveAlong') || cells[pinkGhost + width].classList.contains('walls'))
        && !(cells[pinkGhost - width].classList.contains('walls'))
      ) {

        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= width
        cells[pinkGhost].classList.add('pinkGhost')

        // move downwards in a line
      } else if (cells[pinkGhost].classList.contains('pinkGhost')
        && (cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && (cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && (cells[pinkGhost - width].classList.contains('moveAlong') || cells[pinkGhost - width].classList.contains('walls'))
        && !(cells[pinkGhost + width].classList.contains('walls'))
      ) {

        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += width
        cells[pinkGhost].classList.add('pinkGhost')

        // move left in a line
      } else if (cells[pinkGhost].classList.contains('pinkGhost')
        && (cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && (cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && (cells[pinkGhost + 1].classList.contains('moveAlong') || cells[pinkGhost + 1].classList.contains('walls'))
        && !(cells[pinkGhost - 1].classList.contains('walls'))
      ) {

        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= 1
        cells[pinkGhost].classList.add('pinkGhost')


        // move right in a line
      } else if (cells[pinkGhost].classList.contains('pinkGhost')
        && (cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && (cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && (cells[pinkGhost - 1].classList.contains('moveAlong') || cells[pinkGhost - 1].classList.contains('walls'))
        && !(cells[pinkGhost + 1].classList.contains('walls'))
      ) {

        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += 1
        cells[pinkGhost].classList.add('pinkGhost')


        //-----TWO DIRECTIONS POSSIBLE----
        //--------------------------------

        //right blocked and top blocked rand 1 = go down
      } else if (cells[pinkGhost].classList.contains('pinkGhost')
        && (cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && (cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && randNum === 1) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += width
        cells[pinkGhost].classList.add('pinkGhost')
      }

      //right blocked and top blocked rand 2 = go left
      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && (cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && (cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && randNum === 2) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= 1
        cells[pinkGhost].classList.add('pinkGhost')
      }

      // If right is blocked and bottom is blocked + rand 1 = up
      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && (cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && (cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && randNum === 1) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= width
        cells[pinkGhost].classList.add('pinkGhost')
      }

      // If right is blocked and bottom is blocked + rand 2 = left
      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && (cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && (cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && randNum === 2) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= 1
        cells[pinkGhost].classList.add('pinkGhost')
      }

      // If left blocked and bottom is blocked + rand 1 = go up
      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && (cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && (cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && randNum === 1) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= width
        cells[pinkGhost].classList.add('pinkGhost')
      }
      // If left blocked and bottom is blocked + rand 2 = go right
      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && (cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && (cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && randNum === 2) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += 1
        cells[pinkGhost].classList.add('pinkGhost')
      }


      // If left blocker and top blocked + rand 1 = go down

      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && (cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && (cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && randNum === 1) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += width
        cells[pinkGhost].classList.add('pinkGhost')
      }

      // If left blocked and top blaocked + rand 2 = go right
      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && (cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && (cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && randNum === 2) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += 1
        cells[pinkGhost].classList.add('pinkGhost')
      }


      //---- THREE DIRECTIONS POSSIBLE----
      //------------------------------------------

      // Top, bottom and left are empty - new rand 1(left)
      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && !(cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && !(cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && !(cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && newRandNum === 1) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= 1
        cells[pinkGhost].classList.add('pinkGhost')
      }

      // Top, bottom and left are empty - new rand 2 (bottom)
      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && !(cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && !(cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && !(cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && newRandNum === 2) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += width
        cells[pinkGhost].classList.add('pinkGhost')
      }

      // Top, bottom and left are empty - new rand 3 (top)
      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && !(cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && !(cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && !(cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && newRandNum === 3) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= width
        cells[pinkGhost].classList.add('pinkGhost')
      }

      // Top, bottom and right are empty - new rand 1(right)
      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && !(cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && !(cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && !(cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && newRandNum === 1) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += 1
        cells[pinkGhost].classList.add('pinkGhost')
      }

      // Top, bottom and right are empty -  new rand 2 (bottom)
      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && !(cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && !(cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && !(cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && newRandNum === 2) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += width
        cells[pinkGhost].classList.add('pinkGhost')
      }

      // Top, bottom and right are empty - new rand 3 (up)
      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && !(cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && !(cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && !(cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && newRandNum === 3) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= width
        cells[pinkGhost].classList.add('pinkGhost')
      }

      // Bottom, right and left are empty - new rand 1(left)
      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && !(cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && !(cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && !(cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && newRandNum === 1) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= 1
        cells[pinkGhost].classList.add('pinkGhost')
      }


      // Bottom, right and left are empty -  new rand 2 (down)
      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && !(cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && !(cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && !(cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && newRandNum === 2) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += width
        cells[pinkGhost].classList.add('pinkGhost')
      }
      // Bottom, right and left are empty -  new rand 3 (right)

      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && !(cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && !(cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && !(cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && newRandNum === 1) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += 1
        cells[pinkGhost].classList.add('pinkGhost')
      }

      // Top, left and right are empty - new rand 1(left)

      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && !(cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && !(cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && !(cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && newRandNum === 1) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= 1
        cells[pinkGhost].classList.add('pinkGhost')
      }
      // Top, left and right are empty - new rand 2 (up)

      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && !(cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && !(cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && !(cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && newRandNum === 2) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= width
        cells[pinkGhost].classList.add('pinkGhost')
      }

      // Top, left and right are empty - new rand 3 (right)

      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && !(cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && !(cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && !(cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && newRandNum === 3) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += 1
        cells[pinkGhost].classList.add('pinkGhost')
      }


      //---- STOP  GETTING STUCK IN CORNERS ----
      //----------------------------------------------
      // If right, top and left are blocked = go down
      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && (cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && (cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && (cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && cells[pinkGhost + width].classList.contains('moveAlong')
      ) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += width
        cells[pinkGhost].classList.add('pinkGhost')
      }


      // If right, bottom and left are blocked = go up

      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && (cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && (cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && (cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && cells[pinkGhost - width].classList.contains('moveAlong')
      ) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= width
        cells[pinkGhost].classList.add('pinkGhost')
      }

      // If bottom, top and right are blocked = go left

      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && (cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && (cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && (cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && cells[pinkGhost - 1].classList.contains('moveAlong')
      ) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= 1
        cells[pinkGhost].classList.add('pinkGhost')
      }
      // If bottom, top and left are blocked = go right

      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && (cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && (cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && (cells[pinkGhost + width].classList.contains('walls' || cells[pinkGhost + width].classList.contains('moveAlong')))
        && cells[pinkGhost + 1].classList.contains('moveAlong')
      ) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += 1
        cells[pinkGhost].classList.add('pinkGhost')
      }

      // ---- random direction when reach up/down

      // if left is move along, right is wall move upwards in a line rand 1
      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && cells[pinkGhost - 1].classList.contains('moveAlong')
        && cells[pinkGhost + 1].classList.contains('walls')
        && cells[pinkGhost + width].classList.contains('notwalls')
        && cells[pinkGhost - width].classList.contains('notwalls')
        && randNum === 1) {

        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= width
        cells[pinkGhost].classList.add('pinkGhost')
      }
      // if left move along, right is wall move downward in a line rand 2
      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && cells[pinkGhost - 1].classList.contains('moveAlong')
        && cells[pinkGhost + 1].classList.contains('walls')
        && cells[pinkGhost + width].classList.contains('notwalls')
        && cells[pinkGhost - width].classList.contains('notwalls')
        && randNum === 2) {

        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += width
        cells[pinkGhost].classList.add('pinkGhost')
      }
      // if right is move along, left wall move upwards in a line rand 1
      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && cells[pinkGhost + 1].classList.contains('moveAlong')
        && cells[pinkGhost - 1].classList.contains('walls')
        && cells[pinkGhost + width].classList.contains('notwalls')
        && cells[pinkGhost - width].classList.contains('notwalls')
        && randNum === 1) {

        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= width
        cells[pinkGhost].classList.add('pinkGhost')
      }
      // if right move along, move downward in a line rand 2
      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && cells[pinkGhost + 1].classList.contains('moveAlong')
        && cells[pinkGhost - 1].classList.contains('walls')
        && cells[pinkGhost + width].classList.contains('notwalls')
        && cells[pinkGhost - width].classList.contains('notwalls')
        && randNum === 2) {

        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += width
        cells[pinkGhost].classList.add('pinkGhost')
      }
      // if top is move along, bottom wall move left in a line rand 1
      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && cells[pinkGhost - width].classList.contains('moveAlong')
        && cells[pinkGhost + width].classList.contains('walls')
        && cells[pinkGhost + 1].classList.contains('notwalls')
        && cells[pinkGhost - 1].classList.contains('notwalls')
        && randNum === 1) {

        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= 1
        cells[pinkGhost].classList.add('pinkGhost')
      }

      // if top move along, bottom wall, move right in a line rand 2
      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && cells[pinkGhost - width].classList.contains('moveAlong')
        && cells[pinkGhost + width].classList.contains('walls')
        && cells[pinkGhost + 1].classList.contains('notwalls')
        && cells[pinkGhost - 1].classList.contains('notwalls')
        && randNum === 2) {

        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += 1
        cells[pinkGhost].classList.add('pinkGhost')
      }

      // if bottom is move along, top wall move left in a line rand 1
      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && cells[pinkGhost + width].classList.contains('moveAlong')
        && cells[pinkGhost - width].classList.contains('walls')
        && cells[pinkGhost + 1].classList.contains('notwalls')
        && cells[pinkGhost - 1].classList.contains('notwalls')
        && randNum === 1) {

        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= 1
        cells[pinkGhost].classList.add('pinkGhost')
      }
      // if bottom move along, top wall, move right in a line rand 2
      else if (cells[pinkGhost].classList.contains('pinkGhost')
        && cells[pinkGhost + width].classList.contains('moveAlong')
        && cells[pinkGhost - width].classList.contains('walls')
        && cells[pinkGhost + 1].classList.contains('notwalls')
        && cells[pinkGhost - 1].classList.contains('notwalls')
        && randNum === 1) {

        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('pinkGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += 1
        cells[pinkGhost].classList.add('pinkGhost')
      }



      // ===== GREY GHOST START

      //--------MOVE IN A LINE --------
      //-----------------------------
      // move upwards in a line
      else if (cells[pinkGhost].classList.contains('greyGhost')
        && (cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && (cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && (cells[pinkGhost + width].classList.contains('moveAlong') || cells[pinkGhost + width].classList.contains('walls'))
        && !(cells[pinkGhost - width].classList.contains('walls'))
      ) {

        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= width
        cells[pinkGhost].classList.add('greyGhost')

        // move downwards in a line
      } else if (cells[pinkGhost].classList.contains('greyGhost')
        && (cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && (cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && (cells[pinkGhost - width].classList.contains('moveAlong') || cells[pinkGhost - width].classList.contains('walls'))
        && !(cells[pinkGhost + width].classList.contains('walls'))
      ) {

        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += width
        cells[pinkGhost].classList.add('greyGhost')

        // move left in a line
      } else if (cells[pinkGhost].classList.contains('greyGhost')
        && (cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && (cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && (cells[pinkGhost + 1].classList.contains('moveAlong') || cells[pinkGhost + 1].classList.contains('walls'))
        && !(cells[pinkGhost - 1].classList.contains('walls'))
      ) {

        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= 1
        cells[pinkGhost].classList.add('greyGhost')


        // move right in a line
      } else if (cells[pinkGhost].classList.contains('greyGhost')
        && (cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && (cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && (cells[pinkGhost - 1].classList.contains('moveAlong') || cells[pinkGhost - 1].classList.contains('walls'))
        && !(cells[pinkGhost + 1].classList.contains('walls'))
      ) {

        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += 1
        cells[pinkGhost].classList.add('greyGhost')


        //-----TWO DIRECTIONS POSSIBLE----
        //--------------------------------

        //right blocked and top blocked rand 1 = go down
      } else if (cells[pinkGhost].classList.contains('greyGhost')
        && (cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && (cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && randNum === 1) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += width
        cells[pinkGhost].classList.add('greyGhost')
      }

      //right blocked and top blocked rand 2 = go left
      else if (cells[pinkGhost].classList.contains('greyGhost')
        && (cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && (cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && randNum === 2) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= 1
        cells[pinkGhost].classList.add('greyGhost')
      }

      // If right is blocked and bottom is blocked + rand 1 = up
      else if (cells[pinkGhost].classList.contains('greyGhost')
        && (cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && (cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && randNum === 1) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= width
        cells[pinkGhost].classList.add('greyGhost')
      }

      // If right is blocked and bottom is blocked + rand 2 = left
      else if (cells[pinkGhost].classList.contains('greyGhost')
        && (cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && (cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && randNum === 2) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= 1
        cells[pinkGhost].classList.add('greyGhost')
      }

      // If left blocked and bottom is blocked + rand 1 = go up
      else if (cells[pinkGhost].classList.contains('greyGhost')
        && (cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && (cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && randNum === 1) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= width
        cells[pinkGhost].classList.add('greyGhost')
      }
      // If left blocked and bottom is blocked + rand 2 = go right
      else if (cells[pinkGhost].classList.contains('greyGhost')
        && (cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && (cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && randNum === 2) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += 1
        cells[pinkGhost].classList.add('greyGhost')
      }


      // If left blocker and top blocked + rand 1 = go down

      else if (cells[pinkGhost].classList.contains('greyGhost')
        && (cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && (cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && randNum === 1) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += width
        cells[pinkGhost].classList.add('greyGhost')
      }

      // If left blocked and top blaocked + rand 2 = go right
      else if (cells[pinkGhost].classList.contains('greyGhost')
        && (cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && (cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && randNum === 2) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += 1
        cells[pinkGhost].classList.add('greyGhost')
      }


      //---- THREE DIRECTIONS POSSIBLE----
      //------------------------------------------

      // Top, bottom and left are empty - new rand 1(left)
      else if (cells[pinkGhost].classList.contains('greyGhost')
        && !(cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && !(cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && !(cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && newRandNum === 1) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= 1
        cells[pinkGhost].classList.add('greyGhost')
      }

      // Top, bottom and left are empty - new rand 2 (bottom)
      else if (cells[pinkGhost].classList.contains('greyGhost')
        && !(cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && !(cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && !(cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && newRandNum === 2) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += width
        cells[pinkGhost].classList.add('greyGhost')
      }

      // Top, bottom and left are empty - new rand 3 (top)
      else if (cells[pinkGhost].classList.contains('greyGhost')
        && !(cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && !(cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && !(cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && newRandNum === 3) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= width
        cells[pinkGhost].classList.add('greyGhost')
      }

      // Top, bottom and right are empty - new rand 1(right)
      else if (cells[pinkGhost].classList.contains('greyGhost')
        && !(cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && !(cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && !(cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && newRandNum === 1) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += 1
        cells[pinkGhost].classList.add('greyGhost')
      }

      // Top, bottom and right are empty -  new rand 2 (bottom)
      else if (cells[pinkGhost].classList.contains('greyGhost')
        && !(cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && !(cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && !(cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && newRandNum === 2) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += width
        cells[pinkGhost].classList.add('greyGhost')
      }

      // Top, bottom and right are empty - new rand 3 (up)
      else if (cells[pinkGhost].classList.contains('greyGhost')
        && !(cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && !(cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && !(cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && newRandNum === 3) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= width
        cells[pinkGhost].classList.add('greyGhost')
      }

      // Bottom, right and left are empty - new rand 1(left)
      else if (cells[pinkGhost].classList.contains('greyGhost')
        && !(cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && !(cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && !(cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && newRandNum === 1) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= 1
        cells[pinkGhost].classList.add('greyGhost')
      }


      // Bottom, right and left are empty -  new rand 2 (down)
      else if (cells[pinkGhost].classList.contains('greyGhost')
        && !(cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && !(cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && !(cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && newRandNum === 2) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += width
        cells[pinkGhost].classList.add('greyGhost')
      }
      // Bottom, right and left are empty -  new rand 3 (right)

      else if (cells[pinkGhost].classList.contains('greyGhost')
        && !(cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && !(cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && !(cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && newRandNum === 1) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += 1
        cells[pinkGhost].classList.add('greyGhost')
      }

      // Top, left and right are empty - new rand 1(left)

      else if (cells[pinkGhost].classList.contains('greyGhost')
        && !(cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && !(cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && !(cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && newRandNum === 1) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= 1
        cells[pinkGhost].classList.add('greyGhost')
      }
      // Top, left and right are empty - new rand 2 (up)

      else if (cells[pinkGhost].classList.contains('greyGhost')
        && !(cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && !(cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && !(cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && newRandNum === 2) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= width
        cells[pinkGhost].classList.add('greyGhost')
      }

      // Top, left and right are empty - new rand 3 (right)

      else if (cells[pinkGhost].classList.contains('greyGhost')
        && !(cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && !(cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && !(cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && newRandNum === 3) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += 1
        cells[pinkGhost].classList.add('greyGhost')
      }


      //---- STOP  GETTING STUCK IN CORNERS ----
      //----------------------------------------------
      // If right, top and left are blocked = go down
      else if (cells[pinkGhost].classList.contains('greyGhost')
        && (cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && (cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && (cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && cells[pinkGhost + width].classList.contains('moveAlong')
      ) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += width
        cells[pinkGhost].classList.add('greyGhost')
      }


      // If right, bottom and left are blocked = go up

      else if (cells[pinkGhost].classList.contains('greyGhost')
        && (cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && (cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && (cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && cells[pinkGhost - width].classList.contains('moveAlong')
      ) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= width
        cells[pinkGhost].classList.add('greyGhost')
      }

      // If bottom, top and right are blocked = go left

      else if (cells[pinkGhost].classList.contains('greyGhost')
        && (cells[pinkGhost + 1].classList.contains('walls') || cells[pinkGhost + 1].classList.contains('moveAlong'))
        && (cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && (cells[pinkGhost + width].classList.contains('walls') || cells[pinkGhost + width].classList.contains('moveAlong'))
        && cells[pinkGhost - 1].classList.contains('moveAlong')
      ) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= 1
        cells[pinkGhost].classList.add('greyGhost')
      }
      // If bottom, top and left are blocked = go right

      else if (cells[pinkGhost].classList.contains('greyGhost')
        && (cells[pinkGhost - 1].classList.contains('walls') || cells[pinkGhost - 1].classList.contains('moveAlong'))
        && (cells[pinkGhost - width].classList.contains('walls') || cells[pinkGhost - width].classList.contains('moveAlong'))
        && (cells[pinkGhost + width].classList.contains('walls' || cells[pinkGhost + width].classList.contains('moveAlong')))
        && cells[pinkGhost + 1].classList.contains('moveAlong')
      ) {
        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += 1
        cells[pinkGhost].classList.add('greyGhost')
      }

      // ---- random direction when reach up/down

      // if left is move along, right is wall move upwards in a line rand 1
      else if (cells[pinkGhost].classList.contains('greyGhost')
        && cells[pinkGhost - 1].classList.contains('moveAlong')
        && cells[pinkGhost + 1].classList.contains('walls')
        && cells[pinkGhost + width].classList.contains('notwalls')
        && cells[pinkGhost - width].classList.contains('notwalls')
        && randNum === 1) {

        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= width
        cells[pinkGhost].classList.add('greyGhost')
      }
      // if left move along, right is wall move downward in a line rand 2
      else if (cells[pinkGhost].classList.contains('greyGhost')
        && cells[pinkGhost - 1].classList.contains('moveAlong')
        && cells[pinkGhost + 1].classList.contains('walls')
        && cells[pinkGhost + width].classList.contains('notwalls')
        && cells[pinkGhost - width].classList.contains('notwalls')
        && randNum === 2) {

        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += width
        cells[pinkGhost].classList.add('greyGhost')
      }
      // if right is move along, left wall move upwards in a line rand 1
      else if (cells[pinkGhost].classList.contains('greyGhost')
        && cells[pinkGhost + 1].classList.contains('moveAlong')
        && cells[pinkGhost - 1].classList.contains('walls')
        && cells[pinkGhost + width].classList.contains('notwalls')
        && cells[pinkGhost - width].classList.contains('notwalls')
        && randNum === 1) {

        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= width
        cells[pinkGhost].classList.add('greyGhost')
      }
      // if right move along, move downward in a line rand 2
      else if (cells[pinkGhost].classList.contains('greyGhost')
        && cells[pinkGhost + 1].classList.contains('moveAlong')
        && cells[pinkGhost - 1].classList.contains('walls')
        && cells[pinkGhost + width].classList.contains('notwalls')
        && cells[pinkGhost - width].classList.contains('notwalls')
        && randNum === 2) {

        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += width
        cells[pinkGhost].classList.add('greyGhost')
      }
      // if top is move along, bottom wall move left in a line rand 1
      else if (cells[pinkGhost].classList.contains('greyGhost')
        && cells[pinkGhost - width].classList.contains('moveAlong')
        && cells[pinkGhost + width].classList.contains('walls')
        && cells[pinkGhost + 1].classList.contains('notwalls')
        && cells[pinkGhost - 1].classList.contains('notwalls')
        && randNum === 1) {

        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= 1
        cells[pinkGhost].classList.add('greyGhost')
      }

      // if top move along, bottom wall, move right in a line rand 2
      else if (cells[pinkGhost].classList.contains('greyGhost')
        && cells[pinkGhost - width].classList.contains('moveAlong')
        && cells[pinkGhost + width].classList.contains('walls')
        && cells[pinkGhost + 1].classList.contains('notwalls')
        && cells[pinkGhost - 1].classList.contains('notwalls')
        && randNum === 2) {

        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += 1
        cells[pinkGhost].classList.add('greyGhost')
      }

      // if bottom is move along, top wall move left in a line rand 1
      else if (cells[pinkGhost].classList.contains('greyGhost')
        && cells[pinkGhost + width].classList.contains('moveAlong')
        && cells[pinkGhost - width].classList.contains('walls')
        && cells[pinkGhost + 1].classList.contains('notwalls')
        && cells[pinkGhost - 1].classList.contains('notwalls')
        && randNum === 1) {

        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost -= 1
        cells[pinkGhost].classList.add('greyGhost')
      }
      // if bottom move along, top wall, move right in a line rand 2
      else if (cells[pinkGhost].classList.contains('greyGhost')
        && cells[pinkGhost + width].classList.contains('moveAlong')
        && cells[pinkGhost - width].classList.contains('walls')
        && cells[pinkGhost + 1].classList.contains('notwalls')
        && cells[pinkGhost - 1].classList.contains('notwalls')
        && randNum === 1) {

        //--
        cells[pinkGhost - 1].classList.remove('moveAlong')
        cells[pinkGhost + 1].classList.remove('moveAlong')
        cells[pinkGhost - width].classList.remove('moveAlong')
        cells[pinkGhost + width].classList.remove('moveAlong')
        //---
        cells[pinkGhost].classList.remove('greyGhost')
        cells[pinkGhost].classList.add('moveAlong')
        pinkGhost += 1
        cells[pinkGhost].classList.add('greyGhost')
      }

      //======= END GREY GHOST ======

    }, 500)

    //===============================
    //===============================

  }


  scoreKeeper.innerHTML = score


  //console.log(scoring)
// if (lives === 1){
//   scoring.classList.remove('life2')
// }
 
  

})

