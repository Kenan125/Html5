//Değişken Tanımlama
//var -> global değişken
//let -> scope değişken (EcmaScript -ES6)
//const -> scope değişken (sabit)

var sonuc;
var ad = "Kenan"; // içine gelen bilginin türünü alıyor.
sonuc = ad


var ad =5; //redeclare
sonuc = ad

let soyad = "Ismayilzade"
//let soyad; redeclare kabul edilmez
let tarih =new Date();
sonuc = tarih

let yil = tarih.getFullYear()
sonuc = yil;

let esitmi = (5=="5"); //true

esitmi = (5 ==="5"); //false
//=== operatörü sadece değerleri değil türleri de karşılaştırıyor, bu nedenle false dönüyor
sonuc = esitmi; 

let sayi = 3
sonuc = sayi++ //sonuc=sayi, sayi=sayi+1


sonuc = ++sayi //sayi=sayi+1, sonuc = sayi
//console.log(sonuc, typeof sonuc)

//Yukarıda önceden tanımlanmışlardı.
ad = "Oya"
soyad = "Koşar"
yil = 2000

console.log(ad + " " + soyad + " " + (new Date().getFullYear()-yil) + " yaşında");

console.log(`Adı: ${ad}, Soyadı: ${soyad}, Yaş: ${new Date().getFullYear()-yil}`)

//backTick sembolü -> ``
//`ifadeler ${değişken} ifadeler ${değişken}`

const pi =3.14

//pi = 3.1456566756; //const ile tanımlanan sabit değişkenlerin değerlerini değiştiremiyoruz, denediğimizde hata alırız.
sonuc = pi;
sonuc = this; //en genel global window kütüphanesini verir. var ile tanımlanan değişkenler bu kütüphanesinde kayıtlı olduğu için her yerden (global) erişebiliyoruz.
//Ancak let ve const ile tanımlanan değişkenler window içine kayıt edilmiyor. Bu nedenler de sadece tanımlandıkları scope (kapsam) içinde erişebiliyoruz.


console.log(sonuc, typeof sonuc)