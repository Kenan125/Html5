//Hata Kontrol (error Handling)
/* try {
    kontrol edilecek kodlar
    ...
} catch (error) {
    hata durumunda çalışacak kodlar
    ...
}finally{ her durumda çalışacak kodlar } */


let sonuc = ""

try {
    sonuc = yeni; //Reference Error
    
} catch (error) {
    sonuc = error.name + ": " + error.message
}finally{
    console.log("her durumda çalışır.")  
}
let sayisal = 1

try {
    sayisal.ToUpperCase()
} catch (error) {
    sonuc = error.name + ": " + error.message

}

//let deger = "5"
//let deger = "x"
let deger = "-5"

try {
    if (isNaN(deger)) {
        throw "değer sayısal değil"
        
    } 
    if(deger<0){
        throw "değer negatif"
    }
} catch (error) {
    console.log("Hata: " + error)
}


console.log(sonuc,typeof sonuc)