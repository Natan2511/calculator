const inputOne = document.querySelector("#input1");
const inputTwo = document.querySelector("#input2");

const btnPlus = document.querySelector("#btnPlus");
const btnMinus = document.querySelector("#btnMinus");
const btnMultiply = document.querySelector("#btnMultiply");
const btnВivide = document.querySelector("#btnВivide");
const btnResult = document.querySelector("#btnResult");

const resultNum = document.querySelector("#resultNum");
const resultBox = document.querySelector("#result");

function print(result) {
  if (result < 0) {
    resultBox.style.color = "red";
  } else {
    resultBox.style.color = "green";
  }
  resultNum.textContent = result;
}

function computeNumbersAction(input1, input2, actionSymbol) {
  const num1 = Number(input1.value);
  const num2 = Number(input2.value);

  if (actionSymbol == "+") {
    return num1 + num2;
  } else if (actionSymbol == "-") {
    return num1 - num2;
  } else if (actionSymbol == "/") {
    return num1 / num2;
  } else if (actionSymbol == "*") {
    return num1 * num2;
  }
  //   return actionSymbol == "+" ? num1 + num2 : num1 - num2;
}

btnResult.addEventListener("click", function () {
  const result = computeNumbersAction(input1, input2, action);
  print(result);
});

btnMinus.addEventListener("click", function () {
  action = "-";
});

btnPlus.addEventListener("click", function () {
  action = "+";
});
btnMultiply.addEventListener("click", function () {
  action = "*";
});

btnВivide.addEventListener("click", function () {
  action = "/";
});
