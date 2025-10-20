// --------------------
// Part 2: Functions
// --------------------

// Global variable
let animationCount = 0;

// Function with parameters and return value
function calculateRotation(speed, baseAngle) {
  return speed * baseAngle;
}

// Function with local scope
function startAnimation() {
  let localSpeed = 2;
  const angle = calculateRotation(localSpeed, 45);
  console.log(`Animation rotation: ${angle} degrees`);
}

startAnimation(); // call the function


// --------------------
// Part 3: Combining CSS + JS
// --------------------

const animateBtn = document.getElementById("animateBtn");
const box = document.getElementById("box");

// Function to toggle animation via class
function toggleAnimation() {
  animationCount++;
  box.classList.toggle("animate");
  console.log(`Animation triggered ${animationCount} times`);
}

// Event listener
animateBtn.addEventListener("click", toggleAnimation);
