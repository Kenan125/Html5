//Karar Verme - conditions (if-elseif-else)

let not1 = 40;
let not2 = 80;
let ort = (not1 + not2) / 2;

console.log(ort);

if (ort < 50) {
  console.log("sınıfta kaldınız.");
} else {
  console.log("sınıfı geçtiniz.");
}

//3 sayıdan en büyük olanı gösteren uygulama.
let s1 = 70;
let s2 = 90;
let s3 = 70;

if (s1 > s2 && s1 > s3) console.log(`En büyük ${s1}`);
else if (s2 > s1 && s2 > s3) console.log(`En büyük ${s2}`);
else if (s3 > s1 && s3 > s2) console.log(`En büyük ${s3}`);
else console.log("Sayılar birbirine eşittir.");

//kaçıncı gün değerine göre haftanın gününü gösteren uygulamayı yazınız.
let kacinci = 0; //0 -> Pazar
kacinci = new Date().getDay(); //4 -> Perşembe

console.log(kacinci);

let day;

switch (kacinci) {
  case 0:
    day = "Pazar";
    break;
  case 1:
    day = "Pazartesi";
    break;
  case 2:
    day = "Salı";
    break;
  case 3:
    day = "Çarşamba";
    break;
  case 4:
    day = "Perşembe";
    break;
  case 5:
    day = "Cuma";
    break;
  case 6:
    day = "Cumartesi";
    break;
  default:
    day = "Yanlış gün değeri!";
    break;
}

console.log(day);
