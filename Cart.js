var cart=[];

localStorage.shopCart = JSON.stringify(cart);

$('.addToCartBtn').click(function(w){
    let itemID = $(this).data("id");
    let itemName = $(this).data("name");
    let itemPrice = $(this).data("price");
    let itemImg = $(this).data("img");
    let cartItem = {"id":itemID,"name":itemName,"price":itemPrice,"img":itemImg,"quantity":1};
    let cartList = JSON.parse(localStorage.shopCart);
    let count = 0;
    for (var i in cartList){
        if (cartList[i].id === itemID){
            count++;
        }
    }
    if (count == 0){
        cartList.push(cartItem);
    }
    localStorage.shopCart = JSON.stringify(cartList);
    alert(localStorage.shopCart);
});

