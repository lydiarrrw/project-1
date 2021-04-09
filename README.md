
![](images/GA-logo.png)
# Project 1 - **ROSH-MAN**

## **Overview**

This was the first project of the Software Engineering Immersive course with GA. It was a challenging and fun one-week solo project that really helped consolidate the first few weeks of class content.

Given a list of game options to recreate, I chose Pac-Man to challenge myself.

You can find a deployed version here: [ROSHMAN](https://lydiarrrw.github.io/project-1/)

## The Brief

* The player should be able to clear at least one board
* The player's score should be displayed at the end of the game
* Responsive design (stretch goal)
 
## Technologies used

* JavaScript
* CSS
* HTML
* Git and GitHub


## Approach
Before beginning to write any code, I mapped the game out, including all the interactions and outcomes I'd need to consider.

### Layout of grid

I created grid as an array of cells, with classes applied to the cells which would be the walls of the maze, and those which would not.

To plan this, I created a numbered grid in Google Sheets with corresponding numbers so I could select those which were 'walls', with the others by default, becoming cells that ROSH-MAN and the ghosts could 'move around in'.

![](./grid.png)

When creating the grid, I also added classes of 'food' and 'energizer'.

This approach allowed me to navigate the grid using -1, +1, -width or +width.

Code for the grid:

```
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

```

### Ghost movement

My inital approach to ghost movement was to generate and use random numbers to randomise the direction the ghosts moved. This proved problematic though as the ghost's behaviour was too random, especially when it could move along in a straight line, as per traditional versions of Pac-Man.

To overcome this, I added a class called 'moveAlong'. This class is added to every cell the ghost goes in, then is removed when as the ghost class is moved to the next cell.

This approach gives the ghost a smoother path around the board, but still keeps it's movement somewhat random.

With this method, I encountered using this method was that I initally used one 'moveAlong' class, and this caused the ghosts to get stuck if they passed over each other. I fixed this bug by having individual 'moveAlong' classes so they wouldn't clash with each other.

![](./roshmangif.gif)

### Collisions

**Detecting**

There are checks in place for when ROSH-MAN and a ghost collide, this is when the class for pacman and the ghost class are on the same cell, and sends them back to their original positions.

**Timing** 🐜 🐛 🕷

The timing of the player and that of the ghost movement don't match so the player can 'skip' the ghost. I could improve this by creating a class, which is applied to the cells surrounding the ghost and would be counted as a collision.

### Grey ghost mode

When ROSH-MAN lands on an energizer, the ghosts go into grey mode for a set period of time. To do this, I used a boolean to check if they were in 'greyMode', adding this class on the cell that have the variable of the ghosts, and removing the original ghost class. A timeout then removes this class after a certain period of time:

```
    if (greyMode === true) {
      cells[ghost].classList.add('greyGhost')
    }
  }, 350)
```

The grey ghost class is set to interact with the pacman class in a different way, but to have the same movement as a normal ghost.

### Game over

The game ends when either the lives equal 0 or when the food and energizer counts are at 0. Here is the function for the game over:

```

function gameover() {
  if (lives === 0) {
    winner.innerHTML = `The ghosts beat you! Your score is ${score}`
    //console.log('loser')
    cells[pacman].classList.remove('pacman')
    livesLeft.innerHTML = lives
    grid.classList.remove('grid')
    grid.classList.add('hidegrid')
    result.classList.add('roshman')
  } else if (foodCount === 0
    && energizerCount === 0) {
    cells[pacman].classList.remove('pacman')
    winner.innerHTML = `You win! Your score is ${score}`
    grid.classList.remove('grid')
    grid.classList.add('hidegrid')
    result.classList.add('roshmanwins')
    //console.log('winner') 
  }
}
```

The game over message is a class which is hidden when either of those is not true.

![](./gameover.png)

### Stretch goal

A stretch goal for this project was to make the game responsive and mobile friendly. The game is mobile friendly, although the control buttons were an issue for clicking on multiple times, as this would make the browser automatically zoom in.

The first solution to this that I found was using the following: ` <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' > `

Following some further research, I found that this has been phased out of use due to it preventing accessibility - as it prevents users from zooming in.

For ROSH-MAN, I used `touch action: none` in the CSS to prevent the zooming. This will be something I will look into further as I would like to find a way to overcome the zoom issue, but still allow some users to zoom where needed.

## Improvements to be made and things I learnt

* Refactor my code more - I was able to create a function to save repeated code within the ghost movement function however within that function, there are repeated sections that I could refactor further.
* Alongside the point above, I would consider how my code could be slicker from the start. For example, I wrote the code to move a ghost around the grid and it worked. But when I came to apply this to all ghosts, and cut down on the lines of code, it broke what I had written. I learnt that I need to consider this from the start!
* I had a lot of variables and classes called 'ghost' or variants of this. For future projects I will plan the names of these carefully as it did get a little confusing at times.
* Accessibility - I would would work on the zooming issue I mentioned in the 'Stretch Goal' section.


## Artwork and fonts
* The ghosts, and inspiration for theme, are from a ghost drawn by Roshan, my friend's 6 year-old nephew.
* ROSH-MAN is a Memoji created on an iPhone.
* The font family is from Google Fonts are part of the Bungee family.



