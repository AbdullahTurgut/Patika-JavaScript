
let userName = prompt("Kullanici adiniz: ")
let age = prompt("Yasiniz: ")
let info = document.querySelector("#info")

if(userName && age >=18)
    info.innerHTML = "ehliyet alabilirsiniz"
    //console.log("ehliyet alabilirsiniz")
else if(!userName)
    info.innerHTML = "Kullanici adiniz yok"
    //console.log("Kullanici adiniz yok")
else if(!(age >=18))
    info.innerHTML = "Yas bilginiz yok veya 18 yasindan kücüksünüz"
    //console.log("Yas bilginiz yok veya 18 yasindan kücüksünüz")