const todoList = [
  {
    name : "Default To-Do",
    date : "Due Date"
  }
];

displayToDo();

function displayToDo(){
  //Create a empty string to store HTML later.
  let todoListHTML = "";
  
  // Looping through the every object in array to create HTML for every Object.
  for(let i=0 ; i<todoList.length ; i++){
    const todoObject = todoList[i];

    const name = todoObject.name;
    const date = todoObject.date;

    // const {name} = todoObject;

    //Generating the HTML using JS
    const html = `
      <div class="JStodoName">${name}</div>
      <div class="JSduedate">${date}</div>
      <button onclick = "
      todoList.splice(${i} , 1);
      displayToDo();
      " class="delete-button" >Delete</button>
    `;

    //Adding all HTML to todoListHTML so that we can display it on the webpage
    todoListHTML += html
    console.log(todoListHTML)
  } 

  //Displaying all the HTML on webpage uisng divElement.
  const divElement = document.querySelector('.js-div-element')
  divElement.innerHTML = todoListHTML;
}

function addToDo(){
  //Get the values from HTMl Elements and store them in a variable.
  const inputToDo = document.querySelector('.inputToDo').value
  const inputDate = document.querySelector('.inputDate').value

  // Add the values in the array of object.
  todoList.push({
    name : inputToDo,
    date : `Due Date : ${inputDate}`,
  });
  
  // clear the input elements 
  document.querySelector('.inputToDo').value = "";
  document.querySelector('.inputDate').value = "";
  displayToDo();
}