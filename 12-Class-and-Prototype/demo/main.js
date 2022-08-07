class User {
  name;
  password;
  role;

  login(password) {
    console.log("Login");
  }
  changesPassword(newPassword) {
    console.log("Change Password");
  }
}

const a = new User();
console.log(a); //?

const aa = {
  name: undefined,
  password: undefined,
};
