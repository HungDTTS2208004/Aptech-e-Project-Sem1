
var data = {
    "productList":[
        {
            "id":"001",
            "name":"Decked to the Pines",
            "price":14.00,
            "img":["ID_001_01.jpg","ID_001_02.jpg","ID_001_03.jpg"],
            "star":4.9,
            "content":"-Bling on an edgy new attitude with this green long-lasting nail polish.<br>-Take your manicure to the next level with a gilded metallic finish.<br>-OPI's Infinite Shine is a three-step long lasting nail polish line that provides gel-like high shine and 11 days of wear.<br>-Use with Infinite Shine Primer and Infinite Shine Gloss for extended wear.<br>-Made in the USA.",
            "cmt":"",
            "category":["Nail Polish","OPI","Green"],
            "date":"11-11-2020"
        },
        {
            "id":"002",
            "name":"OPI’m a Gem",
            "price":14.00,
            "img":["ID_002_01.jpg","ID_002_02.jpg","ID_002_03.jpg"],
            "star":4,
            "starRate":33,
            "content":"-Dazzle your next dinner party with a powerful black glitter long-lasting nail polish.<br>-Make a statement with a blinged-out glitter finish.<br>-OPI's Infinite Shine is a three-step long lasting nail polish line that provides gel-like high shine and 11 days of wear.<br>-Use with Infinite Shine Primer and Infinite Shine Gloss for extended wear.<br>-Made in the USA.",
            "cmt":[],
            "category":["Nail Polish","OPI","Red"],
            "date":"19-9-2019"
        },
        {
            "id":"003",
            "name":"Rhinestone Red-y",
            "price":14.00,
            "img":["ID_003_01.jpg","ID_003_02.jpg","ID_003_03.jpg"],
            "star":4.3,
            "content":"-Spread holiday joy with a sophisticated and versatile red long-lasting nail polish.<br>-The striking pearl finish will set you apart from the crowd this season.<br>-OPI's Infinite Shine is a three-step long lasting nail polish line that provides gel-like high shine and 11 days of wear.<br>-Use with Infinite Shine Primer and Infinite Shine Gloss for extended wear.<br>-Made in the USA.",
            "cmt":[],
            "category":["Nail Polish","OPI","Black","Green"],
            "date":"18-11-2020"
        }
    ],
    "account":[
        {
            'name':'admin',
            'password':'admin'
        }
    ]
}

var setting = {
    "Home":{
            "mobileCollDropdown":false,
            "mobileProductDropdown":false
        },
    "Products":{
            "brandFilter":false,
            "cateFilter":false,
            "colorFilter":false
    },
    "productInfo":{
            "description":false
    },
    "Nav":{
        "login":false
    }
}

localStorage.proList = data.productList;
localStorage.accountList = data.account;
$(".account-login").toggle(setting.Nav.login)
$(".account-logout").toggle(!setting.Nav.login)

displayItemProduct(data.productList);
$(document).ready(function(){

    $('.brandFilterContent').hide();
    $('.cateFilterContent').hide();
    $('.colorFilterContent').hide();

    $('.mobileProductDropdown').hide();

    $('.descriptionContent').hide();
});

// Home Setting
$('.collDropDownBtn').click(function(){ 
    setting.Home.mobileCollDropdown = !setting.Home.mobileCollDropdown;
    $('.mobileCollDropdownNav').toggle(100);
    if (setting.Home.mobileCollDropdown){
        $('.collDropDownBtn').html("-");
    } else {
        $('.collDropDownBtn').html("+");
    }
    
});

$('.mobileProductDropdownBtn').click(function(){
    setting.Home.mobileProductDropdown = !setting.Home.mobileProductDropdown;
    if (setting.Home.mobileProductDropdown){
        $('.mobileProductDropdownBtn').html("-");
    } else {
        $('.mobileProductDropdownBtn').html("+");
    }
    $('.mobileProductDropdown').toggle(100);
    
});


//Login system
$('.signUp-Btn').click(function(){
    let accountName = $('#signUp-accountName').val();
    let accountPass = $('#signUp-accountPassword').val();
    let accountRePass = $('#signUp-accountRePass').val();
    let accList = localStorage.accountList;
    alert(accountName+" & "+accountPass+" & "+accountRePass+" & " +accList[0].password)
    // if (accList.name.index==-1 && accountPass == accountRePass){
    //     let newAccount = {"name":accountName,"password":accountPass}
        
    //     accList.push(newAccount);
    //     $('signUpInfo').html("Your account has been succesfully created !!");
    //     localStorage.accountList = accList
    // }
})


// Products Setting
$('.brandFilterBtn').click(function(){
    setting.Products.brandFilter = !setting.Products.brandFilter;
    if (setting.Products.brandFilter){
        $('.showHideBrandIcon').html("-");
    } else {
        $('.showHideBrandIcon').html("+");
    }
    $('.brandFilterContent').toggle(100);
});

