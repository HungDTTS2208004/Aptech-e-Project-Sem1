


// show Cart

function cartDisplay(){
    let cartList = JSON.parse(localStorage.shopCart);
    let output = '';
    let iTotalQuan = 0;
    let iTotalPrice = 0;
    $.each(cartList, function(k, v){
        output += `
        <div class="col-12 align-items-center d-flex">
            <input type="checkbox" class="selectBtn child" value='${JSON.stringify(v)}'>
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
    });

    $('.checkOutBtn').click(function(){
        let cartList = JSON.parse(localStorage.shopCart);
        let checkOutList =[];
        let buy = $('.selectBtn:checked');
        let buyList = [];
        if (buy.length > 0){
            buy.each(function(){
                buyList.push(JSON.parse($(this).val()));
            })
        }
        // alert(JSON.stringify(buyList));
        $.each(buyList,function(k,v){
            let item = {"id":v.id,"Name":v.name,"quantity":v.quantity,"Img":v.img,"Price":v.price};
            checkOutList.push(item);
        })
        localStorage.checkOut = JSON.stringify(checkOutList);
        location.href = "checkOut.html"
    })
}

    

