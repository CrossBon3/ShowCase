// get the dom elements required
const priceInput = document.querySelector('[id=price]');
const quantityInput = document.querySelector('[id=quantity]');
const total = document.querySelector('.total');

// functions
function calculatePizzaCost(){
    const price = priceInput.value;
    const quantity = quantityInput.value;
    const cost = price * quantity;
    total.innerText = 'Total cost in $ = $' +  cost + '/-';
}

function badgeCounter(){
    document.querySelector('.badge').innerText = quantityInput.value;
}

calculatePizzaCost();
badgeCounter();

// event listeners
priceInput.addEventListener('input', calculatePizzaCost)
quantityInput.addEventListener('input', calculatePizzaCost)
quantityInput.addEventListener('input', badgeCounter)