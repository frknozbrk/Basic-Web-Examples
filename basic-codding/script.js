//? Hesap Makinası

const n1 = +prompt("ilk sayi");
const n2 = +prompt("ikinci sayi");
const a = prompt("Yapmak istediginiz islemi secin! + , - , * , / ");

if (a == "+") {
  console.log(`Islem sonucu ${n1 + n2}`);
} else if (a == "-") {
  console.log(`Islem sonucu ${n1 - n2}`);
} else if (a == "/") {
  console.log(`Islem sonucu ${n1 / n2}`);
} else if (a == "*") {
  console.log(`Islem sonucu ${n1 * n2}`);
} else console.log("Gecersiz islem");

//! Zam' a uygunluk

const maas = +prompt("Maasınızı yazın:");
const asgari = 5500;
maas >= 5500
  ? alert(`Maasınıza ${maas * 0.1} zam yapıldı.`)
  : alert(`Maasınıza ${maas * 0.5} zam yapıldı`);

//!   Takvim

const day = prompt("Please enter a day.: ");
switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
    console.log("In classactivities");
    break;
  case "Friday":
    console.log("Teamwork");
    break;
  case "Saturday":
    console.log("In class activities + workshop");
    break;
  case "Sunday":
    console.log("Self-Study");
    break;
  default:
    console.log("Break Time");
    break;
}
