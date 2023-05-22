
//function haftaninGunleriniAl(getDay){
//    let strDay;
//    switch(getDay){
//        case 0:
//            strDay = "Pazar"
//            break;
//        case 1:
//            strDay = "Pazartesi"
//            break;
//        case 2:
//            strDay = "Salı"
//            break;
//        case 3:
//            strDay = "Çarşamba"
//            break;
//        case 4:
//            strDay = "Perşembe"
//            break;
//        case 5:
//            strDay = "Cuma"
//            break;
//        case 6:
//            strDay = "Cumartesi"
//            break;
//    }
//    return strDay;
//}

let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
let now = new Date();
let firstName = prompt("Adiniz Nedir ?")

let myName = document.querySelector("#myName")
let myClock = document.querySelector("#myClock")

myName.innerHTML = `${firstName}`
function time(){
    myClock.innerHTML = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} ${days[now.getDay()]}`
}


setInterval(time,1000)
