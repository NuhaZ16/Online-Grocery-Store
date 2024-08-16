function addItem(name, price) {
   
    const quantityInput = event.target.previousElementSibling; 
    const quantity = parseInt(quantityInput.value, 10);
    
   
    const totalForItem = quantity * price;

  
    const item = {
        name: name,
        quantity: quantity,
        price: price,
        totalForItem: totalForItem
    };

   
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    
    cart.push(item);

 
    localStorage.setItem('cart', JSON.stringify(cart));

   
    alert(`${name} has been added to your cart.`);
}
document.body.style = 'hidden';
 
