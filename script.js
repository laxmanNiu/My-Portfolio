
const roles = [
  "Java Developer",
  "Frontend Developer",
  "Problem Solver",
  "GATE Aspirant"
];

let i = 0;
const text = document.getElementById("typing-text");

setInterval(() => {
    text.textContent = roles[i];
    i = (i + 1) % roles.length;
}, 2000);