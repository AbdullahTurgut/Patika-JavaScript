
//let h2 = document.getElementsByTagName('h2')
//let title = document.getElementById('title')
//title.innerHTML = "Degisen bilgi"
//console.log(title.innerHTML) // title id'li dom bilgisi değişti

//let link = document.querySelector("ul#list>li>a")
let link = document.querySelector("#kodluyoruzlink")
link.innerHTML += " degisti"
link.style.color = "red" // linkin rengi kırmızı oldu
link.classList.add('btn') // a ya btn classı ekledik
console.log(link)