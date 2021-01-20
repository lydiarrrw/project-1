
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
const winner = document.querySelector('.winner')


let foodCount = 0
let energizerCount = 0
const scoreKeeper = document.querySelector('.score')
let greyMode = false
let lives = 3
const livesLeft = document.querySelector('.life')
//console.log(livesLeft)

const energizer = [21, 38, 361, 358]
let pacman = 353
let score = 0

let pinkGhost = 268
let greenGhost = 248
let orangeGhost = 269
let blueGhost = 270




for (let index = 0; index < width ** 2; index++) {
  const cell = document.createElement('div')

  if (walls.includes(index)) {
    cell.classList.add('walls')
  } else {
    cell.classList.add('notwalls')
  }

  if (energizer.includes(index)) {
    cell.classList.add('energy')
    energizerCount++
  } else if (pen.includes(index)) {
    cell.classList.add('pen')
  } else if (cell.classList.contains('notwalls')) {
    cell.classList.add('food1')
    foodCount++
  }


  grid.appendChild(cell)
  cells.push(cell)
  //cell.innerHTML = index
  cell.style.width = `${100 / width}%`
  cell.style.height = `${100 / width}%`

}

// console.log(cells.length)
// console.log(walls.length)
// console.log(foodCount)
// console.log(energizerCount)

function gameover() {
  if (lives === 0) {
    winner.innerHTML = `The ghosts beat you this time, your score is ${score}`
    console.log('loser')
    cells[pinkGhost].classList.remove('pinkGhost')
    cells[pacman].classList.remove('pacman')
    livesLeft.innerHTML = lives

  } else if (foodCount === 0
    && energizerCount === 0) {
    winner.innerHTML = `You win, your score is ${score}`
    //console.log('winner')
  }
  //console.log('hello', lives)
}



document.addEventListener('keydown', function start(event) {
  const key = event.key

  gameover()

  if (key === 's'
    && lives >= 1) {

    cells[pacman].classList.remove('pacman')
    pacman += 1
    cells[pacman].classList.add('pacman')
    startGhost(pinkGhost, 'pinkGhost', 268)
    startGhost(blueGhost, 'blueGhost', 248)
    startGhost(greenGhost, 'greenGhost', 269)
    startGhost(orangeGhost, 'orangeGhost', 270)

  }
  if (lives === 0) {
    document.removeEventListener('keydown', start)
  }





  if (key === 'ArrowRight'
    && cells[pacman + 1].classList.contains('notwalls')
    && cells[pacman].classList.contains('energy')) {
    cells[pacman].classList.remove('energy')
    cells[pacman].classList.remove('pacman')
    pacman += 1 //right
    score += 200
    energizerCount--
    cells[pacman].classList.add('pacman')

  } else if (key === 'ArrowRight'
    && cells[pacman + 1].classList.contains('notwalls')
    && (cells[pacman].classList.contains('food1'))) {
    cells[pacman].classList.remove('pacman')
    cells[pacman].classList.remove('food1')
    pacman += 1 //right
    score += 10
    foodCount--
    cells[pacman].classList.add('pacman')

  } else if (key === 'ArrowRight'
    && cells[pacman + 1].classList.contains('notwalls')
    && !(cells[pacman].classList.contains('food1'))) {
    cells[pacman].classList.remove('pacman')
    pacman += 1 //right
    cells[pacman].classList.add('pacman')

  } else if (key === 'ArrowLeft'
    && cells[pacman - 1].classList.contains('notwalls')
    && cells[pacman].classList.contains('energy')) {
    cells[pacman].classList.remove('energy')
    cells[pacman].classList.remove('pacman')
    pacman -= 1 //left
    score += 200
    energizerCount--
    cells[pacman].classList.add('pacman')

  } else if (key === 'ArrowLeft'
    && cells[pacman - 1].classList.contains('notwalls')
    && cells[pacman].classList.contains('food1')) {
    cells[pacman].classList.remove('pacman')
    cells[pacman].classList.remove('food1')
    pacman -= 1 //left
    score += 10
    foodCount--
    cells[pacman].classList.add('pacman')

  } else if (key === 'ArrowLeft'
    && cells[pacman - 1].classList.contains('notwalls')
    && !(cells[pacman].classList.contains('food1'))) {
    cells[pacman].classList.remove('pacman')
    pacman -= 1 //left
    cells[pacman].classList.add('pacman')


  } else if (key === 'ArrowDown'
    && cells[pacman + width].classList.contains('notwalls')
    && cells[pacman].classList.contains('energy')) {
    cells[pacman].classList.remove('energy')
    cells[pacman].classList.remove('pacman')
    pacman += width //down
    score += 200
    energizerCount--
    cells[pacman].classList.add('pacman')


  } else if (key === 'ArrowDown'
    && cells[pacman + width].classList.contains('notwalls')
    && !(cells[pacman].classList.contains('food1'))) {
    cells[pacman].classList.remove('pacman')
    pacman += width // down
    cells[pacman].classList.add('pacman')
  } else if (key === 'ArrowDown'
    && cells[pacman + width].classList.contains('notwalls')
    && cells[pacman].classList.contains('food1')) {
    cells[pacman].classList.remove('pacman')
    cells[pacman].classList.remove('food1')
    pacman += width // down
    score += 10
    foodCount--
    cells[pacman].classList.add('pacman')

  } else if (key === 'ArrowUp'
    && cells[pacman - width].classList.contains('notwalls')
    && cells[pacman].classList.contains('energy')) {
    cells[pacman].classList.remove('energy')
    cells[pacman].classList.remove('pacman')
    pacman -= width //up
    score += 200
    energizerCount--
    cells[pacman].classList.add('pacman')
  } else if (key === 'ArrowUp'
    && cells[pacman - width].classList.contains('notwalls')
    && !(cells[pacman].classList.contains('food1'))) {
    cells[pacman].classList.remove('pacman')
    pacman -= width //up
    cells[pacman].classList.add('pacman')

  } else if (key === 'ArrowUp'
    && cells[pacman - width].classList.contains('notwalls')
    && cells[pacman].classList.contains('food1')) {
    cells[pacman].classList.remove('pacman')
    cells[pacman].classList.remove('food1')
    pacman -= width //up
    score += 10
    foodCount--
    cells[pacman].classList.add('pacman')

  }
  //console.log(score)



  // ==== GREY GHOST MODE =====

  if (cells[pacman].classList.contains('energy')) {
    greyMode = true
    greyGhostMode(pinkGhost)
    greyGhostMode(orangeGhost)
    greyGhostMode(blueGhost)
    greyGhostMode(greenGhost)

  }

  function greyGhostMode(ghost) {

    // cells[ghost].classList.add('greyGhost')
    setTimeout(() => {
      // cells[ghost].classList.remove('greyGhost')
      greyMode = false
    }, 5000)

  }


  scoreKeeper.innerHTML = score

  livesLeft.innerHTML = lives - 1


})



