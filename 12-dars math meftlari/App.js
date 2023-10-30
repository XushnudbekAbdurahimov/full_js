let num = Math.max(3, 4, 1, 7, 9, 4)

let num2 = Math.min(3, 4, 1, 7, 9, 4)

let num3 = Math.pow(2, 3)
// pow - 1-sonni darajasini korsatdadi

let num4 = Math.abs(-20)
// - ni + ga aylantirib beradi

let num5 = Math.sqrt(10)
// bu ildizdan chiqarib beadi

let num6 = Math.cbrt(10)
// bu 3darajali ildiz

let num7 = Math.round(10.3)
// bu yaxlitlab beradi

let num8 = Math.random()

let num9 = Math.floor(10.58485785)
// bu qoldiqni kesib tashlaydi

let num10 = Math.ceil(3.7)
// bu oldida 1 bosaham yaxlitlab kotarib beradi



// let x;
// let y;
// let z;
// let d;
// let t;

// document.getElementById("run").onclick = function () {
//      x = Math.floor(Math.random() * 27) + 1;
//      y = Math.floor(Math.random() * 27) + 1;
//      z = Math.floor(Math.random() * 27) + 1;
//      d = Math.floor(Math.random() * 27) + 1;
//      t = Math.floor(Math.random() * 27) + 1;


//      document.getElementById("Zuhriddin").innerHTML = x
//      document.getElementById("Vorisxon").innerHTML = y
//      document.getElementById("Muhhammadyusuf").innerHTML = z
//      document.getElementById("Murodillo").innerHTML = d
//      document.getElementById("Temur").innerHTML = t
// }

// const random = Math.floor(Math.random() * 100)
// console.log(random);


document.getElementById("generate").onclick = function () {
     let x = document.getElementById("son1").value
     let y = document.getElementById("son2").value

     const random = Math.floor(Math.random() * (x - y + 1) * x)

     document.getElementById("h1").random

}


// oyin yaratish