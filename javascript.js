// operatörler

// + toplama
// - çıkarma
// * çarpma
// / bölme
// == eşittir
// != eşit değil

// && ve
// || veya

// % yüzde

// === hem değeri hem de tipi kontrol edilir.

// var sayi=20;
// var sayi2="40";

// if (sayi === sayi2 )
// {

//     console.log(sayi+sayi2);
// console.log(sayi + " ile " + sayi2 + " birbirine eşittir.");

// }
// else if(sayi>sayi2){
//     console.log(sayi + " "+ sayi2 + " den büyüktür.");


// }
// else if(sayi<sayi2)
// {
//     console.log(sayi + " " + sayi2 + " den küçüktür.");

// }
// else{

// console.log("tipler eşit değil.");

// }

console.log(Math.PI);

console.log( Math.floor(Math.random()*5)   + 5   );
/*                     bitiş              başlangıç     */


/*                         0-10   + 5 ====> 5  -  15     */
/*                         0-10   - 5 ====> -5  -   5     */
/*                         0-5    + 5 ====> 5-10     */

// console.log( Math.sqrt(4));


// var sayi=20;
// var sayi2="40";
// //console.log(sayi + " " + sayi2 + " den küçüktür.");

// function mesajver(){

//     return "selam";
// }

// console.log(`${mesajver()} \n\n ${sayi} ${sayi2} den küçüktür`);


// var kelime="ramazan ayı";

// console.log(kelime.length);

// console.log(kelime.charAt(5));

// console.log(kelime.indexOf("n"));

// console.log(kelime.includes("ayı"));

// let parcalanmiskelime=kelime.split(' ');

// console.log(parcalanmiskelime);


let meyveler=["karpuz","çilek","elma"];

// meyveler.push("armut");//sona ekleme metodu
// console.log(meyveler.length);

// meyveler.pop();//sondan silme metodu

// console.log(meyveler);

// meyveler.unshift("kiraz");
// console.log(meyveler);

// meyveler.shift();
// meyveler.shift();

// console.log(meyveler);//çilek,elma

// meyveler.splice(0,0,"kivi");
// console.log(meyveler);

meyveler.splice(1,2);
console.log(meyveler);

//meyveler.reverse();//ters çevirme
meyveler.sort();//sıralama
console.log(meyveler);


var tarih=new Date();//şuanın tarihini veriyor.

var customtarih=new Date("August 19, 1975");
console.log(customtarih.getDate());

//

