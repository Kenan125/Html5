//DOM (Document Object Model)

//Html document sinifi tum html nesnelerini kapsar. Bu nedenle komutlarin basinda document ifadesini kullaniyoruz.

let sonuc =""
sonuc = document.getElementById("id") // verilen id'ye sahip html elementini object olarak elde ediyoruz.
sonuc = document.getElementsByClassName("class") //verilen class ismine sahip html elementlerini collection nesnesi olarak elde ediyoruz.

sonuc = document.getElementsByTagName("tag") //belirtilen etiket turune sahip tum elementleri collection nesnesi olarak elde ediyoruz.

//Tekli Element Secimi
sonuc = document.getElementById("baslik");
document.getElementById("baslik").style.backgroundColor = "yellow";

h2 = document.getElementById("baslik")
h2.style.color = "blue"

sonuc = document.getElementById("giris").innerText

//document.getElementById("giris").innerText = "Paragraf yazisi degisti" //innerText ozelligi html etiketlerini yorumlamaz, aynen gosterir.

document.getElementById("giris").innerHTML = "<b>Paragraf yazisi degisti</b>" //innerHtml ozelligi html etiketlerini yorumlar, degistirir.

sonuc = document.querySelector("#sonuc")
//sonuc = sonuc.innerText
//sonuc = sonuc.innerHTML
sonuc.style.fontSize = "24px"

sonuc= document.querySelector("li")
sonuc.style.color = "blue" //Ilk li etiketini yakalar

li = document.querySelector("li:first-child")
li = document.querySelector("li:last-child")
li = document.querySelector("li:nth-child(2)")
//li.style.color = "red"



//console.log(sonuc)



//Coklu Element Secimi

let yazilar = document.getElementsByTagName("p")
sonuc = yazilar

yazilar[1].style.fontFamily = "Verdana"
yazilar[0].style.color = "green"

sonuc = document.getElementsByClassName("item")

//sonuc[0].style.backgroundColor = "yellow"

for (const item of sonuc){
    item.style.color = "orange"
}
let ul = document.getElementById("liste1")
sonuc = ul.getElementsByClassName("item")

for(const item of sonuc){
    item.style.color = "green"
}



//sonuc.style.color = "red"

//Coklu Element Secimi (querySelectorAll)

sonuc = document.querySelectorAll("#liste2 .item")

for(const item of sonuc){
    item.style.color = "maroon"
}

console.log(sonuc)