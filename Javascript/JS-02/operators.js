// * =======================================================
// *                 ARITMETIK OPERATORLER
// * =======================================================

// console.log(" **** Operators ****")

// const cola = 20
// const gumm = 5
// const biscuits = 15

// const totalPrice = cola + gumm + biscuits

// // totalPrice++ //? Hata

// console.log("TOTAL PRICE:", totalPrice)

// //? + operatoru String Concatination islemi de yapar.
// console.log("TOTAL PRICE:" + totalPrice) //? String Concatination

// const comments = totalPrice + " TL"
// console.log(comments)

// const commets = 50 + 40 + " TL"
// console.log(commets)

// const firstName = "Ahmet"
// const lastName = "Can"
// console.log(firstName + " " + lastName)

// const s1 = 5,
//   s2 = "4",
//   s3 = "three"

// console.log(s1 + s2) //? 54
// console.log(s1 - s2) //? 1
// console.log(s1 - s3) //? NaN (Not A Number)
// //! String ifadeyi number a cevirmeye calisti fakat mumkun olmadigi icin NaN dondurdu.

// const difference = s1 - s3
// console.log(difference, typeof NaN) //? NaN'in data type'ı number'dir.

// //* Bir islemin sonucunun NaN olup olmadigini anlamak icin isNaN() fonksiyonu kullanilabilir.
// console.log(isNaN(difference)) //?true

// //? Ornek
// //?-----------------------
// const yearOfBirth = 1920
// const name = "John"
// console.log(name + " is " + (2022 - yearOfBirth) + " years old")

// //* Sistem tarih ve saat bilgileri icin Date() kullanilabilir.
// // const date = new Date()
// // console.log(date)

// console.log(
//   name + " is " + (new Date().getFullYear() - yearOfBirth) + " years old"
// )

// //! ========== Template Literals ============

// //? 3 sekilde de string tanimlanabilir.

// const message1 = "Merhaba Javascript"
// const message2 = "Merhaba Javascript"
// const message3 = `Merhaba Javascript` //? Template literals

// console.log(`${name} is ${2022 - yearOfBirth}
// years old`)

// //* CAPRMA VE US ALMA (Multiply, Pow)
// //*--------------------------------------

// //? Ornek
// //?-------------------------------------
// //? Kullanicidan veri girisi istedik.
// // ? prompt ile kullancidan alinan veri default olarak string'dir
// //? Bu veriyi number'a Number() fonksyinu ile cevirebilriz.
// // const r = +prompt("Please enter r:")
// const r = Number(prompt("Please enter r:"))
// const pi = 3.14
// // const square = pi * r * r //? carpma
// const square = pi * r ** 2 //? us alma
// console.log(`Square of Circle: ${square} `)
// console.log(`Square of Circle: ${square.toFixed(3)} `)

// console.log(`Square of Circle: ${Math.floor(square)} `)
// console.log(`Square of Circle: ${Math.ceil(square)} `)
// console.log(`Square of Circle: ${Math.trunc(square)} `)
// console.log(`Square of Circle: ${Math.round(square)} `)

// //?Bazi fonksiyonlar
// // Math.floor();  //* her zaman en yakin alt tamsayiya yuvarlar
// // Math.ceil();  //* her zaman en yakin ust tam tamsayiya yuvarlar
// // Math.trunc(); //* sayinin tam kismini alir.
// // Math.round(); //* en yakin tam sayiya yuvarlar.
// // Math.random(); //* 0 ve 1 arasında rasgele sayi uretir.

// const randomNumber = Math.random() //? 0 - 1 arasinda rasgele sayi
// console.log(randomNumber)

// //? 0-100 arasinda sayi uretmek istenirse
// const rasgele = Math.round(Math.random() * 100) //?
// console.log(rasgele)

//* ARTTIRMA VE AZALTMA (Inc, Dec)
//*--------------------------------------

//? Ornek : 1 eksiltme, 1 arttirma
let a = 5;
a++;
console.log(a++); //? 6
y = a + 5; //? 7 + 5
console.log(--y); //? 11

//? Ornek : 5 arttirma
let z = 4;
z = z + 5;
z += 10; //? z = z + 10

//? Ornek : 10 eksiltme
let k = 20;
k -= 10; //? k = k - 10
console.log("k:", --k); //? k:9
console.log({ k }); //? {k:9}

//? Ornek : 3 katini alma
