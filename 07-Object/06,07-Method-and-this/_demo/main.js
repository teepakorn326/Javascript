// Function Declaration
function a() {
  console.log(this);
}
a(); // this === window object
window.a(); // this === window object

// Function Expression
let b = function () {
  console.log(this);
};

b(); // this === window object
window.b(); //
