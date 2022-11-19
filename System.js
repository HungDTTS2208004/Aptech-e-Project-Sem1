
var setting = {
    "Home":{
            "mobileCollDropdown":false,
            "mobileProductDropdown":false
        },
    "Products":{
            "brandFilter":false,
            "cateFilter":false,
            "colorFilter":false
    }
}
$(document).ready(function(){
    $('.brandFilterContent').hide();
    $('.cateFilterContent').hide();
    $('.colorFilterContent').hide();
    $('.mobileProductDropdown').hide();
})
localStorage.setting;
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
