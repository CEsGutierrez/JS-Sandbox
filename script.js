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