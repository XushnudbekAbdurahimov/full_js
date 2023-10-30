const reg = document.getElementById("reg")
const log = document.getElementById("log")



// ------------------Register
const SignUp = () =>{


const RegParol = document.getElementById("parolReg").value
const RegLogin = document.getElementById("loginReg").value




localStorage.setItem("login", RegLogin)
localStorage.setItem("parol", RegParol)
}
// ----------------




const SignIn = () => {
     const login = document.getElementById("login").value
     const parol = document.getElementById("parol").value
     let succ = document.getElementById("succ")
     let err = document.getElementById("err")



     let RegisterLogin = localStorage.getItem("login")
     let RegisterParol = localStorage.getItem("parol")
     

     if (login == RegisterLogin && parol == RegisterParol){
          succ.innerText = "Succesful sign in"
          succ.style.display = "block"
     }else{
          err.innerText = "Succesful sign in"

     }
}

function Login() {
     log.style.display = "block"
     reg.style.display = "none"
}

function Register() {
     log.style.display = "none"
     reg.style.display = "block"

}