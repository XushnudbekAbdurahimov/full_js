// const div = document.getElementById("my_div")
// const clear = document.getElementById("clear")
// const result = document.getElementById("Result")


// div.addEventListener("mouseover", (e)=>{
//      result.innerHTML += `<div>Mouse kirdi</div>`
// })
// div.addEventListener("mouseout", (e)=>{
//      result.innerHTML += `<div>Mouse chiqdi</div>`
// })
// clear.addEventListener('click', (e)=>{
//      result.style.display = "none"
// })




const Curser = document.querySelector("#container")


document.addEventListener("mousemove", (e) => {
     let x = e.pageX
     let y = e.pageY

     Curser.style.top = y + "px"
     Curser.style.left = x + "px"
     console.log(x, y);
     const h1 = document.getElementById("h1")
     if ([x] > 600 && [y] > 300) {
          h1.innerText = "O'ngdan pastda"

     } else if([x] < 600 && [y] < 300){
          h1.innerText = "Chapdan tepada"

     } else if([x] < 600 && [y] > 300){
          h1.innerText = "Chapdan pastda"

     } else if([x] > 600 && [y] < 300){
          h1.innerText = "O'ngdan tepada"

     }

})
