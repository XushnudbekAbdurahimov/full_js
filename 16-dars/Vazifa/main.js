
let arr2 = [
     {
          name: "MODEL S",
          h1: "Cinematic Experience",
          p:"A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.",
          h3: "Yoke Steering",
          p2: "A bold new approach gives you a true connection to Model S, offering better steering feel and unobstructed views of your dash and the road ahead. Tap the brake and Model S automatically selects the correct direction to start your trip.",
          h4: "Perfect Environment",
          p3: "Air vents are hidden throughout the cabin, while tri-zone temperature controls, ventilated seats and HEPA filtration deliver the perfect environment.",
          img: "./images.png"

     },
     {
          name: "MODEL Y",
          h1: "Top Safety Pick+",
          p:"Model Y received the IIHS Top Safety Pick+ award, with top ratings in all crashworthiness and front crash prevention categories.",
          h3: "Yoke Steering",
          p2: "A bold new approach gives you a true connection to Model S, offering better steering feel and unobstructed views of your dash and the road ahead. Tap the brake and Model S automatically selects the correct direction to start your trip.",
          h4: "5-Star Rating",
          p3: "Model Y achieved NHTSA 5-star safety ratings in every category and subcategory.",
          img: "./images.png"

     },
     {
          name: "MODEL X",
          h1: "Perfect Environment",
          p:"A bold new approach to steering offers better feel and an unobstructed view of the road ahead. Tap the brake and Model X automatically selects the correct direction to start your trip.",
          h3: "Spacious Cabin",
          p2: "Model X offers a spacious cabin with the world's largest panoramic windshield and seating for up to seven.",
          h4: "Perfect Environment",
          p3: "Air vents are hidden throughout the cabin, while tri-zone temperature controls, ventilated seats and HEPA filtration deliver the perfect environment.",
          img: "./images.png"

     },
     {
          name: "MODEL 3",
          h1: "Cinematic Experience",
          p:"A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.",
          h3: "Yoke Steering",
          p2: "A bold new approach gives you a true connection to Model S, offering better steering feel and unobstructed views of your dash and the road ahead. Tap the brake and Model S automatically selects the correct direction to start your trip.",
          h4: "Perfect Environment",
          p3: "Air vents are hidden throughout the cabin, while tri-zone temperature controls, ventilated seats and HEPA filtration deliver the perfect environment.",
          img: "./images.png"

     },
     
]
function Func() {


     const inp = document.getElementById("search").value
     const h1 = document.querySelector(".div")

     let data = arr2.filter(i => i.name === inp)



     h1.innerHTML = ""
     data.map((value, index) => {
          return (
               h1.innerHTML += `
               <div key = ""${index}>
               <h1>${value.name}</h1>
               <h2>${value.h1}</h2>
               <p>${value.p}</p>
               <h2>${value.h3}</h2>
               <p>${value.p2}</p>
               <h2>${value.h4}</h2>
               <p>${value.p3}</p>  
               
               </div>
               `
          )
     })
}
