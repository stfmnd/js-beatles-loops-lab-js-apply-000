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
let newFacts = [];
let i = 0;

function johnLennonFacts(facts) {
  while (i < facts.length) {
    newFacts.push(facts[i] += '!!!');
    i++
  }
  return newFacts
}

johnLennonFacts(facts);
