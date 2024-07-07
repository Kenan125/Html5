//Fonksiyonlar (Functions)

/* function fonksiyonAdi(parametreler){
        Js kodlari...
        return deger (geriye deger donecekse)
} */


/* Parametresiz Fonksiyon */

function goster(){
    console.log("Merhaba Js Fonksiyonlar");
}
goster(); //fonksiyonu cagiririz


//parametreli Fonksiyon
function msgGoster(msg){
    console.log(msg);
}
msgGoster("Kayıt gerçekleşti"); //fonksiyonu cagirir
msgGoster("Şifreyi yanlış girdiniz"); //fonksiyonu cagirir

//Parametreli ve Geriye Deger Donduren fonksiyon
function hesapla(sayi1,sayi2){
    return sayi1+sayi2;
}
msgGoster(hesapla(20,30))

msgGoster(hesapla(12,54))

//Dogum yili bilgisi disardan verildiginde Yas bilgisini hesaplayip gosteren kodlari yaziniz

function Yas(yil){
    
    return new Date().getFullYear()-yil;
}

msgGoster(Yas(2001))

let person = {
    firstName: "Neşe",
    lastName: "Sever",
    fullname: function(){
        return this.firstName + " " + this.lastName;
    }
}
sonuc = this
var a1 = 5
let a2 = 6

//scope (değişkenlerin ömürleri)
//global scope, function scope, block scope
//block scope (if, for, while,..)
if(true){
    let b = 12
}
//sonuc = b // hata verir.

if (true) {
    var c=10
    
}
sonuc = c //10 var ile tanimlanan degiskenler block scope'dan etkilenmiyor, global olarak islem goruyor.


function ornek() {
    var d = 1
    let e = 2
    
}
//sonuc = d // hata verir
//sonuc = e // hata verir.
//sonuc = ornek()
//function scope kullanimi var, let ve const icin aynidir.

function global() {
    yeniUrun = "Buzdolabı"

    
}
//sonuc = yeniUrun //hata verir.
global()
sonuc = yeniUrun //global scope'da tanimlanan degiskenler her yer
console.log(sonuc);