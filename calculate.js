function getRandomNumber(tagId) { 
  const maxNumber = 7
  let randomValue = getRandomNumberInt(maxNumber);
  document.getElementById(tagId).innerHTML = randomValue;
}

function getRandomNumberInt(max) { 
  return Math.floor(Math.random() * max);
}