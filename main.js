const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  { id: 3, name: 'Product 3', price: 30 }
];

let cart = [];

const displayProducts = () => {
  console.log('Available Products:');
  products.forEach(product => console.log(`${product.id}. ${product.name} - $${product.price}`));
};

const displayCart = () => {
  console.log('Shopping Cart:');
  cart.forEach(item => console.log(`${item.name} - $${item.price}`));
};

const addToCart = productID => {
  const selectedProduct = products.find(product => product.id === productID);
  if (selectedProduct) {
    cart.push(selectedProduct);
    console.log(`Added ${selectedProduct.name} to the shopping cart.`);
  } else {
    console.log('Invalid product ID.');
  }
};

const checkout = () => {
  const total = cart.reduce((acc, item) => acc + item.price, 0);
  console.log(`Total: $${total}`);
  console.log('Thank you for shopping with us!');
  rl.close();
};

const startShopping = () => {
  displayProducts();
  rl.question('Enter the product ID to add to the cart (or type "checkout" to finish): ', handleUserInput);
};

const handleUserInput = input => {
  if (input.toLowerCase() === 'checkout') {
    checkout();
  } else {
    addToCart(parseInt(input));
    displayCart();
    startShopping();
  }
};

console.log('Welcome to the Simple E-commerce Console App!');
startShopping();
