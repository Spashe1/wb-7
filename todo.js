"use strict"
console.log('hey')

const toDo = document.getElementById('toDoId')
const btnEl = document.getElementById('btn')
const msgEl = document.getElementById('msgTxt')
//console.log(msgEl)

btnEl.addEventListener('click', () =>{
const todoId = toDo.value;
const url =  `https://jsonplaceholder.typicode.com/todos/${todoId}`;
fetch(url)
.then((response) => response.json())
.then((msg) => {
    msgEl.innerHTML = msg.title
})
})