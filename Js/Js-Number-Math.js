//Numbers
let sonuc;
let sayi = 10.3;

sonuc = parseInt(sayi);     //tamsayı kısmını alır.

sonuc = parseFloat(sayi);

sayi = 120.3475562;

sonuc = sayi.toPrecision(6);  //120.348 tamsayı ve ondalık dahil toplam 6 basamak gösterir, son basamak da yuvarlama yapar ve string döndürür.

sonuc = sayi.toFixed(2);  //120.35 kesirli kısmı 2 haneye indirir ve yuvarlama yapar, geriye string döndürür.

//Math fonksiyonu (sınıfı)
sonuc = Math.round(12.4);  //12 ve number
sonuc = Math.round(12.6);  //13 ve number
sonuc = Math.ceil(12.2)   //13 -yukarı yuvarlar.
sonuc = Math.floor(12.8)   //12 -aşağı yuvarlar.
sonuc = Math.pow(2,3)   //8 ->2^3 şeklinde üs alır.
sonuc = Math.max(2, 6, 14, 8, 1) //14 -max.sayıyı getirir.
sonuc = Math.random()  //0-1 arasında rastgele sayı üretir. 0 dahil, 1 hariç
sonuc = parseInt(Math.random()*100 + 1)  //1-100 arasında rastgele sayı üretir.

console.log(sonuc, typeof sonuc);