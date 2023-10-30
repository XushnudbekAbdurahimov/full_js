// let number = 5
// let result = (number%2)
// if (result == 0) {
//      console.log("Bu son juft");
// }else{
//      console.log("Bu son toq");
// }



let time = new Date()
let Minut = time.getMinutes()
let Hours = time.getHours()

if (Hours >= 4 && Minut >= 56 && Hours < 13) {
     console.log("Bomdod");
} else if (Hours >= 12 && Minut >= 19 && Hours < 13) {
     console.log("Peshin");
} else if (Hours >= 16 && Minut >= 19 && Hours < 17) {
     console.log("Asr");
} else if (Hours >= 18 && Minut >= 14 && Hours < 19) {
     console.log("Shom");
} else if (Hours >= 19 && Minut >= 29 && Hours < 20) {
     console.log("Hufton");
}



switch (time.getDay()) {
     case 0:
          day = "Sunday"
          break;
     case 1:
          day = "Monday"
          break;
     case 2:
          day = "Tuesday"
          break;
     case 3:
          day = "Wednesday"
          break;
     case 4:
          day = "Thursday"
          break;
     case 5:
          day = "Friday"
          break;
     case 6:
          day = "Saturday"
          break;
}
console.log(day);