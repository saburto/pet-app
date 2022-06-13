function getInputArray(className,tagId) { 
  let randomValue = getRandomData(className);
  document.getElementById(tagId).innerHTML = randomValue;
}

function getRandomData(className) { 
  return [...document.querySelectorAll(className)][Math.floor(Math.random()*[...document.querySelectorAll(className)].length)].value;
}