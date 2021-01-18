

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