setInterval(() => {

     let x;
     let y;
     x = Math.floor(Math.random() * 100) + 1
     y = Math.floor(Math.random() * 100) + 1

     document.getElementById("h1").innerHTML = x
     document.getElementById("h2").innerHTML = y


     let z;
     z = x + y
     document.getElementById("btn").onclick = function () {
          const h3 = document.getElementById("h3")
          input.value = ""
          
          if (z == x + y) {
               h3.innerHTML = z
          }
          else {
               h3.innerHTML = "xato"
          }
     }
}, 7000);
