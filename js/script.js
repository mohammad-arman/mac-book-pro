//Extra item update price
function extraItemPriceUpdate(itemId, price){
    const extraItemCost = document.getElementById(itemId);
    extraItemCost.innerText = price;
};
//Handle Memory Events 
document.getElementById('8gb-memory').addEventListener('click', function(){
    extraItemPriceUpdate('memory-cost', 0);
    updateTotal();
});
document.getElementById('16gb-memory').addEventListener('click', function(){
    extraItemPriceUpdate('memory-cost', 180);
    updateTotal();
});
//Handle Storage Events
document.getElementById('256gb-storage').addEventListener('click', function(){
    extraItemPriceUpdate('storage-cost', 0);
    updateTotal();
});
document.getElementById('512gb-storage').addEventListener('click', function(){
    extraItemPriceUpdate('storage-cost', 100);
    updateTotal();
});
document.getElementById('1tb-storage').addEventListener('click', function(){
    extraItemPriceUpdate('storage-cost', 180);
    updateTotal();
});
//Handle Delivery Charge Events
document.getElementById('free-delivery').addEventListener('click', function(){
    extraItemPriceUpdate('delivery-charge-price', 0);
    updateTotal();
});
document.getElementById('charge-delivery').addEventListener('click', function(){
    extraItemPriceUpdate('delivery-charge-price', 20);
    updateTotal();
});
//Update Total Price
function updateTotal(){
    //iMac price
    const iMacPrice = document.getElementById("best-price");
    const bestPrice = parseInt(iMacPrice.innerText);
    //Memory Total Price
    const memoryField = document.getElementById('memory-cost');
    const memoryPrice = parseInt(memoryField.innerText);
    //Storage Total Price
    const storageField = document.getElementById('storage-cost');
    const storagePrice = parseInt(storageField.innerText);
    //Delivery Charge Price
    const deliveryField = document.getElementById('delivery-charge-price');
    const deliveryPrice = parseInt(deliveryField.innerText);
    //Total Price
    const subTotal = bestPrice + memoryPrice + storagePrice + deliveryPrice;
    document.getElementById('total').innerText = subTotal;
    //Discount Total Price
    const promoTotal =  document.getElementById("promo-code-total");
    promoTotal.innerText = subTotal;
};
//Apply promo code
document.getElementById("apply-btn").addEventListener('click', function(){
     const subTotal = document.getElementById('total').innerText;
     const promoTotal =  document.getElementById("promo-code-total");
     const promoCode = document.getElementById('promo-code-field');
     const cupon = promoCode.value;
     if(cupon == 'stevekaku'){
         const discountPrice = subTotal * 20 / 100;
         const afterDiscount = subTotal - discountPrice;
         promoTotal.innerText = afterDiscount;
         promoCode.value = '';
     } 
});
