// let btn = document.querySelector(".btn")


// btn.addEventListener("click", ()=>{
//      let txt = document.querySelector("#text")
//      txt.select()
//      document.execCommand("copy")
// })





function input() {
     const input = document.querySelector("input").value
     const btn = document.querySelector("button")

     if (input % 12 == 0) {
          console.log("Sizning yilingiz maymun");
     }
     if (input % 12 == 1){
          console.log("Sizning yilingiz qoy");
     }
     
}