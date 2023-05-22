// var serverName = "kodluyoruz.org"
// console.log(serverName)
//let serverName;
//console.log(serverName)
//serverName = "http://kodluyoruz.org"
//console.log(serverName)
//
//let password = "12345";
//console.log(password);

//let price = 100;
//let tax = 0.18;
//let priceTax = price * tax;
//let total = price + priceTax;
//console.log(
//    "Fiyat:" ,price,
//    "KDV orani:",tax,
//    "KDV tutari:",priceTax,
//    "Total:",total
//);

//**********Boolean veri tipi*************
//var y = {2:'js'}; 
//console.log(Boolean(y));

// **************** Template Literals Örnekleri *********************
//const ad =`Aycan`
//const soyad =`Yerdelen`
//const gozRengi =`Kahverengi`
//const yas =21
//
//const kisi = "<p>"+ad+"</p>"+
//              "<p>"+soyad+"</p>"+
//              "<p>"+gozRengi+"</p>"+
//              "<p>"+yas+"</p>"
//
//document.body.innerHTML = kisi;
const ad =`Aycan`
const soyad =`Yerdelen`
const gozRengi =`Kahverengi`
const yas =2

const kisi = `
<p>${ad}</>
<p>${soyad}</>
<p>${gozRengi}</>
<p>${yas}</>
`;

document.body.innerHTML = kisi;

//const kitap = {
//    ad: "Firtina",
//    yazar: "Shakespeare",
//    tarih: 1610
//  }
//  const bookTable =
//        "<table border>"+
//    "<tbody>"+
//      "<tr>"+
//        "<td>"+"Kitap"+"</td>"+
//        "<td>"+kitap.ad+"</td>"+
//      "</tr>"+
//    "<tr>"+
//        "<td>"+"Yazar"+"</td>"+
//        "<td>"+kitap.yazar+"</td>"+
//      "</tr>"+
//        "<tr>"+
//        "<td>"+"Tarih"+"</td>"+
//        "<td>"+kitap.tarih+"</td>"+
//      "</tr>"+
//   " </tbody>"+
//  "</table>"
      
  document.body.innerHTML = bookTable
  const kitap = {
    ad: "Firtina",
    yazar: "Shakespeare",
    tarih: 1610
  }
  const bookTable =`
        <table border>
    <tbody>
      <tr>
        <td>Kitap</td>
        <td>${kitap.ad}</td>
      </tr>
    <tr>
        <td>Yazar</td>
        <td>${kitap.yazar}</td>
      </tr>
        <tr>
        <td>Tarih</td>
        <td>${kitap.tarih}</td>
      </tr>
   </tbody>
    </table>
  `;
        
  document.body.innerHTML = bookTable

