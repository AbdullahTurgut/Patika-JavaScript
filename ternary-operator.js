
let userName = prompt("Kullanici adi: ")
let info = document.querySelector("#info")

// ternary kullanimi
// kosul ? dogruysa : yanlissa

info.innerHTML = `${userName.length > 0 ? userName : "Kullanci bilginiz bulunamadi :("}`