const userInput = document.getElementById("user-input");
const box1 = document.querySelector(".box-1");
const box2 = document.querySelector(".box-2");
const form = document.querySelector("#input-form");
const generate = document.querySelector("#generate");
const result = document.querySelector(".result-section");
const resultBtn = document.querySelector(".result");
let matrixLength;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  matrixLength = Number(userInput.value);
  console.log(matrixLength);
  box1.innerHTML = "";
  box2.innerHTML = "";

  for (let i = 0; i < matrixLength; i++) {
    for (let j = 0; j < matrixLength; j++) {
      box1.innerHTML += `<input type="number" id="box1-${i}${j}" style="width: 30px;" value="0">`;
      box2.innerHTML += `<input type="number" id="box2-${i}${j}" style="width: 30px;" value="0">`;
    }
    box1.innerHTML += "<br>";
    box2.innerHTML += "<br>";
  }
});
const addMatrix = () => {
  result.innerHTML = "";

  for (let i = 0; i < matrixLength; i++) {
    for (let j = 0; j < matrixLength; j++) {
      const valueOfMatrix1 = document.querySelector(`#box1-${i}${j}`).value;
      const valueOfMatrix2 = document.querySelector(`#box2-${i}${j}`).value;
      const resultValue = Number(valueOfMatrix1) + Number(valueOfMatrix2);
      result.innerHTML += `<input disabled type="number" style="width: 30px;" value="${resultValue}">`;
    }
    result.innerHTML += "<br/>";
  }
};
resultBtn.addEventListener("click", () => {
  addMatrix();
});
