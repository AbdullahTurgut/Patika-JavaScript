console.log(document.URL)
console.log(document.location)
console.log(document.location.hostname)
console.log(document.body)
console.log(document.head)

document.body.style.backgroundColor = "aqua"
// Soru 1
let domain = "www.kodluyoruz.org";
let language = "Java";

language = language.replace("Java", "JavaScript");
console.log("Language değeri: "+language);

// Soru 2
let url = "www.kodluyoruz.org";
let language2 = "Java";

console.log(url.indexOf("."));
//Önce indexOf kullanarak "noktanın" yerini öğrendik.
domain = url.slice(3+1)
//3+1 olması "noktadan" sonrasını al demek.
console.log(domain)

