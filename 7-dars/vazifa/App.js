setInterval(() => {
     let p = document.getElementById("p")
     let p2 = document.getElementById("p2")
     let p3 = document.getElementById("p3")

     let time = new Date()


     let data = time.getHours() + ":" + time.getMinutes()
     p.innerText = data

     let vaqt = time.getDate()
     p2.innerText = vaqt
     let vaqt2 = time.getMonth()+1
     p3.innerText = vaqt2
}, 1000);