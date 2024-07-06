//Objects (Nesne Kullanımı)

//Yazım şekli Json formatı yada Dictionary kolleksiyon yapısındaki key-valued şeklindedir.


/* const user = new Object(); //boş bir user nesnesi oluşturur
const user = {} //boş bir user nesnesi oluşturur. */

let sonuc;

const user = {
    firstName:"Oya",
    lastName:"Koşar",
    age: 30
}
sonuc = user.firstName
sonuc= user["lastName"]
sonuc = user.age
console.log(sonuc,typeof sonuc)

const ogrenci = {
    firstName:"Oya",
    lastName:"Koşar",
    age: 30,
    address: {
        sehir: "İstanbul",
        ilce:"Beşiktaş"
    }
}
sonuc=ogrenci.firstName
sonuc=ogrenci.address //object
sonuc=ogrenci.address.sehir //İstanbul

let products = [
    {
        name: "Bilgisayar",
        price: 40000
    },
    {
        name: "Yazıcı",
        price: 8000
    }
]
sonuc = products[0].name //Bilgisayar
sonuc = products[0].price //8000
console.log(sonuc,typeof sonuc)
console.log("------------------------")
for(const i in products) {
console.log(products[i].name)
}
console.log("-----------------------------")

for (const key in ogrenci) {
    console.log(ogrenci[key])
    
}

console.log("------------------------------")
for(const item of products){
    console.log(item.name)
}

console.log("-------------------")
//forof; Object içinde dönmeye kalktığımızda hata verir. Çünkü elimizde tek bir nesne vardır, iterator yapısı dönerken elemanları getirir.
// for(const o of ogrenci){
//      console.log(o)
// }

const product = {
    name: "Iphone 15",
    price: 70000,
    color: "green"
}
sonuc = product.color
product.ram = "4 GB" //product nesnesine yeni bir ram propertisy'si ekler
sonuc = product.ram
sonuc = product
delete product.ram //product nesnesinden ram property'si silinir.
console.log(sonuc, typeof sonuc)