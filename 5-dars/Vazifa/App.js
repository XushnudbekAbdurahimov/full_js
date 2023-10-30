function Func() {
     const con = document.querySelector(".container")
     const login = document.querySelector(".login")
     const h2 = document.querySelector(".h2")
     const p = document.querySelector(".p")
     const p_2 = document.querySelector(".p_2")
     const p_3 = document.querySelector(".p_3")
     const mk = document.querySelector(".mk")
     const input_1 = document.querySelector(".input_1").value
     const input_2 = document.querySelector(".input_2").value
     const register = document.querySelector(".register")
     const button = document.querySelector("button")
     const p_10 = document.querySelector(".p_10")
     const p_1000 = document.querySelector(".p_1000")
     const lds_default = document.querySelector(".lds-default")
     mk.style.display = "none"
     lds_default.style.display = "block"
     lds_default.style.margin = "-250px 0px 0px 720px"
     if (input_1 == "xushnudbek" && input_2 == "xushnudbek") {
          p.innerText = "Seccesfull"
          p.style.color = "chartreuse"
          setTimeout(() => {
               window.location = "./home.html"
          }, 4000)
     } else {
          p.innerText = "Error"
          p.style.color = "red"
          p.style.textalign = "center"
          setTimeout(() => {B
               window.location = "./index.html"
          }, 4000)
     }
}