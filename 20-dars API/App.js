const Card = document.querySelector(".cards")


const data = fetch("https://jsonplaceholder.typicode.com/users")
     .then(res => res.json())
     .then(json => {
          console.log(json);

          // for (const value of json) {
          //      Card.innerHTML += `
          //           <div>
          //                <div>
          //                     <h1>${value?.title}</h1>
          //                     <b>address:${value}</b>
          //                </div>
          //           </div>
          //      `
          // }
          json?.slice(0, 10).map((value, index) => {
               return (
                    Card.innerHTML += `
                    <div>
                                    <div>
                                         <h1>${value.name}</h1>
                                    </div>
                               </div> 
                    `
               )
          })

     })

     function Func() {
     const Search = document.querySelector(".Search").value
     const btn = document.querySelector("btn")
     const h1 = document.createElement("h1")

     let ser = json.filter(i => i.name === Search)

     h1.innerHTML = ""
     ser.map((value, index) => {
      return(
        h1.innerHTML += `
        <h1>${value.name}</h1>
        `
      )
     })
     

     }
