const reg = document.getElementById("reg")
const log = document.getElementById("log")

// -----------Register-----------
const SignUp = () => {
    const RegLogin = document.getElementById("loginReg").value
    const RegParol = document.getElementById("parolReg").value

    localStorage.setItem("login", RegLogin)
    localStorage.setItem("parol", RegParol)
}
// ------------------------------


const SignIn = () => {
    const login = document.getElementById("login").value
    const parol = document.getElementById("parol").value
    const succ = document.getElementById("succ")
    const err = document.getElementById("err")

    let RegisterParol = localStorage.getItem("parol")
    let RegisterLogin = localStorage.getItem("login")

    if (login == RegisterLogin && parol == RegisterParol) {
        succ.innerText = "Successful sign in"
        succ.style.display = "block"
    } else {
        err.style.display = "block"
        err.innerText = "Login or Parol is incored"

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


// -----------Clear-----------
const Clear = () => {
    localStorage.removeItem("login")
    localStorage.removeItem("parol")
}
