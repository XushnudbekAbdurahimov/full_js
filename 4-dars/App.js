const Cont = document.querySelector(".container")
const BtnRed = document.getElementById("btn1")
const BtnBlack = document.getElementById("btn2")
const BtnGreen = document.getElementById("btn3")
const col = document.querySelector(".col")
const orqaga = document.querySelector(".orqaga")


// BtnRed.addEventListener("click", ()=>{
//      console.log("Qizil rang")
// })

BtnRed.addEventListener("click", ()=>{

     
     Cont.style.backgroundColor = "red"
     BtnRed.style.backgroundColor = "red"
     BtnBlack.style.backgroundColor = "rgb(224, 201, 2)"
     BtnGreen.style.backgroundColor = "rgb(224, 201, 2)"
     
})
BtnBlack.addEventListener("click", ()=>{
     Cont.style.backgroundColor = "black"
     BtnBlack.style.backgroundColor = "black"
     BtnRed.style.backgroundColor = "rgb(224, 201, 2)"
     BtnGreen.style.backgroundColor = "rgb(224, 201, 2)"
     col.style.display = "block"
     col.style.position = "absolute"

})
BtnGreen.addEventListener("click", ()=>{
     Cont.style.backgroundColor = "green"
     BtnGreen.style.backgroundColor = "green"
     BtnRed.style.backgroundColor = "rgb(224, 201, 2)"
     BtnBlack.style.backgroundColor = "rgb(224, 201, 2)"
     h1.style.display = "none"

})
orqaga.addEventListener("click", ()=>{
     col.style.display = "none"
})
col.addEventListener("click", ()=>{
     col.style.display = "none"
})