const Card = document.querySelector(".boxs")
const Card2 = document.querySelector(".boxs2")
const box = document.querySelector(".box1")


const data = fetch("https://jsonplaceholder.typicode.com/users")
     .then(res => res.json())
     .then(json => {
          console.log(json);
          json?.slice(0, 3).map((value, index) => {
               return (
                    Card.innerHTML += `
                    <div>
                               <h1 class="h1">${value.name}</h1>
                               <h2 class="h2">username:${value.username}</h2>
                               <p class="p">address:${value.address.city}</p>
                               <p class="p2">number:${value.address.zipcode}</p>
                    </div>                  
                    `
               )


          })

     })
     const data2 = fetch("https://jsonplaceholder.typicode.com/users")
     .then(res => res.json())
     .then(json => {
          console.log(json);
          json?.slice(4, 7).map((value, index) => {
               return (
                    Card2.innerHTML += `
                    <div>
                               <h1 class="h12">${value.name}</h1>
                               <h2 class="h22">username:${value.username}</h2>
                               <p class="p12">address:${value.address.city}</p>
                               <p class="p22">number:${value.address.zipcode}</p>
                    </div>                  
                    `
               )


          })

     })
// const data2 = fetch("https://jsonplaceholder.typicode.com/users")
//      .then(res => res.json())
//      .then(json => {
//           console.log(json);
//           json?.slice(0, 3).map((value, index) => {
//                return (
//                     Card2.innerHTML += `
//           <div>
//                      <h1 class="h12">${value.name}</h1>
//                      <h2 class="h22">username:${value.username}</h2>
//                      <p class="p12">address:${value.address.city}</p>
//                      <p class="p22">number:${value.address.zipcode}</p>

//           </div> 
         
//           `
//                )
//           })
//      })
