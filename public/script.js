const puzzles = [
  {
    setup:
      "There was a cook who always makes the perfect meal for the mansion, yet he never gets to eat his own food? Why?",
    solution:
      "The master’s favorite food was carrot, which the chef was allergic to, so he never ate the food he made in this mansion.",
  },
];

const evaluationPrompt = (setup, solution, userInput) =>
  `
  You are an AI assisting in a puzzle game. 
  you speaks in a calm, thoughtful manner, often using metaphors.

  The current puzzle for the player to guess is: ${setup}
  The answer is: ${solution}
  
  You should respond to the player’s guesses with only "yes", "no", or "doesn't relate".
  If the player ask something unrelated to the puzzle say "doesn't relate"
  If the player answers correctly say: That's Correct!  

  Allow misspellings.
  Be a easy judge on the player's answer.

  player's current guess is: ${userInput}
`;

const evaEnding = "\nPress 'Ready to Guess' button to enter your final answer!\n"

let currentPuzzleIndex = 0;

const loadPuzzle = function() {
  if (currentPuzzleIndex >= puzzles.length) {
    this.echo("")
    this.echo(evaEnding);
    return; // End the session or handle it as needed
  }

  const puzzle = puzzles[currentPuzzleIndex];
  this.echo("");
  // this.echo(puzzle.setup);

  playPuzzle.bind(this)(puzzle).then(() => {
    // After solving a puzzle, ask if the user wants to continue
    this.echo("");
    this.push(function(command) {
      if (command.match(/yes|y/i)) {
        currentPuzzleIndex++; // Move to the next puzzle
        this.pop(); // Remove this prompt from the stack
        loadPuzzle.call(this); // Call loadPuzzle in the context of the terminal
      } else if (command.match(/no|n/i)) {
        this.echo(evaEnding);
        this.pop(); 
      } else {
        this.echo("Please enter yes or no.(y/n)");
      }
    }, {
        prompt: 'Are you ready for entering your final answer? (y/n) > '
    });
  });
};

// ---------- TERMINAL ---------- //
// ---------- TERMINAL ---------- //
// ---------- TERMINAL ---------- //
// ---------- TERMINAL ---------- //
// ---------- TERMINAL ---------- //

$('#commandDiv').terminal({
  start: async function () {
    // this.echo("");
    loadPuzzle.call(this);
  },

}, {
  greetings: `
Game Rule: 
  * I will present a scenario.
  * Your goal is to solve the puzzle by using the clues in the scenario and asking me questions.
  * You can ask me any question related to the scenario, but I can only answer with "Yes," "No," or "Doesn't relate."
  
With the rule stated.. let's start :)

to start, please type start
  `});

// ---------- TERMINAL ---------- //
// ---------- TERMINAL ---------- //
// ---------- TERMINAL ---------- //
// ---------- TERMINAL ---------- //
// ---------- TERMINAL ---------- //

function toggleCommandDivVisibility() {
  const commandDiv = document.getElementById('commandDiv');
  if (showInputUI) {
    commandDiv.style.display = 'block'; // Show the div
  } else {
    commandDiv.style.display = 'none'; // Hide the div
  }
}

showInputUI = false
toggleCommandDivVisibility();

// ---------- GPT ---------- //
// ---------- GPT ---------- //
// ---------- GPT ---------- //
// ---------- GPT ---------- //
// ---------- GPT ---------- //

async function playPuzzle(puzzle) {
  // this.echo("");
  this.echo(puzzle.setup);
  this.echo("");
  this.echo(`Ask any question related to the scenario`);
  this.echo("");

  const terminal = this;

  // Main player QA loop, adapted for jQuery Terminal
  while (true) {
    const userInput = await new Promise((resolve) => {
      terminal.push(function(input) {
        resolve(input);
      }, {
        prompt: '> '
      });
    });

    // Pass the current puzzle's setup and solution along with the user input
    const aiResponse = await requestGPT(userInput, puzzle.setup, puzzle.solution);

    terminal.echo(`
Eva
  ${aiResponse}

    `);

    if (aiResponse.trim() === "That's Correct!") {
      terminal.pop();
      break;
    }
  }
}

async function requestGPT(input, setup, solution) {
  console.log(`--requestGPT started --input: ${input}`);

  // Use the evaluationPrompt function to create a prompt for the GPT model
  const prompt = evaluationPrompt(setup, solution, input);

  // Make the POST request with the corrected payload
  const response = await fetch('/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ input: prompt }) // Corrected here
  });

  if (response.ok) {
    console.log("--GPT response OK");
    const jsonData = await response.json();
    const gptResponse = jsonData.gpt; // Assuming the backend returns the GPT response under a "gpt" key
    console.log(gptResponse);
    return gptResponse;
  } else {
    console.error("Error in submitting data.");
    return "Error in submitting data.";
  }
}
