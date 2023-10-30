const box = document.createElement("div")
document.body.appendChild(box)
box.classList.add("box")

// Bu nom qoyadi


const ButtonDec = document.createElement("button")
// yangi div yaratiladi
box.appendChild(ButtonDec)
// yaratilgan div buttonni qoshib beradi
ButtonDec.innerHTML = "Plus"
ButtonDec.classList.add("ButtonDec")


const ButtonInc = document.createElement("button")
box.appendChild(ButtonInc)
ButtonInc.innerHTML = "Minus"
ButtonInc.classList.add("ButtonInc")

let counter = 0

const result = document.createElement("h1")
result.classList.add("result")
result.innerText = counter
box.appendChild(result)


ButtonDec.addEventListener("click", () => {
     counter = counter + 1
     result.innerText = counter
})
ButtonInc.addEventListener("click", () => {
     counter = counter - 1
     result.innerText = counter
})


const on = document.createElement("button")
on.innerHTML = "Plus 10"
box.appendChild(on)

on.addEventListener("click", ()=>{
     counter = counter + 10
     result.innerText = counter
})


const clear = document.createElement("button")
clear.innerHTML = "Clear"
box.appendChild(clear)



clear.addEventListener("click", ()=>{
     counter = 0
     result.innerText = counter
})