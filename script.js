function addTodo(){
    var gettingTodos = document.getElementById('todosHere').value;
    if (gettingTodos) {
        var myTodosFromLS = JSON.parse(localStorage.getItem("Todos")) || [];
        myTodosFromLS.push(gettingTodos);
        localStorage.setItem("Todos", JSON.stringify(myTodosFromLS));
        document.getElementById('todosHere').value = " ";
        alert("Todo Added !")
    } else {
        alert('Add todo first, before submitting !')
    }
}
