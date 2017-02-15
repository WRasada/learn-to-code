var todos = [];

var input = prompt("what would you like to do?")



while (input !== "quit"){

  if (input === "list") {
    listTodos();
  } else if (input === "new") {
    addTodo();
  } else if (input === "delete") {
    deleteTodo();
  }
  input = prompt("what would you like to do?")
}

console.log("Ok, you quit the app")




function listTodos(){
  console.log("******************")
    todos.forEach(function(todo, i){
      console.log(i + ": " + todo);
    });
  console.log("******************")
}

function addTodo(){
  var newTodo = prompt("Enter new todo.")
  todos.push(newTodo);
  console.log(newTodo + " added to list");
}

function deleteTodo(){
  todos.forEach(function(todo, i, array){
    console.log(i + ": " + todo);
  });
  var input = prompt("Which number would you like to delete?");
  var number = parseInt(input);
  console.log(number);
  if (isNaN(number)) {
    alert("I need a real number");
  } else if (number > (todos.length - 1)){
    alert("I'm sorry but that number isn't on the list");
  } else {
    todos.splice(number, 1);
    console.log("Todo Removed");
  }
}
