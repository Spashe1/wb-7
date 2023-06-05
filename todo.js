"use strict"
console.log('hey')

const toDo = document.getElementById('toDoId')
const btnEl = document.getElementById('btn')
const msgEl = document.getElementById('msgTxt')
//console.log(msgEl)

btnEl.onclick= onBtnElClick;
function onBtnElClick(){
    //console.log('clicked')
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
 .then(data => {
 let message = "User Id: " + data.userId;
 msgEl.innerHTML = message
 })
}