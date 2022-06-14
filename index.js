function addBox(parentId, nameClass, dafaultValue) { 
  
  const liId = 'li-' + document.getElementById(parentId).childElementCount;
  const newLi = document.createElement("li");
  newLi.setAttribute("id", liId);
 
  const newBox = document.createElement("input");
  newBox.setAttribute('type', 'text');
  newBox.setAttribute('class', nameClass);
  
  if (!dafaultValue) {
    newBox.setAttribute('placeholder', 'new value');
    newLi.appendChild(newBox);
    newLi.append(" ");
    const newButton = document.createElement("input");
    newButton.setAttribute('type', 'button');
    newButton.setAttribute('value', 'x');
    newButton.setAttribute('onclick', 'removeBox("' + liId + '")');
    newLi.appendChild(newButton);
  } else { 
    newBox.setAttribute('value', dafaultValue);
    newLi.appendChild(newBox);
  }

  document.getElementById(parentId).appendChild(newLi);
}

function removeBox(id) { 
  document.getElementById(id).remove();
}

function initialBox(parentId, nameClass, repeat) { 
  for (let i = 0; i < repeat; i++) {
    addBox(parentId, nameClass, i + 1);
  }
}
