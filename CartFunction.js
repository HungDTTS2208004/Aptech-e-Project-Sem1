$('.quanMinus, .quanPlus').click(function(){
    let iIndex = $(this).data("index");
    let cartList = JSON.parse(localStorage.shopCart);
    
    if($(this).hasClass("quanPlus")){
        cartList[iIndex].quantity++;
    } else {
        cartList[iIndex].quantity--;
    }
    localStorage.shopCart = JSON.stringify(cartList);
    cartDisplay();
})