
let lastChild = document.querySelector("ul#list>li:last-child")
lastChild.innerHTML = "son oge degisti..."

let firstChild = document.querySelector("ul#list>li:first-child")
firstChild.innerHTML = "ilk oge degisti..."

let ulDOM = document.querySelector("ul#list")
let liDOM = document.createElement('li')
liDOM.innerHTML = "kendi olusturdugumuz oge"

// ulDOM.append(liDOM) // ul>li içerisine ekleme yaptık (sona ekler)
ulDOM.prepend(liDOM) // ul>li içerisine ekleme yaptık (başa ekler)

