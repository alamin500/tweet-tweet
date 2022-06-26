const submitElm = document.querySelector(".submit-input");
const inputElm = document.querySelector(".text-input");
const outputElm = document.querySelector(".text-group");
const filterSearch = document.querySelector(".filter");
const products = [];

submitElm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  if (!textLength(inputElm.value)) return alert("text is too long!");
  const inputText = inputElm.value;
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
  const outputText = `<div class="d-flex align-items-center">
 <p class="m-0">1. ${text} </br> -${now}</p>
 <button class="ms-2">Delete</button>
</div>`;
  outputElm.insertAdjacentHTML("afterbegin", outputText);
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
