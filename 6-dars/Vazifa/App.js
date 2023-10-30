const container = document.querySelector(".container")
const Regcontainer = document.querySelector(".Regcontainer")


const SignUp = () => {
     const login = document.querySelectorAll(".Reginput_1").value
     const parol = document.querySelectorAll(".Reginput_2").value
     localStorage.setItem("login", login)
     localStorage.setItem("parol", parol)
}


const SignIn = () => {
     const login = document.querySelectorAll(".login").value
     const parol = document.querySelectorAll(".parol").value
     const succ = document.getElementById("succ")
     const err = document.getElementById("err")


     let RegisterParol = localStorage.getItem("parol")
     let RegisterLogin = localStorage.getItem("login")


     if (login == RegisterLogin && parol == RegisterParol) {
          succ.style.display = "block"
          succ.innerText = "Successful sign in"
     } else {
          err.style.display = "block"
          err.innerText = "Login or Parol is incored"

     }
}




function Register() {
     container.style.display = "none"
     Regcontainer.style.display = "block"
}
function Login() {
     Regcontainer.style.display = "none"
     container.style.display = "block"
}