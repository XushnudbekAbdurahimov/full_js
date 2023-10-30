// div25.addEventListener('click', ()=>{
//      container.style.backgroundColor = "black"
// })
function div25() {
     const container = document.querySelector(".container")
     const div26 = document.querySelector(".div26")
     const div25 = document.querySelector(".div25")
     const left_nav = document.querySelector(".left_nav")
     left_nav.style.backgroundColor = "gray"
     container.style.backgroundColor = "gray"
     container.style.color = "black"
     div25.style.display = "none"
     div26.style.display = "block"
     const img100 = document.querySelector(".img100")
     img100.style.backgroundColor = "gray"


}
function div26() {
     const container = document.querySelector(".container")
     const div25 = document.querySelector(".div25")
     const div26 = document.querySelector(".div26")
     container.style.backgroundColor = "white"
     container.style.color = "black"
     div26.style.display = "none"
     div25.style.display = "block"
     const left_nav = document.querySelector(".left_nav")
     left_nav.style.backgroundColor = "white"
     const img100 = document.querySelector(".img100")
     img100.style.backgroundColor = "white"
}
function icon() {
     const icon36 = document.querySelector(".icon36")

     setInterval(() => {
          window.location = ("./kor.html")
     },1000)

}