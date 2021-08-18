function updateProductNumber(product, price, isIncreaseing) {
    const ProductInput = document.getElementById(product + '-count');
    let productCount = ProductInput.value;
    if(isIncreaseing){
        productCount = parseInt(productCount) + 1;
    }
    else if(productCount > 0){
        productCount = parseInt(productCount) - 1;
    }
    ProductInput.value = productCount;
    // price of product
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productCount * price;
    calculateTotalPrice();
}

function getInputValue(product, price) {
    const productCount = document.getElementById(product + '-count').value;
    const productTotalPrice = productCount * price;
    return productTotalPrice;
}

function calculateTotalPrice() {
    const phoneTotal = getInputValue('phone', 1219);
    const caseTotal = getInputValue('case', 59);
    const subTotal = phoneTotal + caseTotal;
    const taxAmount = subTotal /10;
    const totalPrice = subTotal + taxAmount;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = taxAmount;
    document.getElementById('total-price').innerText = totalPrice;
}

// handle phone event

//phone plus button
document.getElementById('btn-phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
    
});
//phone minus button
document.getElementById('btn-phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
});

// handle case event 

//case plus button
document.getElementById('btn-case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
});
//case minus button
document.getElementById('btn-case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
});
