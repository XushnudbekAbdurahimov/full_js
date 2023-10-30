// setInterval(() => {
//      let p = document.getElementById("p")
//      let p2 = document.getElementById("p2")
//      let p3 = document.getElementById("p3")

//      let time = new Date()


//      let data = time.getHours() + ":" + time.getMinutes()
//      p.innerText = data

//      let vaqt = time.getDate()
//      p2.innerText = vaqt
//      let vaqt2 = time.getMonth()+1
//      p3.innerText = vaqt2
// }, 1000);


// time = new Date
// switch (time.getTime()) {
//      case 0:
//           hours = "1"
//           minute = "1"
//           break;
//      case 1:
//           hours = "2"
//           minute = "2"
//           break;
//      case 2:
//           hours = "3"
//           minute = "3"
//           break;
// }
// console.log(hours, minute);



setInterval(() => {
      let soat1 = document.querySelector("#p2")
      let daqiqa1 = document.querySelector("#p3")

      var soat = new Date().getHours();
      var daqiqa = new Date().getMinutes();

      switch (soat) {
           case 0:
                console.log("12:" + daqiqa + " AM");
                break;
           case 1:
           case 2:
           case 3:
           case 4:
           case 5:
           case 6:
           case 7:
           case 8:
           case 9:
                console.log("0" + soat + ":" + daqiqa + "AM");
                break;
           case 10:
           case 11:
                console.log(soat + ":" + daqiqa + "AM");
                break;
           case 12:
                console.log(soat + ":" + daqiqa + " PM");
                break;
           case 13:
           case 14:
           case 15:
           case 16:
           case 17:
           case 18:
           case 19:
                console.log(soat - 12 + ":" + daqiqa + " PM");
                break;
           case 20:
           case 21:
           case 22:
           case 23:
                console.log(soat - 12 + ":" + daqiqa + " PM");
                break;
           default:
                console.log("Noma'lum soat");

      }
 soat1.innerHTML = soat
 soat1.classList.add("red")
 daqiqa1.innerHTML = daqiqa
}, 1000);


// switch (time.getHours()) {
//           case 0:
//                Hours = "00:00"
//                break;
     
          
//      }
// switch (time.getMinutes()) {
//           case 0:
//                Minutes = "60"
//                break;
     
          
//      }
//      const cloc = document.querySelector("#bbb")
//      cloc.innerHTML = Hours
//      const clo = document.querySelector("#bb")
//      clo.innerHTML = Minutes




setInterval(() => {
     let p = document.getElementById("p6")
     
     let p2 = document.getElementById("p4")
     // let p3 = document.getElementById("p5")

     let time = new Date()


     let data = time.getDay() + ":" + time.getDate()
     p.innerText = data


     let vaqt = time.getDate()
     p2.innerText = vaqt
     let vaqt2 = time.getMonth()
     p3.innerText = vaqt2
}, 1000);



     
time = new Date
switch (time.getMonth()) {
     case 0:
          month = "January"
          break;
     case 1:
          month = "February"
          break;
     case 2:
          month = "March"
          break;
     case 3:
          month = "April"
          break;
     case 4:
          month = "May"
          break;
     case 5:
          month = "July"
          break;
     case 6:
          month = "June"
          break;
     case 7:
          month = "August"
          break;
     case 8:
          month = "September"
          break;
     case 9:
          month = "October"
          break;
     case 10:
          month = "November"
          break;
     case 11:
          month = "December"
          break;



    
}
let ab = document.getElementById("p7")
console.log(month);
ab.innerHTML = month



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
let ac = document.querySelector("#p8")
console.log(day);
ac.innerHTML = day


// switch (time.getHours()) {
//      case 0:
//           Hours = "00:00"
//           break;

     
// }
// const cloc = document.querySelector("#bbb")
// cloc.innerHTML = Hours
