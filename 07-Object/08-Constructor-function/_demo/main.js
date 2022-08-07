// function User(name) {

//     // this == instance created by new keyword
//     // step 1 : this = {}
//     // step 2 : เพิ่ม property ให้ object
//     this.name = name;
//     this.isAdmin = true;

//     // step 3 : return this // object with property which predefined
//     // Sum : this = instance created by new keyword
//   }

//   // create Instance from prototype
//   let user = new User('john');
//   alert(user.name); // john
//   alert(user.isAdmin); // true

function codecampstudent(name, age) {
  // s1 this = {}
  // s2 : defined Property
  this.name = name;
  this.age = age;
}

let user1 = new codecampstudent("game", 25);
console.log(user1);
