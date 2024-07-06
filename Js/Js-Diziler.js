//Diziler (Arrays)

let sonuc;
let notlar = [40, 60, 80, 30, 90, 70, 65];

sonuc = notlar[0]; // 40
sonuc = notlar.length; // 7
sonuc = notlar[notlar.length - 1]; // 65  -son eleman
sonuc = notlar.slice(2); //[80, 30, 90, 70, 65]
sonuc = notlar.slice(-2); //[70,65]
sonuc = notlar; //object - notlar dizisini sonuc içine atar.

let ogrenciler = [];
ogrenciler[0] = "Ali";
ogrenciler[1] = "Oya";
ogrenciler[2] = "Neşe";
ogrenciler[3] = "Ayşe";

sonuc = ogrenciler;

ogrenciler[4] = "Hasan"; //diziye yeni eleman eklemediğimizde hata vermiyor, dizini boyutu otomatik olarak genişletiyoruz.

sonuc = ogrenciler.toString(); //diziyi string ifadeye çevirir.

sonuc = sonuc.split(","); //string ifadeyi , karakterine göre parçalara ayırıp sonucu dizi olarak verir.

let telefonlar1 = ["Iphone 13", "Iphone 14"];

let telefonlar2 = ["Samsung S22", "Samsung S23"];

let telefonlar3 = ["Iphone 15"];

sonuc = telefonlar1.concat(telefonlar2); //2 diziyi birleştirir.

sonuc = telefonlar2.concat(telefonlar3, "Samsung Note"); //Birden fazla dizi ile birden fazla string ifade birleştirilir.

//Dizilerin elemanları object olarak labul edildiğinden (JavaScript) istediğimiz türde eleman ekleyebiliriz.

let modeller = ["Iphone 13", 50000, "Iphone 14", 60000, "Samsung S23", 65000];

sonuc = modeller[0]; //Iphone 13 string
sonuc = modeller[1]; //50000 number

let telefonlar = [
  "Iphone 13",
  50000,
  ["Siyah", "Beyaz"],
  "Iphone 14",
  60000,
  ["Yeşil", "Mavi"],
];
sonuc = telefonlar;
sonuc = telefonlar[2]; //["Siyah","Beyaz"] - 2 elemanlı diziyi getirir.
sonuc = telefonlar[2][0]; //Siyah - 2 elemanlı dizinin 0. elemanını getirir.

//Dizi Fonkisyonları

let renkler = ["mavi", "yeşil", "kırmızı", "sarı"];
sonuc = renkler.pop(); //dizinin son elemanını siler ve değerini geriye döndürür

sonuc = renkler.push("gri"); // belirtilen elemanl dizinin onuna ekler ve dizinin yeni eleman sayısını geri döndürür.
sonuc = renkler.unshift("beyaz"); // belirtilen elamanl dizinin baçına ekler ve dizinin yeni eleman sayısını geri döndürür.

sonuc = renkler;

//dizi.splice(start, deleteCount, ...items string)

sonuc.ogrenciler;
sonuc = ogrenciler.splice(2,1)
sonuc = ogrenciler.splice(0,0,"Hüseyin") // deleteCount=0 olduğundan hiç silmeden, 0.indekse Hüseyin bilgisini ekler.
sonuc = ogrenciler.splice(0,0,"Yaşar", renkler) //0. inddeksten, hiç silmeden, önce Yaşar sonra renkler dizisini ekler.


sonuc = ogrenciler
sonuc = renkler

sonuc = renkler.sort() //dizi elemanlarını alfebetik olarak A -> Z sıralar.

sonuc = renkler.reverse() // baştan ve sonda elemanların yerlerini değiştirir. Eğer sort() işleminden sonra uygulanırsa Z->A sıralama yapılmış olur.

console.log(sonuc, typeof sonuc);
