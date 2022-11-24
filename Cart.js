


// show Cart

function cartDisplay(){
    let cartList = JSON.parse(localStorage.shopCart);
    let output = '';
    let iTotalQuan = 0;
    let iTotalPrice = 0;
    
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
                                $ ${v.price * v.quantity}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
        iTotalQuan += parseInt(v.quantity);
        iTotalPrice += v.quantity * v.price;
        localStorage.cartQuan = iTotalQuan;
    })
    
    $('.totalPriceCart').html(iTotalPrice);
    $('.totalQuanCart').html(iTotalQuan);
    $('.itemLoop').html(output);
    $('.cartQuantity').html(localStorage.cartQuan);
    $('.quanMinus, .quanPlus').click(function(){
        let iIndex = $(this).data("index");
        let cartList = JSON.parse(localStorage.shopCart);
        
        if($(this).hasClass("quanPlus")){
            cartList[iIndex].quantity++;
        } else {
            cartList[iIndex].quantity--;
        }
        localStorage.shopCart = JSON.stringify(cartList);
        cartDisplay()
    })
}

    

