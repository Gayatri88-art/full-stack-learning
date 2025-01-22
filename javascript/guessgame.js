const max = parseInt(prompt("Enter the max number:")); // Parse max as an integer
const random = Math.floor(Math.random() * max) + 1; // Generate a random number between 1 and max
let guess = prompt("Guess the number (or type 'quit' to exit):");

while (true) {
  if (guess.toLowerCase() === "quit") { // Check if user wants to quit
    console.log("User quit the game.");
    break;
  }

  guess = parseInt(guess); // Convert the guess to a number for comparison

  if (isNaN(guess)) { // Validate input is a number
    guess = prompt("Invalid input. Please enter a number (or type 'quit' to exit):");
    continue;
  }

  if (guess === random) { // Check if the guess matches the random number
    console.log(`Congrats! Your guess is correct. The random number was ${random}.`);
    break;
  } else if (guess < random) {
    guess = prompt("Hint: Your guess was too small, please try again:");
  } else {
    guess = prompt("Hint: Your guess was too large, please try again:");
  }
}
