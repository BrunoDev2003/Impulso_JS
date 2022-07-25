function newElement() {
    document.getElementById('tarefa');
    let li = document.createElement('li');
    let InputValue = document.getElementById('tarefa').value;
    let t = document.createTextNode(InputValue);
    li.appendChild(t);
    if (InputValue === '') {
        alert("escreva algo na caixa como tarefa!");
    } else {
        document.getElementById("list").appendChild(li);
    }
    document.getElementById('tarefa').value = "";

}