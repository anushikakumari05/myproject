const prompts = [
  "“Tumne apne liye waqt nikala — yeh sabse bada uphaar hai.”",
  "“Har saans mein ek nayi shuruaat chhupi hoti hai.”",
  "“Tere andar ki shanti, sabse gehri taqat hai.”",
  "“Aaj ka asan sirf sharir ke liye nahi, dil ke liye bhi tha.”"
];

function generatePrompt() {
  const randomIndex = Math.floor(Math.random() * prompts.length);
  document.getElementById("promptDisplay").innerText = prompts[randomIndex];
}