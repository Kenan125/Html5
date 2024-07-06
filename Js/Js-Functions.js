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