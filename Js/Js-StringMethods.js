//String Methods

let sonuc; //undefined

let araba =  "Ali Uçar'ın arabası"
araba = 'Ali uçar\'ın'
sonuc = araba;

let anaFikir = "Sakla samanı gelir zamanı";

sonuc = anaFikir[0] //S-JavaScript string ifadeleri bir char dizisi kabul ettiğinden ilk elemanın değerini getiriyor.

sonuc = anaFikir[1] //a


sonuc = anaFikir.split(" ")


sonuc = anaFikir.split(" ")[0]  //sonuc = sonuc[0];   // Sakla
sonuc = anaFikir.length;  //dizinin eleman sayısı
sonuc = anaFikir.toUpperCase() //büyük harfe
sonuc = anaFikir.substring(6,11) //saman - 6. karakter dahil, 11. karakter hariç getirir.
sonuc = anaFikir.substring(0,5); //Sakla
sonuc = anaFikir.substring(13); //gelir zamanı - 13. karakterden sona kadar hepsini getirir.
sonuc = anaFikir.substring(-6,-3) //zam - en sağdaki karakterin indeksi -1 kabul edilir, -6'dan başlayarak -3 hariç getirir
sonuc = anaFikir.slice(6,11) // saman- pozitif değerlerde substring gibi çalışıyor.

sonuc = anaFikir.replace("gelir", "getir"); //ilk bulduğu getir kelimesini gelir ile değiştirir.
anaFikir = "Sakla samanı getir zamanı getir";
sonuc = anaFikir.replace(/getir/g, "gelir"); //g-global(bulduğu tüm gelir kelimesini gelir ile değiştirir.)


sonuc = anaFikir.indexOf("s") //case sensitive olduğu için ilk küçük s harfinin indeksini getirir.

sonuc = anaFikir.indexOf("m",10) //21 - 10. karakterden itibaren aramaya başlıyor.

sonuc = anaFikir.includes("zaman") // true - belirtilen ifade varsa true, yoksa false

sonuc = anaFikir.includes("saat"); //false


console.log(sonuc,typeof sonuc)
