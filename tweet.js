const submitElm = document.querySelector(".submit-input");
const inputElm = document.querySelector(".text-input");
const textGroupElm = document.querySelector(".text-group");
const filterElm = document.querySelector(".filter");

let products = [];
console.log(products);
submitElm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const name = inputElm.value;
  const id = products.length;
  const product = {
    id: id,
    name: name
  };
  products.push(product);

  addItemToUI(name);
  inputElm.value = "";
});

function addItemToUI(name) {
  const listElm = `  <div class="d-flex align-items-center">
  <p class="m-0">1. ${name}</p>
  <button class="ms-2">Delete</button>
</div>`;
  textGroupElm.insertAdjacentHTML("afterbegin", listElm);
}

filterElm.addEventListener("keyup", (evt) => {
  const filterValue = evt.target.value;
  console.log(filterValue);
  const filteredArr = products.filter((product) =>
    product.name.includes(filterValue)
  );
  showAllItemToUI(filteredArr);
});

function showAllItemToUI(items) {
  textGroupElm.innerHTML = "";
  items.forEach((item) => {
    const listElm = ` <div class="d-flex align-items-center">
    <p class="m-0">1. text</p>
    <button class="ms-2">Delete</button>
  </div>`;

    textGroupElm.insertAdjacentHTML("afterbegin", listElm);
  });
}
