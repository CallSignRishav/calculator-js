let answer = document.getElementById("answer");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

const calculate = (info) => {
  if (num1.value === "" || num2.value === "") {
    console.log("not ok");
  } else {
    let numOne = parseInt(num1.value);
    let numTwo = parseInt(num2.value);

    switch (info) {
      case "add":
        answer.value = numOne + numTwo;
        break;

      case "sub":
        answer.value = numOne - numTwo;
        break;

      case "multi":
        answer.value = numOne * numTwo;
        break;

      case "divide":
        answer.value = numOne / numTwo;
        break;

      case "reset":
        answer.value = "";
        num1.value = "";
        num2.value = "";
        break;

      default:
        console.log("Hello World!");
        break;
    }
  }
};

// const calculate = (info) => {
//
// };
