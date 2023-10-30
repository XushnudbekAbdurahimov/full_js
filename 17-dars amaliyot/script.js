const login = document.querySelector('.login');
const reg = document.querySelector('.reg');
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const loading = document.querySelector('.loading')
const lock = document.querySelector('.lock')

function Lock() {
    const password = document.querySelector('#password')
    password.type = "text"
    console.log('LOXX')
}

function Save() {
    const regemail = document.querySelector('#regemail').value
    const regpassword = document.querySelector('#regpassword').value
    const form = document.querySelector('#form')

    localStorage.setItem('email', regemail)
    localStorage.setItem('password', regpassword)
    login.style.display = "flex"

    console.log('HELLO WORLD')

    reg.style.display = "none"
    loading.style.display = "flex"
    form.style.display = "none"
    
    setTimeout(()=>{
        loading.style.display = "none"
        form.style.display = "block"
    },3000)


}

function Func() {

    const RegPass = localStorage.getItem('password')
    const Regmail = localStorage.getItem('email')
    const password = document.querySelector('#password').value
    const email = document.querySelector('#email').value

    if (email == Regmail && password == RegPass) {
        loading.style.display = "flex"
        console.log("Loged")
        setTimeout(()=>{
            window.location = "./main.html"
        },2000)
    }
    else {
        console.log("Didnt loged")
    }

}

function Login() {
    login.style.display = "flex"
    reg.style.display = "none"
}
function Reg() {
    login.style.display = "none"
    reg.style.display = "flex"
}



