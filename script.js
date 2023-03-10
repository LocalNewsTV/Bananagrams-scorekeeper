/**
 * Scoring System for Bananagrams
 */
const bananaScoring = {
  'a': 13,
  'b': 3,
  'c': 3,
  'd': 6,
  'e': 18,
  'f': 3,
  'g': 4,
  'h': 3,
  'i': 12,
  'j': 2,
  'k': 2,
  'l': 5,
  'm': 3,
  'n': 8,
  'o': 11,
  'p': 3,
  'q': 2,
  'r': 9,
  's': 6,
  't': 9,
  'u': 6,
  'v': 3,
  'w': 3,
  'x': 2,
  'y': 3,
  'z': 2,
}
/**
 * @desc - Calculates the score based on the input 
 */
const calculateScore = () => {
 input = document.getElementById('userInput').value.toLowerCase();
 let count = 0;
 for(const letter of input.split('')){
  count += bananaScoring[letter] ? bananaScoring[letter] : 0;
 }
 document.getElementById('score').innerHTML = String(count); 
}
document.getElementById('clear').addEventListener('click', ()=>{
  document.getElementById('userInput').value = ""
  calculateScore();
});
document.getElementById('userInput').addEventListener('keyup', calculateScore);
document.getElementById('userInput').addEventListener('touchend', calculateScore);