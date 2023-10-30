let arr = [1, 2, 3, 4, 5, 6]

// console.log(arr.reverse()); bu teskari sonlarni chiqarib beradi
// console.log(Array.isArray(arr)); array mi yoki strmi aniqlab beradi
//  console.log(arr.splice(0, 3)); boshidan kesib oberadi
// console.log(arr.slice(0, 3)); oxiridan kesib beradi
// console.log(arr.pop()); oxiridagi narsani aytib beradi
// console.log(arr.join(" ")); string methodga olib beradi, ichiga string qoshib beradi
// console.log(arr.toString()); stringga aylantirib beradi
// console.log(arr.concat(arr1, arr2)); hamma arrayni birlashtiradi
// console.log(arr.sort()); hammasini tartib bn 1 2 3 qilib
// console.log();












let arr2 = [
     {
          id: 1,
          name: "Zuhriddin",
          age: 12,
          address: "Namangan"
     },
     {
          id: 2,
          name: "Azimjon",
          age: 28,
          address: "Pop"
     },
     {
          id: 3,
          name: "Temur",
          age: 16,
          address: "Uychi"
     },
     {
          id: 4,
          name: "Lazizbek",
          age: 15,
          address: "Chortoq"
     },
     {
          id: 5,
          name: "Sanjar",
          age: 15,
          address: "Chortoq"
     }
]
function Func() {


     const inp = document.getElementById("search").value
     const h1 = document.querySelector("div")

     let data = arr2.filter(i => i.name === inp)


     // for (const value of data) {
     //      h1.innerHTML += `
     // <h1>${value.name}</h1>
     // <h1>${value.age}</h1>
     // `
     // }


     h1.innerHTML=""
     data.map((value, index) => {
          return(
               h1.innerHTML += `
               <div key = ""${index}>
               <h1>${value.name}</h1>
               <h1>${value.age}</h1>
               </div>
               `     
          )
     })
}
