// // OOP -> Object-Oriented-Programming

// function User(name, lastName, BirthDay) {
//      this.name = name;
//      this.lastName = lastName;
//      this.BirthDay = new Date(BirthDay);
// }



// User.prototype.getBirthDayYear = function () {
//      return this.BirthDay.getFullYear()
// }
// User.prototype.getFullName = function () {
//      return `${this.name} ${this.lastName}`
// }


// // const user1 = new User("Azimjon", "Mamutaliyev", "1995")
// // const user2 = new User("Murodillo", "Jobirov" ,"2007")


// console.log(user2.getFullName());



// Class ->Konstrukter Funksiyalar

class User {
     constructor(name, lastName, BirthDay){
          this.name = name;
          this.lastName = lastName;
          this.BirthDay = new Date(BirthDay);
     }
     getBirthDayYear(){
     return this.BirthDay.getFullYear()
     }
     getFullName(){
     return `${this.name} ${this.lastName}`

     }
}

const user1 = new User("Azimjon", "Mamutaliyev", "1995")
const user2 = new User("Murodillo", "Jobirov" ,"2007")

console.log(user2.getFullName());