// Task 1

function theBeatlesPlay(musicians, instruments) {
  let theBeatles = [];
  
  for(let i = 0; i < musicians.length; i++) {
    const entry = musicians[i] + ' plays ' + instruments[i];
    theBeatles.push(entry);
  }
  
  return theBeatles;
}

// Task 2
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

let newFacts = [];
let i = 0;

function johnLennonFacts(fact) {
  while (i < facts.length) {
    newFacts.push(fact[i] += '!!!');
    i++
  }
  return
}

johnLennonFacts(facts);

