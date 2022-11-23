
var data = {
    "productList":[
        {
            "id":"p01",
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
            "id":"p02",
            "name":"OPI'm a Gem",
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
            "id":"p03",
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
            'password':'admin',
            'Avatar':'ava1.png',
            'Fullname':'Admin',
            'Address':'FPT',
            'Email':'FakeFace@gmail.com',
            'Phone': '+84913636373'
        }
    ],
    
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
        "login":"false",
        "loginIndex":-1
    }
}
if (localStorage.getItem("login")==null){
    localStorage.login = setting.Nav.login;
}

localStorage.proList = data.productList;

if (localStorage.accountList==null){
    localStorage.accountList = JSON.stringify(data.account)
}

if (localStorage.login == "false"){
    $('.accountIcon').attr("src","GeneralFormat/AccountIcon.png");
} else {
    $('.accountIcon').attr("src","GeneralFormat/ava1.png")
    $('.accountIcon').attr("style",`
        width: 50px;
        height: 69px;
        border: 2px solid black;
        border-radius: 50%;
    `)
}
$(".account-login").toggle(localStorage.login == "false")
$(".account-logout").toggle(localStorage.login == "true")

displayItemProduct(data.productList);

$(document).ready(function(){

    $('.brandFilterContent').hide();
    $('.cateFilterContent').hide();
    $('.colorFilterContent').hide();

    $('.mobileProductDropdown').hide();

    $('.descriptionContent').hide();
});



// Home feature start
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
// Home feature end


//=====================
//=   Login system    =
//=====================


// Sign Up feature start
$('.signUp-Btn').click(function(){
    let accountName = $('#signUp-accountName').val();
    let accountPass = $('#signUp-accountPassword').val();
    let accountRePass = $('#signUp-accountRePass').val();
    let accList = JSON.parse(localStorage.accountList);
    let err='';
    let c=0;

    for (var i in accList){
        if (accList[i].name == accountName || accountPass != accountRePass){
            if (accList[i].name == accountName){
                c++;
                err+=`<span style="color:red"> Account has already been used !! </span>`;
            } else {
                c++;
                err+=`<span style="color:red"> Those passwords didn't match. Try again. !!</span>`;
            } 
        }
    }
    if (c==0){
        let newAccount = {
            'name': accountName,
            'password': accountPass,
            'Avatar':'ava1.png',
            'Fullname':'',
            'Address':'',
            'Email':'',
            'Phone':''
        };
            accList.push(newAccount);
            localStorage.accountList = JSON.stringify(accList);
            location.href="../index.html"
    }
            

    $('.signUpInfo').html(err);
})
// Sign Up feature end

// Sign In feature start
$('.signIn-Btn').click(function(){
    let c=0;
    let accountName = $('#signInName').val();
    let accountPass = $('#signInPass').val();
    let accList = JSON.parse(localStorage.accountList);
    for (var i in accList){
        if (accountName == accList[i].name && accountPass == accList[i].password){
            localStorage.login = "true"
            location.href = '../index.html';
            c=0;
            localStorage.loginIndex = i;
            break;
        } else {
            c++;
        }
        
    }
    if (c!=0){
        $('.signInInfo').html('<span style="color:red">Account or Password is wrong !!</span>')
    }
})
// Sign In feature end

// Sign Out feature start
$('.signOutBtn').click(function(){
    localStorage.login = "false";
    localStorage.loginIndex = -1;
    location.href='';
})
//Sign Out feature end

// Information feature start

$('#avatar').attr("src","../GeneralFormat/"+JSON.parse(localStorage.accountList)[localStorage.loginIndex].Avatar)
$('.resetBtn').click(function(){
    let userInfo= JSON.parse(localStorage.accountList);
    $('.fullNameInput').html('<input type="text" class="infoInput" id="fullNameInfo" value='+userInfo[localStorage.loginIndex].Fullname+' required>');
    $('.addressInput').html('<input type="text" class="infoInput" id="fullNameInfo" value='+userInfo[localStorage.loginIndex].Address+' required>');        
    $('.emailInput').html('<input type="text" class="infoInput" id="fullNameInfo" value='+userInfo[localStorage.loginIndex].Email+' required>');
    $('.phoneInput').html('<input type="text" class="infoInput" id="fullNameInfo" value='+userInfo[localStorage.loginIndex].Phone+' required>');   
    $('.infoChange').html(`
        <div class="alert alert-success" style="text-align:center">
        <strong>Success!</strong> Your information have been reseted
        </div>`
        )
})
$('.saveBtn').click(function(){
    let fullname = $('#fullNameInfo').val();
    let address = $('#addressInfo').val();
    let email = $('#emailInfo').val();
    let phone = $('#phoneInfo').val();
    let account = JSON.parse(localStorage.accountList);
    account[localStorage.loginIndex].Fullname = fullname;
    account[localStorage.loginIndex].Address = address;
    account[localStorage.loginIndex].Email = email;
    account[localStorage.loginIndex].Phone = phone;
    localStorage.accountList = JSON.stringify(account);
    $('.infoChange').html(`
        <div class="alert alert-success" style="text-align:center">
        <strong>Success!</strong> Your information have been changed
        </div>`
        )
    return false;
})

// Information feature end



//=========================
//=       Products        =
//=========================

// Products feature
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



// productInfo feature
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
    var d1 = ``, d2=``;
    var i = 0;
    for (var v of data.productList){
        if (v.id == res){
            i++;
            d1 += `
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
                        <div class="row iName"><b>${v.name}</b></div>
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
                            <div class="col-4 infoTitle">Price:</div>
                            <div class="col-8">$ ${v.price}</div>
                        </div>
                        <div class="row">
                            <div class="col-12 infoTitle">Quantity:</div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <button class="changeQuanBtn">-</button>
                                <input type="number" min="1" value="1" class="quanInput">
                                <button class="changeQuanBtn">+</button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <button class="addCartBtn" onclick="addToCart(${v.id})">Add to cart</button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <button class="buyBtn">Buy now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 desription">`
                    
        d2 +=`            
                    <div class="col-sm-8 descriptionContent">
                        ${v.content}
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
    $(".productInfo1").html(d1);
    $(".productInfo2").html(d2);
}

function displayItemProduct(items){
    let s=``;
    $.each(items, function (k, v){
       s += `
        
            <div class="col-lg-4 col-md-6" >
            
                <div class="item">
                    <a href="productInfo.html?id=${v.id}">
                    <div class="col-sm-12"><img src="Product/${v.img[0]}" alt="" width="175px" height="200px"></div>
                    </a> 
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
                        <a href="#" class="addToCartBtn" data-id="${v.id}" data-name="${v.name}" data-price="${v.price}" data-img="${v.img[0]}"><img src="../GeneralFormat/CartIcon.png" alt="Shopping Cart" class="cart" width="30px"></a>
                        <button class="addToCartBtn">OK</button>
                    </div>
                       
                </div>
            
            </div>
        

        
    `; 
    // 
    });
    $('.itemShow').html(s);

}




