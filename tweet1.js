const submitElm = document.querySelector(".submit-input");
const inputElm = document.querySelector(".text-input");
const outputElm = document.querySelector(".text-group");
const filterSearch = document.querySelector(".filter");
const tweetNumber = document.querySelector(".tweet-num");
const letterCount = document.querySelector(".letter-count");
const products = [];

submitElm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  if (!textLength(inputElm.value))
    return alert("Text is too long! More than 250 words.");
  const inputText = inputElm.value;
  const textCount = inputText.length;
  letterCount.innerHTML = textCount;
  const product = {
    id: products.length,
    name: inputText
  };
  products.push(product);
  showToUI(inputText);
  inputElm.value = "";
});

function textLength(value) {
  var maxLength = 250;
  if (value.length > maxLength) return false;
  return true;
}

function showToUI(text) {
  let now = new Date().toLocaleTimeString();
  const length = products.length;
  const number = products.length;
  const outputText = `<div class="d-flex align-items-center justify-content-between">
 <p style="font-size: 20px" class="m-0">(${length}) ${text} </br> <span style="font-size: 12px">${now}</span></p>
 <button style="font-size: 20px" class="ms-2">Delete</button>
</div>`;
  tweetNumber.innerHTML = number;
  outputElm.insertAdjacentHTML("beforeend", outputText);
}

filterSearch.addEventListener("keyup", (evt) => {
  const filterText = evt.target.value;
  const filterElm = products.filter((product) =>
    product.name.includes(filterText)
  );
  showOutput(filterElm);
});

function showOutput(textElm) {
  outputElm.innerHTML = "";
  textElm.forEach((text) => {
    const outputText = `<div class="d-flex align-items-center">
  <p class="m-0">1. ${text.name}</p>
  <button class="ms-2">Delete</button>
 </div>`;
    outputElm.insertAdjacentHTML("afterbegin", outputText);
  });
}
