
function addTodo(){
    var gettingTodos = document.getElementById('todohere').value;
    if (gettingTodos) {
        var myTodosFromLS = JSON.parse(localStorage.getItem("Todos")) || [];
        myTodosFromLS.push(gettingTodos);
        localStorage.setItem("Todos", JSON.stringify(myTodosFromLS));
        document.getElementById('todohere').value = " ";
        alert("Todo added !");
    } else{
        alert('Add todo first, before submitting!');
    }
}