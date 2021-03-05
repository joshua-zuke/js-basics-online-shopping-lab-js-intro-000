var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

// function createObject(item){
//  let itemName = item
//  let itemPrice = Math.floor(Math.random() * 100) +1
//  var item = {[itemName]: itemPrice}
//  return item
// }

function addToCart(item) {
  let itemName = item
  let itemPrice = Math.floor(Math.random() * 100) + 1
  var item = {itemName: item, itemPrice: itemPrice}
  cart.push(item)
  return `${itemName} has been added to your cart.`
}

function viewCart() {
  if (cart.length > 0){
    const itemsAndPrices = []
    for (let i = 0, l = cart.length; i < l; i++) {
      itemsAndPrices.push(Object.values(cart[i]))
    }
    return `In your cart, you have ${itemsAndPrices[0][0]} at $${itemsAndPrices[0][1]}${cart.length < 2 ? '.' : `, and ${itemsAndPrices[1][0]} at $${itemsAndPrices[1][1]}.`}`
  } else {
  return "Your shopping cart is empty."
  }
}

// is it possible to do an until/while count is less than cart.length add ", and itemsAndPrices.." to the string?
// so it can be arbitrarily long with , and X at $Y until the period.
function total() {
  for (let i = 0, l = cart.length; i < l; i++) {
  return 0 + cart[i].itemPrice 
  }
}


//  const itemsAndPrices = []
//  for (let i = 0, l = cart.length; i < l; i++) {
//    itemsAndPrices.push(Object.values(cart[i]))
//  }
//  return itemsAndPrices

//  for (let i = o, l = cart.length; i < l; i++) {
//    let totaltotal = 0 + itemsAndPrices[i][1]
//  }

//  return totaltotal

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
