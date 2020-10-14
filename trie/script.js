function makeUpperCaseStatement(string){
  let newString = string.toUpperCase();
  
  const period = "."

  if (newString.endsWith('?')) {
    newString = newString.substring(0, newString.length - 1);
    newString = newString.concat(period);
    return newString
  } else {
    return newString
  }
}

  const statement = "I can whiteboard?";
  console.log(statement)
  console.log(makeUpperCaseStatement(statement));

  //Design a data structure that supports adding new words and finding if a string matches any previously added string.

// PRETEND: ["Angelica", "Angelia", "Martha", "Angel", "Mars", "Mary", "An"]

//NODE
//each node in vine is an individual letter
  // attributes
  // values, next = [ "C", "A"], endOFWord = false,

//TRIE
//tree is empty
//start by assigning empty root 
//begin by adding in first vine 

//will have 3 methods - constructor, add, search

// Add: As we look to add a new word, we iterate over the existing vine's characters and the new word. Either: we run out of one, or they diverge.

//add method: iterate over vine by comparing letter in the vine to the letters in the word in array, node by node, and add diverging nodes as they appear

// until (i = array.length) {
//  temp = array.delete[0]
//   Trie.add(temp, trie)  

//} 











