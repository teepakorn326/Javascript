const person = {
  firstName: "John",
  lastName: "Doe",
  hobbies: ["Sport", "Shoppping"],
  address: {
    province: "Bangkok",
    district: "Pathumwan",
  },
  friends: [
    { firstName: "Jim", lastName: "Carry", phoneNumber: "0901999999" },
    { firstName: "JAck", lastName: "Ma", phoneNumber: "0901999998" },
  ],
};

// const {firstName,lastName,age} = person ; //?

// const numbers =[79,35,66,48];
// const [firstNumber,secondNumber]= numbers; //?
// const[,,,fourthNumber] = [79,35,66,48]
// const [a,b,...c] = numbers

const [d = 0] = [];

const { firstName, lastName, ...otherInfo } = person;
const {
  friends: [{ phoneNumber: firstphoneNumber }],
} = person;
const getfullname = (user) => {
  const { firstName, lastName } = user;
  console.log(firstName + lastName);
};
