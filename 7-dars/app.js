
// let slideIndex = 1;
// showSlider(slideIndex)
// function plusSlides(p){
//      showSlider(slideIndex += p)
// }
// function currentSlides(p){
//      showSlider(slideIndex += p)
// }

// function showSlider(p) {

//      let slides = document.getElementsByClassName(".myslider")
//      let dots = document.getElementsByClassName(".dot")
//      if (p > slides.length) {
//           slideIndex = 1
//      }
//      if (p < 1) {
//           slides.lenth = slides.length
//      }
//      for (let i = 0; i < slides.length; i++) {
//           slides[i].style.display = "none"

//      }
//      for (let i = 0; i < dots.length; i++) {
//           dots[i].className = dots[1].className.replace("active")

//      }
//      slides[slideIndex -1].style.display = "block"
//      dots[slideIndex -1].className += "active"
// }




setInterval(() => {
     

let h1 = document.getElementById("h1")
let b = document.getElementById("b")
let time = new Date()

let data = time.getFullYear() + "." + (time.getMonth() + 1) + "." + time.getDate()
let vaqt = time.getHours()+ ":"+ time.getMinutes()+":"+time.getSeconds()+":"+time.getMilliseconds()
h1.innerText = data
b.innerText = vaqt
}, 1000);