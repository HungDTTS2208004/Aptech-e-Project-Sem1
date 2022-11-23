var cart=[];

if (localStorage.shopCart ==""){
    localStorage.shopCart = JSON.stringify(cart);
}


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

// show Cart

function cartDisplay(){
    let cartList = JSON.parse(localStorage.shopCart);
    let output = '';
    $.each(cartList, function(k, v){
        output += `
        <div class="col-12 align-items-center d-flex">
            <input type="checkbox" class="selectBtn">
            <div class="item">
                <div class="row">
                    <div class="col-3">
                        <img src="../Products/Product/${v.img}" alt="" width="100%">
                    </div>
                    <div class="col-9">
                        <div class="row">
                            <b>${v.name}</b>
                        </div>
                        <div class="row">
                            <div class="col-12"> 
                                <button class="changeQuanBtn quanMinus" data-index="${cartList.indexOf(v)}">-</button>
                                <input type="number" min="1" value="${v.quantity}" class="quanInput" data-index="${cartList.indexOf(v)}">
                                <button class="changeQuanBtn quanPlus" data-index="${cartList.indexOf(v)}">+</button>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-4">
                                Price:
                            </div>
                            <div class="col-8">
                                $ ${v.price}
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-4">
                                Total:
                            </div>
                            <div class="col-8">
                                $ xxxx
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    })
    $('.itemLoop').html(output);
}

    

