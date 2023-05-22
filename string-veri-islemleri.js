let email = "abdullah.trgt4196@gmail.com"
let firstName = "abdullah"
// string karakter sayisi -> length
console.log( email.length ); // 27

// ilk karakteri bulmak -> [0]:
console.log(firstName[0]); // a
console.log(firstName.charAt(0));// a

// buyuk harf / kucuk harf :
// firstName = firstName.toUpperCase()
console.log(firstName) // ABDULLAH

// search -> string içerisinde istenilen bilgiyi aramak 
console.log(email.search("@")) // 17 de @ var yok ise -1 döndürür

// slice -> belli bir yere kadar al
console.log(email.slice(0,8)) // isim bilgimi aldım(7.indexe kadar alır)

console.log(email.slice((email.search("@"))))//@ den sonrası domain alır

// replace -> string değiştir
email = email.replace('gmail.com','kodluyoruz.org');
console.log(email);

// includes -> bilgi var mı ?
console.log(email.includes('kodluyoruz')); // true

// startsWidth , endsWidth -> başlangıç ve bitiş kontrolu
console.log(email.endsWith('org'));// true
console.log(email.startsWith('abdullah'));// true

// ilk harfi büyük yap
let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1)}`
console.log(fullName)




