//1. Array icinde en boyuk ededi tapin:
// let numbers = [1, 3, 5, 7, 9, 2, 8, 6, 4, 0];

let numbers = [1, 3, 5, 7, 9, 2, 8, 6, 4, 0];
let maxNumber= Math.max(...numbers) 
console.log(maxNumber);






//2. Array icinde sade ededleri tap:
let reqemler = [1, 3, 5, 7, 9, 2, 8, 6, 4, 13, 41, 44];
let.primeNumbers = numbers.filte(num => {
    if (num % i===0)return false;
    
})






//3. Arrayda uzunlugu 7 olan sozleri ekrana cixardin:
let data = [
   "Salam",
   "Dünyalı",
   "JavaScript",
   "Programlaşdırma",
   "Kod",
   "Frontend",
   "Backend",
 ];
 console.log(numbers.length);






//4. İstifadeciden kilosunu ve boyunu isteyin. Daha sonra onun Bədən kütlə indeksini tapın.(kilo / boy ** 2). Tapilan bmi deyerine gore usere asagidaki sekilde mesaj verin:
// 18-dən aşağı nəticələr: İdeal çəkidən aşağı
// 18 ilə 25 arasında nəticələr: İdeal çəki
// 25 ilə 30 arasında nəticələr: İdeal çəkidən yuxarı
// 30 ilə 40 arasında nəticələr: Artıq çəki (obez)
// 40-dən yuxarı nəticələr: Artıq çəki (morbid dərəcədə piylənmə)

let kilo = +prompt("Kilonuzu daxil edin: ");
let boy = +prompt("Boyunuzu daxil edin: ");
let umum = (kilo / boy ** 2)
if(umum<18){
    console.log("İdeal çəkidən aşağı")
} else if(umum<25 && umum>18){
    console.log("İdeal çəki")
} else if(umum<30 && umum>25){
    console.log("İdeal çəkidən yuxarı")
} else if(umum<40 && umum>30){
    console.log("Artıq çəki (obez)")
} else if(umum>40){
    console.log("Artıq çəki (morbid dərəcədə piylənmə)")
}



//5. Userin daxil etdiyi qiymetin (Ela (100-90), Yaxsi(90-75), Orta(75-55), , Pis(55-35), Kafi(35-0)) oldugunu yoxlayin:
let point = +prompt("Qiymətinizi daxil edin (0 - 100):");
if(point<100 && point>90){
    console.log("Ela (100-90)")
} else if(point<90 && point>75){
    console.log("Yaxsi(90-75)")
}else if(point<75 && point>55){
    console.log("Orta(75-55)")
}else if(point<90 && point>75){
    console.log("Pis(55-35)")
}else if(point<35 && point>0){
    console.log("Kafi(35-0)")
}





//6. Ucbucagin 2 terefini daxil edin. Hipetonuzu hesablayin (Arrow function):
let a = +prompt("Number: ")
let b = +prompt("Number: ")
let c= a**2+b**2
console.log(Math.sqrt(c))


