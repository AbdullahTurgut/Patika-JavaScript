
let fullName = prompt("Lütfen adinizi giriniz?","")
let greeting = document.querySelector("#greeting") // id olduğu için #

greeting.innerHTML = `${greeting.innerHTML} <small style="color:red">${fullName}</small>`


//console.log(fullName)