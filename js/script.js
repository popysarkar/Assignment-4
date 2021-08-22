
const firstDiviceUnifiedMemory = document.getElementById(
    'first-divice-unified-memory'
);
const secoundDiviceUnifiedMemory = document.getElementById(
    'secound-divice-unified-memory'
);
const ramMemoryCost = document.getElementById('memory-cost');
// Memory price
const fixedRamPrice = 0;
const largeRamPrice = 180;
// Memory handler
function memoryCost(memoryPrice) {
    ramMemoryCost.innerText = memoryPrice;
    uptadteTotal();
}
firstDiviceUnifiedMemory.addEventListener('click', function () {
    memoryCost(fixedRamPrice);
})
secoundDiviceUnifiedMemory.addEventListener('click', function () {
    memoryCost(largeRamPrice);
})
// Storage cost
const firstStorage = document.getElementById('first-storage');
const secoundStorage = document.getElementById('secound-storage');
const thirdStorage = document.getElementById('third-storage');
const ssdCost = document.getElementById('storage-cost');
// Storage price
const firstStoragePrice = 0;
const secoundStoragePrice = 100;
const thirdStoragePrice = 180;
// SSD handler
function storageCost(value) {
    ssdCost.innerText = value;
    uptadteTotal();
}
firstStorage.addEventListener('click', function () {
    storageCost(firstStoragePrice);
})
secoundStorage.addEventListener('click', function () {
    storageCost(secoundStoragePrice);
})
thirdStorage.addEventListener('click', function () {
    storageCost(thirdStoragePrice);
})
// Delivery Cost
const freeShipping = document.getElementById('free-shipping');
const paidShipping = document.getElementById('paid-shipping');
const shippingCost = document.getElementById('shipping-cost');
const freeShippingCost = 0;
const paidShippingCost = 20;
// Event handler
function shippingCharge(deliveryCost) {
    shippingCost.innerText = deliveryCost;
    uptadteTotal();
}
freeShipping.addEventListener('click', function () {
    shippingCharge(freeShippingCost);
})
paidShipping.addEventListener('click', function () {
    shippingCharge(paidShippingCost);
})
// Total price
const fixedPrice = document.getElementById('fixed-price');
const sum = document.getElementById('total-cost');
const grandTotalCost = document.getElementById('grand-total-cost');
function uptadteTotal() {
    const fixedPriceTotal = parseInt(fixedPrice.innerText);
    const memoryCostTotal = parseInt(ramMemoryCost.innerText);
    const storageCostTotal = parseInt(ssdCost.innerText);
    const shippingCostTotal = parseInt(shippingCost.innerText);
    const totalPrice = fixedPriceTotal + memoryCostTotal +
        storageCostTotal + shippingCostTotal;
    sum.innerText = totalPrice;
    grandTotalCost.innerText = totalPrice;
}
// Cupon code
const cuponCode = document.getElementById('apply-btn');
const cuponText = document.getElementById('cupon-code');
const finalAmount = document.getElementById('grand-total-cost');
function finalCost() {
    const offerAmount = sum.innerText;
    const getOffer = offerAmount - (offerAmount * 20) / 100;
    finalAmount.innerText = parseInt(getOffer);
}
cuponCode.addEventListener('click', function () {
    if (cuponText.value == 'stevekaku') {
        finalCost();
        cuponText.value = '';
    } else {
        cuponText.value = '';
    }
});