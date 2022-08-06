// add a button that asks a prompt to the user asking for the number of squares per side for the grid
const buttonContainer = document.getElementById('buttonDiv');
const buttonGrid = document.createElement('button');
buttonGrid.textContent = 'Set Size of Grid';
buttonContainer.append(buttonGrid);

// give the button an onclick function with the prompt function
buttonGrid.addEventListener('click', gridPrompt);

// create the base grid
makeRowsAndColumns(16, 16);


// create a function for the button prompt and limit the range from 1 to 100
function limitNumberWithinRange(num, min, max){
  // declare variables for the function to use for the prompt
  const MIN = min || 1;
  const MAX = max || 100;
  const parsed = parseInt(num)
  return Math.min(Math.max(parsed, MIN), MAX)
}

// make function to clear everything before making a new grid
function removeGrid() {
  // select the container to declare the item variable in
  const item = document.querySelector('.gridContainer')
  // use a while loop to remove all children from an element
  while (item.firstChild) {
    item.removeChild(item.firstChild)
  }
};

// call the function with a prompt to set the size of a new grid and replaces the preexisting one
function gridPrompt() {
  removeGrid();

  let userNumber = limitNumberWithinRange(prompt('Type in a number up to 100 for the size of your grid!'));

  // call the function to make the grid
  makeRowsAndColumns(userNumber, userNumber);
};

// create a loop to create a 16x16 grid of divs
function makeRowsAndColumns(rows, cols) {
  // grab element class of div in html
  const divContainer = document.getElementsByClassName('gridContainer')[0];
  // give the rows and columns the corresponding properties
  divContainer.style.setProperty('--grid-rows', rows);
  divContainer.style.setProperty('--grid-cols', cols);
  // loop the creation of rows of columns and rows, name them with a number, and append a class name to them
  for (let i = 0; i < (rows * cols); i++) {
  const block = document.createElement('div');
    //block.textContent = (i + 1);
    divContainer.appendChild(block).className = 'grid-item'
  };

// declare a variable and select them with querySelectorAll
const grid = document.querySelectorAll('.grid-item');



// add an eventlistener to each div with a loop and the index [i], with each mouseover adding the .class in CSS
for (let i = 0; i < grid.length; i++) {
  grid[i].addEventListener('mouseover', () => {
    // use the below line for just one color: edit class in css
    //grid[i].classList.add('Color');
    // applied a random color to the background to everyone index [i]
    grid[i].style.backgroundColor = "#" + ((1<<24)*Math.random() | 0).toString(16)
});
};
};

// create button to restart
const restartButton = document.createElement('button');
restartButton.textContent = 'Restart';
buttonContainer.append(restartButton);
restartButton.onclick = restart;
function restart(){
  window.location.reload();
};


