alert("Welcome To SUmmer Trainninng")

const technology = prompt("Multiple Technologies :\n 1. Web Development\n 2. AIML\n 3. DATA SCIENCE\n 4. LLM\n 5. Communication");

let isWant = false;

if (technology == 1) {
    isWant = confirm(`You Want To start Web Development?`)
} else if (technology == 2) {
    isWant = confirm(`You Want To start AIML?`)
} else if (technology == 3) {
    isWant = confirm(`You Want To start DATA SCIENCE?`)
} else if (technology == 4) {
    isWant = confirm(`You Want To start LLM?`)
} else if (technology == 5) {
    isWant = confirm(`You Want To start Communication?`)
}

if (isWant) alert("Welcome to Training")
else alert("haha")

const name = "Global";

function display() {
  console.log(name); 
}

function container() {
  const name = "Local Local";
  display(); 
}

container(); 