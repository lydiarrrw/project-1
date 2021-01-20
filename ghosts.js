function startGhost(ghost, string) {
  // Add ghouls
  cells[ghost].classList.remove(string)
  //ghost move?
  cells[ghost].classList.add(string)

 


  // GHOUL MOVEMENT

  const ghostsMoves = setInterval(() => {
    const randNum = Math.floor((Math.random() * 2) + 1)
    //console.log(randNum + 'original number')

    const newRandNum = Math.floor((Math.random() * 3) + 1)
    //console.log(newRandNum + 'new number')

    if (cells[ghost].classList.contains('greyGhost')
      && cells[ghost].classList.contains('pacman')) {
      console.log('grey ghost mode')
      cells[ghost].classList.remove('greyGhost')
      ghost = number
      cells[ghost].classList.add(string)
    }


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
      }, 1000)

      clearInterval(ghostsMoves)

    }

    else if (lives === 0) {
      document.addEventListener('keydown', (event))
    }




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
      && (cells[ghost - width].classList.contains('walls') || cells[ghost + width].classList.contains('moveAlong'))
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



    // ===== GREY GHOST START

    //--------MOVE IN A LINE --------
    //-----------------------------
    // move upwards in a line
    else if (cells[ghost].classList.contains('greyGhost')
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
      cells[ghost].classList.remove('greyGhost')
      cells[ghost].classList.add('moveAlong')
      ghost -= width
      cells[ghost].classList.add('greyGhost')

      // move downwards in a line
    } else if (cells[ghost].classList.contains('greyGhost')
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
      cells[ghost].classList.remove('greyGhost')
      cells[ghost].classList.add('moveAlong')
      ghost += width
      cells[ghost].classList.add('greyGhost')

      // move left in a line
    } else if (cells[ghost].classList.contains('greyGhost')
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
      cells[ghost].classList.remove('greyGhost')
      cells[ghost].classList.add('moveAlong')
      ghost -= 1
      cells[ghost].classList.add('greyGhost')


      // move right in a line
    } else if (cells[ghost].classList.contains('greyGhost')
      && (cells[ghost + width].classList.contains('walls') || cells[ghost + width].classList.contains('moveAlong'))
      && (cells[ghost - width].classList.contains('walls') || cells[ghost + width].classList.contains('moveAlong'))
      && (cells[ghost - 1].classList.contains('moveAlong') || cells[ghost - 1].classList.contains('walls'))
      && !(cells[ghost + 1].classList.contains('walls'))
    ) {

      //--
      cells[ghost - 1].classList.remove('moveAlong')
      cells[ghost + 1].classList.remove('moveAlong')
      cells[ghost - width].classList.remove('moveAlong')
      cells[ghost + width].classList.remove('moveAlong')
      //---
      cells[ghost].classList.remove('greyGhost')
      cells[ghost].classList.add('moveAlong')
      ghost += 1
      cells[ghost].classList.add('greyGhost')


      //-----TWO DIRECTIONS POSSIBLE----
      //--------------------------------

      //right blocked and top blocked rand 1 = go down
    } else if (cells[ghost].classList.contains('greyGhost')
      && (cells[ghost + 1].classList.contains('walls') || cells[ghost + 1].classList.contains('moveAlong'))
      && (cells[ghost - width].classList.contains('walls') || cells[ghost - width].classList.contains('moveAlong'))
      && randNum === 1) {
      //--
      cells[ghost - 1].classList.remove('moveAlong')
      cells[ghost + 1].classList.remove('moveAlong')
      cells[ghost - width].classList.remove('moveAlong')
      cells[ghost + width].classList.remove('moveAlong')
      //---
      cells[ghost].classList.remove('greyGhost')
      cells[ghost].classList.add('moveAlong')
      ghost += width
      cells[ghost].classList.add('greyGhost')
    }

    //right blocked and top blocked rand 2 = go left
    else if (cells[ghost].classList.contains('greyGhost')
      && (cells[ghost + 1].classList.contains('walls') || cells[ghost + 1].classList.contains('moveAlong'))
      && (cells[ghost - width].classList.contains('walls') || cells[ghost - width].classList.contains('moveAlong'))
      && randNum === 2) {
      //--
      cells[ghost - 1].classList.remove('moveAlong')
      cells[ghost + 1].classList.remove('moveAlong')
      cells[ghost - width].classList.remove('moveAlong')
      cells[ghost + width].classList.remove('moveAlong')
      //---
      cells[ghost].classList.remove('greyGhost')
      cells[ghost].classList.add('moveAlong')
      ghost -= 1
      cells[ghost].classList.add('greyGhost')
    }

    // If right is blocked and bottom is blocked + rand 1 = up
    else if (cells[ghost].classList.contains('greyGhost')
      && (cells[ghost + 1].classList.contains('walls') || cells[ghost + 1].classList.contains('moveAlong'))
      && (cells[ghost + width].classList.contains('walls') || cells[ghost + width].classList.contains('moveAlong'))
      && randNum === 1) {
      //--
      cells[ghost - 1].classList.remove('moveAlong')
      cells[ghost + 1].classList.remove('moveAlong')
      cells[ghost - width].classList.remove('moveAlong')
      cells[ghost + width].classList.remove('moveAlong')
      //---
      cells[ghost].classList.remove('greyGhost')
      cells[ghost].classList.add('moveAlong')
      ghost -= width
      cells[ghost].classList.add('greyGhost')
    }

    // If right is blocked and bottom is blocked + rand 2 = left
    else if (cells[ghost].classList.contains('greyGhost')
      && (cells[ghost + 1].classList.contains('walls') || cells[ghost + 1].classList.contains('moveAlong'))
      && (cells[ghost + width].classList.contains('walls') || cells[ghost + width].classList.contains('moveAlong'))
      && randNum === 2) {
      //--
      cells[ghost - 1].classList.remove('moveAlong')
      cells[ghost + 1].classList.remove('moveAlong')
      cells[ghost - width].classList.remove('moveAlong')
      cells[ghost + width].classList.remove('moveAlong')
      //---
      cells[ghost].classList.remove('greyGhost')
      cells[ghost].classList.add('moveAlong')
      ghost -= 1
      cells[ghost].classList.add('greyGhost')
    }

    // If left blocked and bottom is blocked + rand 1 = go up
    else if (cells[ghost].classList.contains('greyGhost')
      && (cells[ghost - 1].classList.contains('walls') || cells[ghost - 1].classList.contains('moveAlong'))
      && (cells[ghost + width].classList.contains('walls') || cells[ghost + width].classList.contains('moveAlong'))
      && randNum === 1) {
      //--
      cells[ghost - 1].classList.remove('moveAlong')
      cells[ghost + 1].classList.remove('moveAlong')
      cells[ghost - width].classList.remove('moveAlong')
      cells[ghost + width].classList.remove('moveAlong')
      //---
      cells[ghost].classList.remove('greyGhost')
      cells[ghost].classList.add('moveAlong')
      ghost -= width
      cells[ghost].classList.add('greyGhost')
    }
    // If left blocked and bottom is blocked + rand 2 = go right
    else if (cells[ghost].classList.contains('greyGhost')
      && (cells[ghost - 1].classList.contains('walls') || cells[ghost - 1].classList.contains('moveAlong'))
      && (cells[ghost + width].classList.contains('walls') || cells[ghost + width].classList.contains('moveAlong'))
      && randNum === 2) {
      //--
      cells[ghost - 1].classList.remove('moveAlong')
      cells[ghost + 1].classList.remove('moveAlong')
      cells[ghost - width].classList.remove('moveAlong')
      cells[ghost + width].classList.remove('moveAlong')
      //---
      cells[ghost].classList.remove('greyGhost')
      cells[ghost].classList.add('moveAlong')
      ghost += 1
      cells[ghost].classList.add('greyGhost')
    }


    // If left blocker and top blocked + rand 1 = go down

    else if (cells[ghost].classList.contains('greyGhost')
      && (cells[ghost - 1].classList.contains('walls') || cells[ghost - 1].classList.contains('moveAlong'))
      && (cells[ghost - width].classList.contains('walls') || cells[ghost - width].classList.contains('moveAlong'))
      && randNum === 1) {
      //--
      cells[ghost - 1].classList.remove('moveAlong')
      cells[ghost + 1].classList.remove('moveAlong')
      cells[ghost - width].classList.remove('moveAlong')
      cells[ghost + width].classList.remove('moveAlong')
      //---
      cells[ghost].classList.remove('greyGhost')
      cells[ghost].classList.add('moveAlong')
      ghost += width
      cells[ghost].classList.add('greyGhost')
    }

    // If left blocked and top blaocked + rand 2 = go right
    else if (cells[ghost].classList.contains('greyGhost')
      && (cells[ghost - 1].classList.contains('walls') || cells[ghost - 1].classList.contains('moveAlong'))
      && (cells[ghost - width].classList.contains('walls') || cells[ghost - width].classList.contains('moveAlong'))
      && randNum === 2) {
      //--
      cells[ghost - 1].classList.remove('moveAlong')
      cells[ghost + 1].classList.remove('moveAlong')
      cells[ghost - width].classList.remove('moveAlong')
      cells[ghost + width].classList.remove('moveAlong')
      //---
      cells[ghost].classList.remove('greyGhost')
      cells[ghost].classList.add('moveAlong')
      ghost += 1
      cells[ghost].classList.add('greyGhost')
    }


    //---- THREE DIRECTIONS POSSIBLE----
    //------------------------------------------

    // Top, bottom and left are empty - new rand 1(left)
    else if (cells[ghost].classList.contains('greyGhost')
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
      cells[ghost].classList.remove('greyGhost')
      cells[ghost].classList.add('moveAlong')
      ghost -= 1
      cells[ghost].classList.add('greyGhost')
    }

    // Top, bottom and left are empty - new rand 2 (bottom)
    else if (cells[ghost].classList.contains('greyGhost')
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
      cells[ghost].classList.remove('greyGhost')
      cells[ghost].classList.add('moveAlong')
      ghost += width
      cells[ghost].classList.add('greyGhost')
    }

    // Top, bottom and left are empty - new rand 3 (top)
    else if (cells[ghost].classList.contains('greyGhost')
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
      cells[ghost].classList.remove('greyGhost')
      cells[ghost].classList.add('moveAlong')
      ghost -= width
      cells[ghost].classList.add('greyGhost')
    }

    // Top, bottom and right are empty - new rand 1(right)
    else if (cells[ghost].classList.contains('greyGhost')
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
      cells[ghost].classList.remove('greyGhost')
      cells[ghost].classList.add('moveAlong')
      ghost += 1
      cells[ghost].classList.add('greyGhost')
    }

    // Top, bottom and right are empty -  new rand 2 (bottom)
    else if (cells[ghost].classList.contains('greyGhost')
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
      cells[ghost].classList.remove('greyGhost')
      cells[ghost].classList.add('moveAlong')
      ghost += width
      cells[ghost].classList.add('greyGhost')
    }

    // Top, bottom and right are empty - new rand 3 (up)
    else if (cells[ghost].classList.contains('greyGhost')
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
      cells[ghost].classList.remove('greyGhost')
      cells[ghost].classList.add('moveAlong')
      ghost -= width
      cells[ghost].classList.add('greyGhost')
    }

    // Bottom, right and left are empty - new rand 1(left)
    else if (cells[ghost].classList.contains('greyGhost')
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
      cells[ghost].classList.remove('greyGhost')
      cells[ghost].classList.add('moveAlong')
      ghost -= 1
      cells[ghost].classList.add('greyGhost')
    }


    // Bottom, right and left are empty -  new rand 2 (down)
    else if (cells[ghost].classList.contains('greyGhost')
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
      cells[ghost].classList.remove('greyGhost')
      cells[ghost].classList.add('moveAlong')
      ghost += width
      cells[ghost].classList.add('greyGhost')
    }
    // Bottom, right and left are empty -  new rand 3 (right)

    else if (cells[ghost].classList.contains('greyGhost')
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
      cells[ghost].classList.remove('greyGhost')
      cells[ghost].classList.add('moveAlong')
      ghost += 1
      cells[ghost].classList.add('greyGhost')
    }

    // Top, left and right are empty - new rand 1(left)

    else if (cells[ghost].classList.contains('greyGhost')
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
      cells[ghost].classList.remove('greyGhost')
      cells[ghost].classList.add('moveAlong')
      ghost -= 1
      cells[ghost].classList.add('greyGhost')
    }
    // Top, left and right are empty - new rand 2 (up)

    else if (cells[ghost].classList.contains('greyGhost')
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
      cells[ghost].classList.remove('greyGhost')
      cells[ghost].classList.add('moveAlong')
      ghost -= width
      cells[ghost].classList.add('greyGhost')
    }

    // Top, left and right are empty - new rand 3 (right)

    else if (cells[ghost].classList.contains('greyGhost')
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
      cells[ghost].classList.remove('greyGhost')
      cells[ghost].classList.add('moveAlong')
      ghost += 1
      cells[ghost].classList.add('greyGhost')
    }


    //---- STOP  GETTING STUCK IN CORNERS ----
    //----------------------------------------------
    // If right, top and left are blocked = go down
    else if (cells[ghost].classList.contains('greyGhost')
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
      cells[ghost].classList.remove('greyGhost')
      cells[ghost].classList.add('moveAlong')
      ghost += width
      cells[ghost].classList.add('greyGhost')
    }


    // If right, bottom and left are blocked = go up

    else if (cells[ghost].classList.contains('greyGhost')
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
      cells[ghost].classList.remove('greyGhost')
      cells[ghost].classList.add('moveAlong')
      ghost -= width
      cells[ghost].classList.add('greyGhost')
    }

    // If bottom, top and right are blocked = go left

    else if (cells[ghost].classList.contains('greyGhost')
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
      cells[ghost].classList.remove('greyGhost')
      cells[ghost].classList.add('moveAlong')
      ghost -= 1
      cells[ghost].classList.add('greyGhost')
    }
    // If bottom, top and left are blocked = go right

    else if (cells[ghost].classList.contains('greyGhost')
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
      cells[ghost].classList.remove('greyGhost')
      cells[ghost].classList.add('moveAlong')
      ghost += 1
      cells[ghost].classList.add('greyGhost')
    }

    // ---- random direction when reach up/down

    // if left is move along, right is wall move upwards in a line rand 1
    else if (cells[ghost].classList.contains('greyGhost')
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
      cells[ghost].classList.remove('greyGhost')
      cells[ghost].classList.add('moveAlong')
      ghost -= width
      cells[ghost].classList.add('greyGhost')
    }
    // if left move along, right is wall move downward in a line rand 2
    else if (cells[ghost].classList.contains('greyGhost')
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
      cells[ghost].classList.remove('greyGhost')
      cells[ghost].classList.add('moveAlong')
      ghost += width
      cells[ghost].classList.add('greyGhost')
    }
    // if right is move along, left wall move upwards in a line rand 1
    else if (cells[ghost].classList.contains('greyGhost')
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
      cells[ghost].classList.remove('greyGhost')
      cells[ghost].classList.add('moveAlong')
      ghost -= width
      cells[ghost].classList.add('greyGhost')
    }
    // if right move along, move downward in a line rand 2
    else if (cells[ghost].classList.contains('greyGhost')
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
      cells[ghost].classList.remove('greyGhost')
      cells[ghost].classList.add('moveAlong')
      ghost += width
      cells[ghost].classList.add('greyGhost')
    }
    // if top is move along, bottom wall move left in a line rand 1
    else if (cells[ghost].classList.contains('greyGhost')
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
      cells[ghost].classList.remove('greyGhost')
      cells[ghost].classList.add('moveAlong')
      ghost -= 1
      cells[ghost].classList.add('greyGhost')
    }

    // if top move along, bottom wall, move right in a line rand 2
    else if (cells[ghost].classList.contains('greyGhost')
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
      cells[ghost].classList.remove('greyGhost')
      cells[ghost].classList.add('moveAlong')
      ghost += 1
      cells[ghost].classList.add('greyGhost')
    }

    // if bottom is move along, top wall move left in a line rand 1
    else if (cells[ghost].classList.contains('greyGhost')
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
      cells[ghost].classList.remove('greyGhost')
      cells[ghost].classList.add('moveAlong')
      ghost -= 1
      cells[ghost].classList.add('greyGhost')
    }
    // if bottom move along, top wall, move right in a line rand 2
    else if (cells[ghost].classList.contains('greyGhost')
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
      cells[ghost].classList.remove('greyGhost')
      cells[ghost].classList.add('moveAlong')
      ghost += 1
      cells[ghost].classList.add('greyGhost')
    }

    //======= END GREY GHOST ======

  }, 400)

  //===============================
  //===============================


}