function startGhost(ghost, string, number) {
  // ADD GHOULS
  cells.forEach((cell) => {
    cell.classList.remove(string)
  })
  cells[ghost].classList.remove(string)
  cells[ghost].classList.add(string)



  // GHOUL MOVEMENT

  const ghostsMoves = setInterval(() => {


    const randNum = Math.floor((Math.random() * 2) + 1)
    //console.log(randNum + 'original number')

    const newRandNum = Math.floor((Math.random() * 3) + 1)
    //console.log(newRandNum + 'new number')

   
    if (cells[ghost].classList.contains('greyGhost')
      && cells[ghost].classList.contains('pacman')) {
      //console.log('grey ghost mode')
      cells[ghost].classList.remove('greyGhost')
      cells[ghost].classList.remove(string)
      ghost = number
      cells[ghost].classList.add(string)
      }
   
      cells[ghost].classList.remove('greyGhost')
    

    if (cells[ghost].classList.contains('pacman')
      && lives === 0) {
      clearInterval(ghostsMoves)
      console.log('gameover2')
      gameover()
      cells[ghost].classList.remove(string)
      ghost = number
      cells[ghost].classList.add(string)

    }

    else if (cells[ghost].classList.contains('pacman')
      && lives >= 1) {
      //console.log('next life')
      setTimeout(() => {
        lives--
        console.log(lives)
        gameover()
        cells[ghost].classList.remove(string)
        ghost = number
        cells[ghost].classList.add(string)
        cells[pacman].classList.remove('pacman')
        pacman = 353
        cells[pacman].classList.add('pacman')
        startGhost(ghost, string, number)
      }, 1000)

      clearInterval(ghostsMoves)

    }

    // else if (lives === 0) {
    //   document.addEventListener('keydown', (event))
    // }




    //--------MOVE IN A LINE --------
    //-----------------------------
    // move upwards in a line
    else if (cells[ghost].classList.contains(string)
      && (cells[ghost + 1].classList.contains('walls') || cells[ghost + 1].classList.contains('moveAlong'))
      && (cells[ghost - 1].classList.contains('walls') || cells[ghost - 1].classList.contains('moveAlong'))
      && (cells[ghost + width].classList.contains('moveAlong') || cells[ghost + width].classList.contains('walls'))
      && !(cells[ghost - width].classList.contains('walls'))
    ) {

      //--
      cells[ghost - 1].classList.remove('moveAlong')
      cells[ghost + 1].classList.remove('moveAlong')
      cells[ghost - width].classList.remove('moveAlong')
      cells[ghost + width].classList.remove('moveAlong')
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add('moveAlong')
      ghost -= width
      cells[ghost].classList.add(string)

      // move downwards in a line
    } else if (cells[ghost].classList.contains(string)
      && (cells[ghost + 1].classList.contains('walls') || cells[ghost + 1].classList.contains('moveAlong'))
      && (cells[ghost - 1].classList.contains('walls') || cells[ghost - 1].classList.contains('moveAlong'))
      && (cells[ghost - width].classList.contains('moveAlong') || cells[ghost - width].classList.contains('walls'))
      && !(cells[ghost + width].classList.contains('walls'))
    ) {

      //--
      cells[ghost - 1].classList.remove('moveAlong')
      cells[ghost + 1].classList.remove('moveAlong')
      cells[ghost - width].classList.remove('moveAlong')
      cells[ghost + width].classList.remove('moveAlong')
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add('moveAlong')
      ghost += width
      cells[ghost].classList.add(string)

      // move left in a line
    } else if (cells[ghost].classList.contains(string)
      && (cells[ghost + width].classList.contains('walls') || cells[ghost + width].classList.contains('moveAlong'))
      && (cells[ghost - width].classList.contains('walls') || cells[ghost - width].classList.contains('moveAlong'))
      && (cells[ghost + 1].classList.contains('moveAlong') || cells[ghost + 1].classList.contains('walls'))
      && !(cells[ghost - 1].classList.contains('walls'))
    ) {

      //--
      cells[ghost - 1].classList.remove('moveAlong')
      cells[ghost + 1].classList.remove('moveAlong')
      cells[ghost - width].classList.remove('moveAlong')
      cells[ghost + width].classList.remove('moveAlong')
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add('moveAlong')
      ghost -= 1
      cells[ghost].classList.add(string)


      // move right in a line
    } else if (cells[ghost].classList.contains(string)
      && (cells[ghost + width].classList.contains('walls') || cells[ghost + width].classList.contains('moveAlong'))
      && (cells[ghost - width].classList.contains('walls') || cells[ghost - width].classList.contains('moveAlong'))
      && (cells[ghost - 1].classList.contains('moveAlong') || cells[ghost - 1].classList.contains('walls'))
      && !(cells[ghost + 1].classList.contains('walls'))
    ) {

      //--
      cells[ghost - 1].classList.remove('moveAlong')
      cells[ghost + 1].classList.remove('moveAlong')
      cells[ghost - width].classList.remove('moveAlong')
      cells[ghost + width].classList.remove('moveAlong')
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add('moveAlong')
      ghost += 1
      cells[ghost].classList.add(string)

      


      //-----TWO DIRECTIONS POSSIBLE----
      //--------------------------------

      //right blocked and top blocked rand 1 = go down
    } else if (cells[ghost].classList.contains(string)
      && (cells[ghost + 1].classList.contains('walls') || cells[ghost + 1].classList.contains('moveAlong'))
      && (cells[ghost - width].classList.contains('walls') || cells[ghost - width].classList.contains('moveAlong'))
      && randNum === 1) {
      //--
      cells[ghost - 1].classList.remove('moveAlong')
      cells[ghost + 1].classList.remove('moveAlong')
      cells[ghost - width].classList.remove('moveAlong')
      cells[ghost + width].classList.remove('moveAlong')
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add('moveAlong')
      ghost += width
      cells[ghost].classList.add(string)
    }

    //right blocked and top blocked rand 2 = go left
    else if (cells[ghost].classList.contains(string)
      && (cells[ghost + 1].classList.contains('walls') || cells[ghost + 1].classList.contains('moveAlong'))
      && (cells[ghost - width].classList.contains('walls') || cells[ghost - width].classList.contains('moveAlong'))
      && randNum === 2) {
      //--
      cells[ghost - 1].classList.remove('moveAlong')
      cells[ghost + 1].classList.remove('moveAlong')
      cells[ghost - width].classList.remove('moveAlong')
      cells[ghost + width].classList.remove('moveAlong')
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add('moveAlong')
      ghost -= 1
      cells[ghost].classList.add(string)
    }

    // If right is blocked and bottom is blocked + rand 1 = up
    else if (cells[ghost].classList.contains(string)
      && (cells[ghost + 1].classList.contains('walls') || cells[ghost + 1].classList.contains('moveAlong'))
      && (cells[ghost + width].classList.contains('walls') || cells[ghost + width].classList.contains('moveAlong'))
      && randNum === 1) {
      //--
      cells[ghost - 1].classList.remove('moveAlong')
      cells[ghost + 1].classList.remove('moveAlong')
      cells[ghost - width].classList.remove('moveAlong')
      cells[ghost + width].classList.remove('moveAlong')
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add('moveAlong')
      ghost -= width
      cells[ghost].classList.add(string)
    }

    // If right is blocked and bottom is blocked + rand 2 = left
    else if (cells[ghost].classList.contains(string)
      && (cells[ghost + 1].classList.contains('walls') || cells[ghost + 1].classList.contains('moveAlong'))
      && (cells[ghost + width].classList.contains('walls') || cells[ghost + width].classList.contains('moveAlong'))
      && randNum === 2) {
      //--
      cells[ghost - 1].classList.remove('moveAlong')
      cells[ghost + 1].classList.remove('moveAlong')
      cells[ghost - width].classList.remove('moveAlong')
      cells[ghost + width].classList.remove('moveAlong')
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add('moveAlong')
      ghost -= 1
      cells[ghost].classList.add(string)
    }

    // If left blocked and bottom is blocked + rand 1 = go up
    else if (cells[ghost].classList.contains(string)
      && (cells[ghost - 1].classList.contains('walls') || cells[ghost - 1].classList.contains('moveAlong'))
      && (cells[ghost + width].classList.contains('walls') || cells[ghost + width].classList.contains('moveAlong'))
      && randNum === 1) {
      //--
      cells[ghost - 1].classList.remove('moveAlong')
      cells[ghost + 1].classList.remove('moveAlong')
      cells[ghost - width].classList.remove('moveAlong')
      cells[ghost + width].classList.remove('moveAlong')
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add('moveAlong')
      ghost -= width
      cells[ghost].classList.add(string)
    }
    // If left blocked and bottom is blocked + rand 2 = go right
    else if (cells[ghost].classList.contains(string)
      && (cells[ghost - 1].classList.contains('walls') || cells[ghost - 1].classList.contains('moveAlong'))
      && (cells[ghost + width].classList.contains('walls') || cells[ghost + width].classList.contains('moveAlong'))
      && randNum === 2) {
      //--
      cells[ghost - 1].classList.remove('moveAlong')
      cells[ghost + 1].classList.remove('moveAlong')
      cells[ghost - width].classList.remove('moveAlong')
      cells[ghost + width].classList.remove('moveAlong')
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add('moveAlong')
      ghost += 1
      cells[ghost].classList.add(string)
    }


    // If left blocker and top blocked + rand 1 = go down

    else if (cells[ghost].classList.contains(string)
      && (cells[ghost - 1].classList.contains('walls') || cells[ghost - 1].classList.contains('moveAlong'))
      && (cells[ghost - width].classList.contains('walls') || cells[ghost - width].classList.contains('moveAlong'))
      && randNum === 1) {
      //--
      cells[ghost - 1].classList.remove('moveAlong')
      cells[ghost + 1].classList.remove('moveAlong')
      cells[ghost - width].classList.remove('moveAlong')
      cells[ghost + width].classList.remove('moveAlong')
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add('moveAlong')
      ghost += width
      cells[ghost].classList.add(string)
    }

    // If left blocked and top blaocked + rand 2 = go right
    else if (cells[ghost].classList.contains(string)
      && (cells[ghost - 1].classList.contains('walls') || cells[ghost - 1].classList.contains('moveAlong'))
      && (cells[ghost - width].classList.contains('walls') || cells[ghost - width].classList.contains('moveAlong'))
      && randNum === 2) {
      //--
      cells[ghost - 1].classList.remove('moveAlong')
      cells[ghost + 1].classList.remove('moveAlong')
      cells[ghost - width].classList.remove('moveAlong')
      cells[ghost + width].classList.remove('moveAlong')
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add('moveAlong')
      ghost += 1
      cells[ghost].classList.add(string)
    }


    //---- THREE DIRECTIONS POSSIBLE----
    //------------------------------------------

    // Top, bottom and left are empty - new rand 1(left)
    else if (cells[ghost].classList.contains(string)
      && !(cells[ghost - 1].classList.contains('walls') || cells[ghost - 1].classList.contains('moveAlong'))
      && !(cells[ghost + width].classList.contains('walls') || cells[ghost + width].classList.contains('moveAlong'))
      && !(cells[ghost - width].classList.contains('walls') || cells[ghost - width].classList.contains('moveAlong'))
      && newRandNum === 1) {
      //--
      cells[ghost - 1].classList.remove('moveAlong')
      cells[ghost + 1].classList.remove('moveAlong')
      cells[ghost - width].classList.remove('moveAlong')
      cells[ghost + width].classList.remove('moveAlong')
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add('moveAlong')
      ghost -= 1
      cells[ghost].classList.add(string)
    }

    // Top, bottom and left are empty - new rand 2 (bottom)
    else if (cells[ghost].classList.contains(string)
      && !(cells[ghost - 1].classList.contains('walls') || cells[ghost - 1].classList.contains('moveAlong'))
      && !(cells[ghost + width].classList.contains('walls') || cells[ghost + width].classList.contains('moveAlong'))
      && !(cells[ghost - width].classList.contains('walls') || cells[ghost - width].classList.contains('moveAlong'))
      && newRandNum === 2) {
      //--
      cells[ghost - 1].classList.remove('moveAlong')
      cells[ghost + 1].classList.remove('moveAlong')
      cells[ghost - width].classList.remove('moveAlong')
      cells[ghost + width].classList.remove('moveAlong')
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add('moveAlong')
      ghost += width
      cells[ghost].classList.add(string)
    }

    // Top, bottom and left are empty - new rand 3 (top)
    else if (cells[ghost].classList.contains(string)
      && !(cells[ghost - 1].classList.contains('walls') || cells[ghost - 1].classList.contains('moveAlong'))
      && !(cells[ghost + width].classList.contains('walls') || cells[ghost + width].classList.contains('moveAlong'))
      && !(cells[ghost - width].classList.contains('walls') || cells[ghost - width].classList.contains('moveAlong'))
      && newRandNum === 3) {
      //--
      cells[ghost - 1].classList.remove('moveAlong')
      cells[ghost + 1].classList.remove('moveAlong')
      cells[ghost - width].classList.remove('moveAlong')
      cells[ghost + width].classList.remove('moveAlong')
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add('moveAlong')
      ghost -= width
      cells[ghost].classList.add(string)
    }

    // Top, bottom and right are empty - new rand 1(right)
    else if (cells[ghost].classList.contains(string)
      && !(cells[ghost + 1].classList.contains('walls') || cells[ghost + 1].classList.contains('moveAlong'))
      && !(cells[ghost + width].classList.contains('walls') || cells[ghost + width].classList.contains('moveAlong'))
      && !(cells[ghost - width].classList.contains('walls') || cells[ghost - width].classList.contains('moveAlong'))
      && newRandNum === 1) {
      //--
      cells[ghost - 1].classList.remove('moveAlong')
      cells[ghost + 1].classList.remove('moveAlong')
      cells[ghost - width].classList.remove('moveAlong')
      cells[ghost + width].classList.remove('moveAlong')
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add('moveAlong')
      ghost += 1
      cells[ghost].classList.add(string)
    }

    // Top, bottom and right are empty -  new rand 2 (bottom)
    else if (cells[ghost].classList.contains(string)
      && !(cells[ghost + 1].classList.contains('walls') || cells[ghost + 1].classList.contains('moveAlong'))
      && !(cells[ghost + width].classList.contains('walls') || cells[ghost + width].classList.contains('moveAlong'))
      && !(cells[ghost - width].classList.contains('walls') || cells[ghost - width].classList.contains('moveAlong'))
      && newRandNum === 2) {
      //--
      cells[ghost - 1].classList.remove('moveAlong')
      cells[ghost + 1].classList.remove('moveAlong')
      cells[ghost - width].classList.remove('moveAlong')
      cells[ghost + width].classList.remove('moveAlong')
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add('moveAlong')
      ghost += width
      cells[ghost].classList.add(string)
    }

    // Top, bottom and right are empty - new rand 3 (up)
    else if (cells[ghost].classList.contains(string)
      && !(cells[ghost + 1].classList.contains('walls') || cells[ghost + 1].classList.contains('moveAlong'))
      && !(cells[ghost + width].classList.contains('walls') || cells[ghost + width].classList.contains('moveAlong'))
      && !(cells[ghost - width].classList.contains('walls') || cells[ghost - width].classList.contains('moveAlong'))
      && newRandNum === 3) {
      //--
      cells[ghost - 1].classList.remove('moveAlong')
      cells[ghost + 1].classList.remove('moveAlong')
      cells[ghost - width].classList.remove('moveAlong')
      cells[ghost + width].classList.remove('moveAlong')
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add('moveAlong')
      ghost -= width
      cells[ghost].classList.add(string)
    }

    // Bottom, right and left are empty - new rand 1(left)
    else if (cells[ghost].classList.contains(string)
      && !(cells[ghost + 1].classList.contains('walls') || cells[ghost + 1].classList.contains('moveAlong'))
      && !(cells[ghost + width].classList.contains('walls') || cells[ghost + width].classList.contains('moveAlong'))
      && !(cells[ghost - 1].classList.contains('walls') || cells[ghost - 1].classList.contains('moveAlong'))
      && newRandNum === 1) {
      //--
      cells[ghost - 1].classList.remove('moveAlong')
      cells[ghost + 1].classList.remove('moveAlong')
      cells[ghost - width].classList.remove('moveAlong')
      cells[ghost + width].classList.remove('moveAlong')
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add('moveAlong')
      ghost -= 1
      cells[ghost].classList.add(string)
    }


    // Bottom, right and left are empty -  new rand 2 (down)
    else if (cells[ghost].classList.contains(string)
      && !(cells[ghost + 1].classList.contains('walls') || cells[ghost + 1].classList.contains('moveAlong'))
      && !(cells[ghost + width].classList.contains('walls') || cells[ghost + width].classList.contains('moveAlong'))
      && !(cells[ghost - 1].classList.contains('walls') || cells[ghost - 1].classList.contains('moveAlong'))
      && newRandNum === 2) {
      //--
      cells[ghost - 1].classList.remove('moveAlong')
      cells[ghost + 1].classList.remove('moveAlong')
      cells[ghost - width].classList.remove('moveAlong')
      cells[ghost + width].classList.remove('moveAlong')
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add('moveAlong')
      ghost += width
      cells[ghost].classList.add(string)
    }
    // Bottom, right and left are empty -  new rand 3 (right)

    else if (cells[ghost].classList.contains(string)
      && !(cells[ghost + 1].classList.contains('walls') || cells[ghost + 1].classList.contains('moveAlong'))
      && !(cells[ghost + width].classList.contains('walls') || cells[ghost + width].classList.contains('moveAlong'))
      && !(cells[ghost - 1].classList.contains('walls') || cells[ghost - 1].classList.contains('moveAlong'))
      && newRandNum === 1) {
      //--
      cells[ghost - 1].classList.remove('moveAlong')
      cells[ghost + 1].classList.remove('moveAlong')
      cells[ghost - width].classList.remove('moveAlong')
      cells[ghost + width].classList.remove('moveAlong')
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add('moveAlong')
      ghost += 1
      cells[ghost].classList.add(string)
    }

    // Top, left and right are empty - new rand 1(left)

    else if (cells[ghost].classList.contains(string)
      && !(cells[ghost + 1].classList.contains('walls') || cells[ghost + 1].classList.contains('moveAlong'))
      && !(cells[ghost - width].classList.contains('walls') || cells[ghost - width].classList.contains('moveAlong'))
      && !(cells[ghost - 1].classList.contains('walls') || cells[ghost - 1].classList.contains('moveAlong'))
      && newRandNum === 1) {
      //--
      cells[ghost - 1].classList.remove('moveAlong')
      cells[ghost + 1].classList.remove('moveAlong')
      cells[ghost - width].classList.remove('moveAlong')
      cells[ghost + width].classList.remove('moveAlong')
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add('moveAlong')
      ghost -= 1
      cells[ghost].classList.add(string)
    }
    // Top, left and right are empty - new rand 2 (up)

    else if (cells[ghost].classList.contains(string)
      && !(cells[ghost + 1].classList.contains('walls') || cells[ghost + 1].classList.contains('moveAlong'))
      && !(cells[ghost - width].classList.contains('walls') || cells[ghost - width].classList.contains('moveAlong'))
      && !(cells[ghost - 1].classList.contains('walls') || cells[ghost - 1].classList.contains('moveAlong'))
      && newRandNum === 2) {
      //--
      cells[ghost - 1].classList.remove('moveAlong')
      cells[ghost + 1].classList.remove('moveAlong')
      cells[ghost - width].classList.remove('moveAlong')
      cells[ghost + width].classList.remove('moveAlong')
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add('moveAlong')
      ghost -= width
      cells[ghost].classList.add(string)
    }

    // Top, left and right are empty - new rand 3 (right)

    else if (cells[ghost].classList.contains(string)
      && !(cells[ghost + 1].classList.contains('walls') || cells[ghost + 1].classList.contains('moveAlong'))
      && !(cells[ghost - width].classList.contains('walls') || cells[ghost - width].classList.contains('moveAlong'))
      && !(cells[ghost - 1].classList.contains('walls') || cells[ghost - 1].classList.contains('moveAlong'))
      && newRandNum === 3) {
      //--
      cells[ghost - 1].classList.remove('moveAlong')
      cells[ghost + 1].classList.remove('moveAlong')
      cells[ghost - width].classList.remove('moveAlong')
      cells[ghost + width].classList.remove('moveAlong')
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add('moveAlong')
      ghost += 1
      cells[ghost].classList.add(string)
    }


    //---- STOP  GETTING STUCK IN CORNERS ----
    //----------------------------------------------
    // If right, top and left are blocked = go down
    else if (cells[ghost].classList.contains(string)
      && (cells[ghost + 1].classList.contains('walls') || cells[ghost + 1].classList.contains('moveAlong'))
      && (cells[ghost - width].classList.contains('walls') || cells[ghost - width].classList.contains('moveAlong'))
      && (cells[ghost - 1].classList.contains('walls') || cells[ghost - 1].classList.contains('moveAlong'))
      && cells[ghost + width].classList.contains('moveAlong')
    ) {
      //--
      cells[ghost - 1].classList.remove('moveAlong')
      cells[ghost + 1].classList.remove('moveAlong')
      cells[ghost - width].classList.remove('moveAlong')
      cells[ghost + width].classList.remove('moveAlong')
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add('moveAlong')
      ghost += width
      cells[ghost].classList.add(string)
    }


    // If right, bottom and left are blocked = go up

    else if (cells[ghost].classList.contains(string)
      && (cells[ghost + 1].classList.contains('walls') || cells[ghost + 1].classList.contains('moveAlong'))
      && (cells[ghost + width].classList.contains('walls') || cells[ghost + width].classList.contains('moveAlong'))
      && (cells[ghost - 1].classList.contains('walls') || cells[ghost - 1].classList.contains('moveAlong'))
      && cells[ghost - width].classList.contains('moveAlong')
    ) {
      //--
      cells[ghost - 1].classList.remove('moveAlong')
      cells[ghost + 1].classList.remove('moveAlong')
      cells[ghost - width].classList.remove('moveAlong')
      cells[ghost + width].classList.remove('moveAlong')
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add('moveAlong')
      ghost -= width
      cells[ghost].classList.add(string)
    }

    // If bottom, top and right are blocked = go left

    else if (cells[ghost].classList.contains(string)
      && (cells[ghost + 1].classList.contains('walls') || cells[ghost + 1].classList.contains('moveAlong'))
      && (cells[ghost - width].classList.contains('walls') || cells[ghost - width].classList.contains('moveAlong'))
      && (cells[ghost + width].classList.contains('walls') || cells[ghost + width].classList.contains('moveAlong'))
      && cells[ghost - 1].classList.contains('moveAlong')
    ) {
      //--
      cells[ghost - 1].classList.remove('moveAlong')
      cells[ghost + 1].classList.remove('moveAlong')
      cells[ghost - width].classList.remove('moveAlong')
      cells[ghost + width].classList.remove('moveAlong')
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add('moveAlong')
      ghost -= 1
      cells[ghost].classList.add(string)
    }
    // If bottom, top and left are blocked = go right

    else if (cells[ghost].classList.contains(string)
      && (cells[ghost - 1].classList.contains('walls') || cells[ghost - 1].classList.contains('moveAlong'))
      && (cells[ghost - width].classList.contains('walls') || cells[ghost - width].classList.contains('moveAlong'))
      && (cells[ghost + width].classList.contains('walls' || cells[ghost + width].classList.contains('moveAlong')))
      && cells[ghost + 1].classList.contains('moveAlong')
    ) {
      //--
      cells[ghost - 1].classList.remove('moveAlong')
      cells[ghost + 1].classList.remove('moveAlong')
      cells[ghost - width].classList.remove('moveAlong')
      cells[ghost + width].classList.remove('moveAlong')
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add('moveAlong')
      ghost += 1
      cells[ghost].classList.add(string)
    }

    // ---- random direction when reach up/down

    // if left is move along, right is wall move upwards in a line rand 1
    else if (cells[ghost].classList.contains(string)
      && cells[ghost - 1].classList.contains('moveAlong')
      && cells[ghost + 1].classList.contains('walls')
      && cells[ghost + width].classList.contains('notwalls')
      && cells[ghost - width].classList.contains('notwalls')
      && randNum === 1) {

      //--
      cells[ghost - 1].classList.remove('moveAlong')
      cells[ghost + 1].classList.remove('moveAlong')
      cells[ghost - width].classList.remove('moveAlong')
      cells[ghost + width].classList.remove('moveAlong')
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add('moveAlong')
      ghost -= width
      cells[ghost].classList.add(string)
    }
    // if left move along, right is wall move downward in a line rand 2
    else if (cells[ghost].classList.contains(string)
      && cells[ghost - 1].classList.contains('moveAlong')
      && cells[ghost + 1].classList.contains('walls')
      && cells[ghost + width].classList.contains('notwalls')
      && cells[ghost - width].classList.contains('notwalls')
      && randNum === 2) {

      //--
      cells[ghost - 1].classList.remove('moveAlong')
      cells[ghost + 1].classList.remove('moveAlong')
      cells[ghost - width].classList.remove('moveAlong')
      cells[ghost + width].classList.remove('moveAlong')
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add('moveAlong')
      ghost += width
      cells[ghost].classList.add(string)
    }
    // if right is move along, left wall move upwards in a line rand 1
    else if (cells[ghost].classList.contains(string)
      && cells[ghost + 1].classList.contains('moveAlong')
      && cells[ghost - 1].classList.contains('walls')
      && cells[ghost + width].classList.contains('notwalls')
      && cells[ghost - width].classList.contains('notwalls')
      && randNum === 1) {

      //--
      cells[ghost - 1].classList.remove('moveAlong')
      cells[ghost + 1].classList.remove('moveAlong')
      cells[ghost - width].classList.remove('moveAlong')
      cells[ghost + width].classList.remove('moveAlong')
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add('moveAlong')
      ghost -= width
      cells[ghost].classList.add(string)
    }
    // if right move along, move downward in a line rand 2
    else if (cells[ghost].classList.contains(string)
      && cells[ghost + 1].classList.contains('moveAlong')
      && cells[ghost - 1].classList.contains('walls')
      && cells[ghost + width].classList.contains('notwalls')
      && cells[ghost - width].classList.contains('notwalls')
      && randNum === 2) {

      //--
      cells[ghost - 1].classList.remove('moveAlong')
      cells[ghost + 1].classList.remove('moveAlong')
      cells[ghost - width].classList.remove('moveAlong')
      cells[ghost + width].classList.remove('moveAlong')
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add('moveAlong')
      ghost += width
      cells[ghost].classList.add(string)
    }
    // if top is move along, bottom wall move left in a line rand 1
    else if (cells[ghost].classList.contains(string)
      && cells[ghost - width].classList.contains('moveAlong')
      && cells[ghost + width].classList.contains('walls')
      && cells[ghost + 1].classList.contains('notwalls')
      && cells[ghost - 1].classList.contains('notwalls')
      && randNum === 1) {

      //--
      cells[ghost - 1].classList.remove('moveAlong')
      cells[ghost + 1].classList.remove('moveAlong')
      cells[ghost - width].classList.remove('moveAlong')
      cells[ghost + width].classList.remove('moveAlong')
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add('moveAlong')
      ghost -= 1
      cells[ghost].classList.add(string)
    }

    // if top move along, bottom wall, move right in a line rand 2
    else if (cells[ghost].classList.contains(string)
      && cells[ghost - width].classList.contains('moveAlong')
      && cells[ghost + width].classList.contains('walls')
      && cells[ghost + 1].classList.contains('notwalls')
      && cells[ghost - 1].classList.contains('notwalls')
      && randNum === 2) {

      //--
      cells[ghost - 1].classList.remove('moveAlong')
      cells[ghost + 1].classList.remove('moveAlong')
      cells[ghost - width].classList.remove('moveAlong')
      cells[ghost + width].classList.remove('moveAlong')
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add('moveAlong')
      ghost += 1
      cells[ghost].classList.add(string)
    }

    // if bottom is move along, top wall move left in a line rand 1
    else if (cells[ghost].classList.contains(string)
      && cells[ghost + width].classList.contains('moveAlong')
      && cells[ghost - width].classList.contains('walls')
      && cells[ghost + 1].classList.contains('notwalls')
      && cells[ghost - 1].classList.contains('notwalls')
      && randNum === 1) {

      //--
      cells[ghost - 1].classList.remove('moveAlong')
      cells[ghost + 1].classList.remove('moveAlong')
      cells[ghost - width].classList.remove('moveAlong')
      cells[ghost + width].classList.remove('moveAlong')
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add('moveAlong')
      ghost -= 1
      cells[ghost].classList.add(string)
    }
    // if bottom move along, top wall, move right in a line rand 2
    else if (cells[ghost].classList.contains(string)
      && cells[ghost + width].classList.contains('moveAlong')
      && cells[ghost - width].classList.contains('walls')
      && cells[ghost + 1].classList.contains('notwalls')
      && cells[ghost - 1].classList.contains('notwalls')
      && randNum === 1) {

      //--
      cells[ghost - 1].classList.remove('moveAlong')
      cells[ghost + 1].classList.remove('moveAlong')
      cells[ghost - width].classList.remove('moveAlong')
      cells[ghost + width].classList.remove('moveAlong')
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add('moveAlong')
      ghost += 1
      cells[ghost].classList.add(string)
    }




    if (greyMode === true) {
      cells[ghost].classList.add('greyGhost')
    }
  }, 400)

  //===============================
  //===============================


}



