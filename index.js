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

  function johnLennonFacts(factsArray){
  var i=0;
  var newArray=[];
  while (i < factsArray.length){
  newArray.push(`${factsArray[i]}` + "!!!");
  i++;
  }
  return newArray;
  }
  
  johnLennonFacts(facts);
  
// Task 3 
function iLoveTheBeatles(num) {
  var emptyArray = [];
  do {
  i = num + 1;
  emptyArray.push(`"I love the Beatles!"`);
  } while (i < 15);
}