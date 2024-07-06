//Döngüler (Loops)

//1-10 sayılar listeleyen ve toplamlarını gösteren uygulamayı yazınız.

let toplam = 0
for (let index = 1; index <= 10; index++){
     toplam = toplam + index; 
}
//console.log(toplam)

let sayilar = [5, 10, 15, 20, 25, 30, 35, 40];

sayilar.forEach(element => {
    toplam = toplam + element;
    
});

toplam = 0
for(let i = 0; i<= sayilar.length-1; i++ ){
    toplam = toplam + sayilar[i]
}
console.log(toplam)

let sayi =1;
while (sayi<=5) {
    console.log("Hello Js!")
    sayi++
}

let i = 0;
let sayac = 0;
while ( i<=100&& sayac< 5) {

    if (i%2==0 && i%10!==0) {
        console.log(i)
    } 
    if (i%10==0) {
        sayac++
        
    }
i++
    
}


i = 10;
do{
    console.log(i)
}while(i<5)