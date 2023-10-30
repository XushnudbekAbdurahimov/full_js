// // const products = [
// //      { id: 1, image: './img/pngwing 9.png', name: 'Cactus', price: 22.2 },
// //      { id: 2, image: './img/pngwing 5.png', name: 'Varvara', price: 18.35 },
// //      { id: 3, image: './img/pngwing 5.png', name: 'Lolopendra', price: 38.35 },
// //      { id: 4, image: './img/pngwing 9.png', name: 'Cactus', price: 22.2 },
// //      { id: 5, image: './img/pngwing 9.png', name: 'Kukuruz', price: 22.2 }
// // ];
// // const container = document.querySelector(".container")

// // for (const data of products) {
// //      container.innerHTML += `
// //      <div class="cardBox">
// //      <div class="imgBox">
// //      <img src="">
// //      </div>
// //      <h3 id="Name">${data.name}</h3>
// //      <b id="Model"></b>
// //      <p id="Price">${data.price}</p>

// //      <div class="LikeBox">
// //      <button>LIKE</button>
// //      <button onClick="AddToCart(${data.id})">TRASH</button>
// //      </div>
// //      </div>


// //      `
// // }

// // let cartData = localStorage.getItem("cartData") || []
// // const Karz = document.querySelector(".karzinka")
// // function AddToCart(id) {
// //      let items = products?.find(i => i.id === id)
// //      cartData.push(items)
// //      localStorage.setItem("cartData", cartData);


// //      console.log(cartData);
// //      Karz.innerHTML += `
// //      <div class="cardBox">
// //      <div class="imgBox">
// //      <img src="">
// //      </div>
// //      <h3 id="Name">${cartData.name}</h3>
// //      <b id="Model"></b>
// //      <p id="Price">${cartData.price}</p>

// //      <div class="LikeBox">
// //      <button>LIKE</button>
// //      <button>Delete</button>
// //      </div>
// //      </div>


// //      `
// // }






// const products = [
//      {id: 1, image: './img/pngwing 9.png', name: 'Cactus', price: 22.2 },
//      {id: 2, image: './img/pngwing 5.png', name: 'Varvara', price: 18.35 },
//      {id: 3, image: './img/pngwing 5.png', name: 'Lolopendra', price: 38.35 },
//      {id: 4, image: './img/pngwing 9.png', name: 'Cactus', price: 22.2 },
//      {id: 5, image: './img/pngwing 9.png', name: 'Kukuruz', price: 22.2 }
//  ];
 
//  const container = document.querySelector('.container')
//  for (const data of products) {
//      container.innerHTML += `
//      <div class="cardBox">
//      <div class="imgBox">
//          <img src="" alt="">
//      </div>
//      <h3 class="name">${data.name}</h3>
//      <b class="model"></b>
//      <p class="price">${data.price}</p>
 
//      <div class="LikeBox">
//          <button>Like</button>
//          <button onclick="AddToCart(${data.id})">cart</button>
//      </div>
//  </div>`
//  }
 
//  let cardData = JSON.parse(localStorage.getItem("cartData")) || []
 
//  const Karz = document.querySelector('.karzinka')
 
//  function AddToCart(id){
//      let item = products?.find(i=> i.id === id)
//      cardData.push(item)
//      localStorage.setItem("cardData", JSON.stringify())
//      console.log(cardData);
//  for (const title of cardData) {
//      Karz.innerHTML += `
//      <div class="cardBox">
//      <div class="imgBox">
//          <img src="" alt="">
//      </div>
//      <h3 class="name">${title.name}</h3>
//      <b class="model"></b>
//      <p class="price">${title.price}</p>
 
//      <div class="LikeBox">
//          <button>Like</button>
//          <button onclick="AddToCart(${title.id})">Delete</button>
//      </div>
//  </div>`
//  }
     
//  }

