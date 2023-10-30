const Cont = document.querySelector(".container")
const button = document.querySelector(".button")
const login = document.querySelector("form")
const login_button = document.querySelector(".login_button")
const x_tun = document.querySelector(".x_tun")
const x2 = document.querySelector(".x2")
const tun = document.querySelector(".tun")
const form = document.querySelector("form")
const button1 = document.getElementById("button1")



button.addEventListener("click", ()=>{
     // login.style.display = "block"
     // login.style.position = "absolute"
     login.style.display = "block"
     login.style.position = "absolute"
     login.style.margin = "-550px 0 0 450px"
     
})
button1.addEventListener("click", ()=>{
     setTimeout(() => {
          window.location = ("./second.html")
     }, 1000);
})
login_button.addEventListener("click", ()=>{
     login.style.display = "none"
})
x2.addEventListener("click", ()=>{
     login.style.display = "none"

})
tun.addEventListener("click", ()=>{
     form.style.backgroundColor = "rgb(14,42,100)"
})