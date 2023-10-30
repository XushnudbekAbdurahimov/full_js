let numbers = [1, 2, 3, 4, 5, 6, 7]

// for (let index = 0; index < numbers.length; index++) {
//      console.log(numbers[index]);

// }

// for (const number of numbers) {
//      console.log(number);
// }

let persons = [
     {
          ism: "Jahongir",
          age: 17,
          phone: 987452105,
          email: "jahongir@gmail.com"
     },
     {
          ism: "Temurbek",
          age: 16,
          phone: 987452105,
          email: "temurbek@gmail.com"
     },
     {
          ism: "Lazizbek",
          age: 15,
          phone: 987452105,
          email: "lazizbek@gmail.com"
     },
     {
          ism: "Sanjarbek",
          age: 15,
          phone: 987452105,
          email: "sanjarbek@gmail.com"
     },
     {
          ism: "Xushnudbek",
          age: 15,
          phone: 987452105,
          email: "xushnudbek@gmail.com"
     },
     {
          ism: "Murodulla",
          age: 16,
          phone: 987452105,
          email: "murodulla@gmail.com"
     },
     {
          ism: "Suhrobbek",
          age: 17,
          phone: 987452105,
          email: "suhrobbek@gmail.com"
     },
     {
          ism: "Muhammadyusuf",
          age: 17,
          phone: 987452105,
          email: "muhammadyusuf@gmail.com"
     }
]


let tbody = document.querySelector('tbody')
let order = 0
for (const user of persons) {
     order = order + 1
     let tr = document.createElement('tr')
     tr.innerHTML = `
     <td>${order}</td>
     <td>${user.ism}</td>
     <td>${user.age}</td>
     <td>${user.phone}</td>
     <td>${user.email}</td>
     `
     tbody.appendChild(tr)
}