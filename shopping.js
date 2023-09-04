const addProduct = () => {
  const productField = document.getElementById("product-name");
  const quantityField = document.getElementById("quantity");
  const product = productField.value;
  const quantity = quantityField.value;
  productField.value = "";
  quantityField.value = "";
  saveProductToLocalStorage(product, quantity);
  displayShow(product, quantity);
};

const displayShow = (product, quantity) => {
  const ul = document.getElementById("display-container");
  const div = document.createElement("div");
  div.innerText = `${product} ${quantity}`;
  ul.appendChild(div);
};

const getProductShoppingCart = () => {
  let cart = {};
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
};

const saveProductToLocalStorage = (product, quantity) => {
  let newCart = {};
  const cart = getProductShoppingCart();
  console.log(cart);
  if (cart) {
    newCart = cart;
  }
  newCart[product] = quantity;
  console.log(newCart);
  const cartSpringily = JSON.stringify(newCart);
  localStorage.setItem("cart", cartSpringily);
  console.log(cartSpringily);
};
