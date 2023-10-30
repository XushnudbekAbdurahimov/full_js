let btn = document.createElement("button") 
btn.classList.add("btn")
let arr = [

     {
          name: "Bugatti Chiron",
          phone: "Pricing Starting at",
          h2: "$2,988,000",
          btn: btn,


     },
     
    



]

let box = document.getElementById("box")
let red = document.getElementById("red")
for (const user of arr) {
     let div = document.createElement("div")
     div.classList.add("div")
     div.innerHTML = `
     <h1>${user.name}</h1>
     <p>${user.phone}</p>
     <h2>${user.h2}</h2>
     `


     box.appendChild(div)
}


for (const user of arr) {
     let div = document.createElement("div")
     div.classList.add("div")
     div.innerHTML = `
     <h1>${user.name}</h1>
     <p>${user.phone}</p>
     <h2>${user.h2}</h2>
     `


     box2.appendChild(div)
}
for (const user of arr) {
     let div = document.createElement("div")
     div.classList.add("div")
     div.innerHTML = `
     <h1>${user.name}</h1>
     <p>${user.phone}</p>
     <h2>${user.h2}</h2>
     `


     box3.appendChild(div)
}
for (const user of arr) {
     let div = document.createElement("div")
     div.classList.add("div")
     div.innerHTML = `
     <h1>${user.name}</h1>
     <p>${user.phone}</p>
     <h2>${user.h2}</h2>
     `


     box4.appendChild(div)
}
for (const user of arr) {
     let div = document.createElement("div")
     div.classList.add("div")
     div.innerHTML = `
     <h1>${user.name}</h1>
     <p>${user.phone}</p>
     <h2>${user.h2}</h2>
     `


     box5.appendChild(div)
}
for (const user of arr) {
     let div = document.createElement("div")
     div.classList.add("div")
     div.innerHTML = `
     <h1>${user.name}</h1>
     <p>${user.phone}</p>
     <h2>${user.h2}</h2>
     `


     box6.appendChild(div)
}