$('.cateFilterBtn').click(function(){
    setting.Products.cateFilter = !setting.Products.cateFilter;
    if (setting.Products.cateFilter){
        $('.showHideCateIcon').html("-");
    } else {
        $('.showHideCateIcon').html("+");
    }
    $('.cateFilterContent').toggle(100);
});

$('.colorFilterBtn').click(function(){
    setting.Products.colorFilter = !setting.Products.colorFilter;
    if (setting.Products.colorFilter){
        $('.showHideColorIcon').html("-");
    } else {
        $('.showHideColorIcon').html("+");
    }
    $('.colorFilterContent').toggle(100);
});

// productInfo Setting
$('.descriptionBtn').click(function(){
    setting.productInfo.description = !setting.productInfo.description;
    if (setting.productInfo.description){
        $('.descriptionBtnContent').html("Description -");
    } else {
        $('.descriptionBtnContent').html("Description +");
    }
    $('.descriptionContent').toggle(100);
});

var res = '';
function getUrlID(){
    var urlID = window.location.href;
    res = urlID.slice(-3);
}

function productDetail(){
    var d = ``;
    var i = 0;
    for (var v of data){
        if (v.id == res){
            i++;
            d += `
            <div class="row" style="margin-top:100px">  
                <div class="col-md-7">
                    <div class="row imgFrame">
                        <div class="col-sm-12">
                            <img src="Product/${v.img[0]}" alt="" width="60%" style="margin-left: 2.5%" >
                        </div>
                        <div class="col-sm-12">
                            <img src="Product/${v.img[0]}" alt="" width="17.5%" style="margin-left: 2.5%">
                            <img src="Product/${v.img[1]}" alt="" width="17.5%" style="margin-left: 2.5%">
                            <img src="Product/${v.img[2]}" alt="" width="17.5%" style="margin-left: 2.5%">
                        </div>
                    </div>
                </div>
                <div class="col-md-5 infoBorder">
                    <div class="itemInfoForm">
                        <div class="row iName">${v.name}</div>
                        <div class="row">
                            <div class="col-sm-12 voteRow">
                                ${v.star}
                                <i class="fa-solid fa-star voting-star" style="color: #572C71;"></i>
                                <i class="fa-solid fa-star voting-star" style="color: #572C71;"></i>
                                <i class="fa-solid fa-star voting-star" style="color: #572C71;"></i>
                                <i class="fa-solid fa-star voting-star" style="color: #572C71;"></i>
                                <i class="fa-solid fa-star voting-star" style="color: #572C71;"></i>
                                (${v.starRate})
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-5 infoTitle">Price:</div>
                            <div class="col-7">$ ${v.price}</div>
                        </div>
                        <div class="row">
                            <div class="col-12 infoTitle">Quantity:</div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <button ng-click="" class="changeQuanBtn">-</button>
                                <input type="number" min="1" value="1" class="quanInput">
                                <button ng-click="" class="changeQuanBtn">+</button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <button ng-click="" class="addCartBtn">Add to cart</button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <button ng-click="" class="buyBtn">Buy now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 desription">
                    <button class="descriptionBtn">
                        <b class="descriptionBtnContent">Description +</b>
                    </button>
                    <div class="col-sm-12 descriptionContent">
                        ${v.description}
                    </div>
                </div>
            </div>
            <hr width="70%" style="margin:auto">
            <div class="row cmtPart">   
                <div class="col-12"><b>Comments</b></div>
                <div class="col-9 comment">
                    <div class="row">
                        <div class="col-3 cmtInfo">
                            <img src="" alt="" width="100px" height="100px"> <br>
                            Name
                        </div>
                        <div class="col-9">
                            <div class="cmtContent">
                                Comment sth in this box
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>  
                `;
            break;
        }
    }
    if (i == 0){
        d += `404 Not Found`;
    }
    $(".productInfo").html(d);
}

function displayItemProduct(items){
    let s=``;
    $.each(items, function (k, v){
       s += `
        <div class="col-lg-4 col-md-6">
            <div class="item">
            <div class="col-sm-12"><img src="Product/${v.img[0]}" alt="" width="175px" height="200px"></div>
            <div class="col-sm-12 iName"><b>${v.name}</b></div>
            <div class="col-sm-12">
                <span class="voteRate">${v.star}</span>
                <span class="star">
                    <i class="fa-solid fa-star vote-star"></i>
                    <i class="fa-solid fa-star vote-star "></i>
                    <i class="fa-solid fa-star vote-star"></i>
                    <i class="fa-solid fa-star-half-stroke vote-star"></i>
                    <i class="fa-regular fa-star vote-star"></i>
                </span>
                <img src="../GeneralFormat/CartIcon.png" alt="Shopping Cart" class="cart" width="30px">
            </div>
        </div>
    </div>
    `; 
    });
    $('.itemShow').html(s);
}

