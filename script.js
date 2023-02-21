
function addTodo() {
    var gettingTodos = document.getElementById('todohere').value;
    if (gettingTodos) {
        var myTodosFromLS = JSON.parse(localStorage.getItem("Todos")) || [];
        myTodosFromLS.push(gettingTodos);
        localStorage.setItem("Todos", JSON.stringify(myTodosFromLS));
        document.getElementById('todohere').value = " ";
        cs();
        alert("Todo added !");
    } else {
        alert('Add todo first, before submitting!');
    }
}
function cs() {
    var divFromHtml = document.getElementById("displayTodos")
    var gettingTodosFromLS = JSON.parse(localStorage.getItem("Todos"));
    console.log(gettingTodosFromLS, "gettingTodosFromLS")
    var finalStructure = []

    for (var i = 0; i < gettingTodosFromLS.length; i++) {
        finalStructure += `<div id="row">
        <p>${gettingTodosFromLS[i]}</p>
        <i onclick="deleteTodo(${i})" class="fa-solid fa-trash"></i>
        </div>`
    }
    divFromHtml.innerHTML = finalStructure;
}
cs();
function deleteTodo(todoIndex){
    console.log(todoIndex);
    var todoFromLS = JSON.parse(localStorage.getItem("Todos"));
    todoFromLS.splice(todoIndex, 1)
    localStorage.setItem("Todos", JSON.stringify(todoFromLS))
    cs();
}