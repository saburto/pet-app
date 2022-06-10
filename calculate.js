function getRandomNumber(tagId,maxNumber) { 
  let randomValue = getRandomNumberInt(maxNumber);
  document.getElementById(tagId).innerHTML = randomValue;
}

function getRandomNumberInt(max) { 
  return Math.floor(Math.random() * max);
}