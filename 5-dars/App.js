

// Declaration
function Func() {
     const login = document.getElementById("parol").value
     const parol = document.getElementById("login").value
     const p = document.getElementById("p")
     if (login == "Xushnudbek" && parol == "Xushnudbek") {
          p.innerText = "Seccesfull"
          setTimeout(() => {
               window.location = "./home.html"
          // window boshqa page tashab beradi
          }, 4000)
     } else {

     }
}

// // Expression
// let Exp = function(){
//      h1.style.color = "black"

// }

// // Array
// const Arr = () =>{
//      h1.style.color = "pink"
// }

// faqat declaration func hostingda ishlayda qolgani error beraadi "hosting" - tepaga kotarish uchun kk 