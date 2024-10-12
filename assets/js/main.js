/*Header*/
const navigationList = [    { "text": "Početna", "link": "#pocetna" }, 
                            { "text": "Kolekcija", "link": "#kolekcija" },  
                            { "text": "Galerija", "link": "#galerija" }, 
                            { "text": "O nama", "link": "#onama" },
                            { "text": "Kontakt", "link": "#kontakt" }, 
                            { "text": "Autor", "link": "#oautoru" } ]; 
function Navigation(){ 
function createLink(linkData){ //Tag a,href,tekst 
        var aElement = document.createElement("a"); 
            aElement.innerText = linkData.text; 
            aElement.href = linkData.link; //Li-roditelj, a-dete
        var linkElement = document.createElement("li"); 
            linkElement.appendChild(aElement); 
        return linkElement; } 
        var navigationUl = document.getElementById("navigation-list"); 
        for (var i = 0; i < navigationList.length; i++) 
             { navigationUl.appendChild(createLink(navigationList[i])); } 
                navigationUl.firstElementChild.classList.add("menu-active"); } 
        Navigation();

//Toggle - navigacija
const navToggler = document.querySelector(".nav-toggler");
      navToggler.addEventListener("click", toggleNav);
function toggleNav(){
      navToggler.classList.toggle("active");
      document.querySelector(".nav").classList.toggle("open");}
//Toggle - navigacija- zatvaranje
document.addEventListener("click", function(zatvaranje){
    if(zatvaranje.target.closest(".nav-item")){
        toggleNav();
    }
     
});
//Header-sticky
window.addEventListener("scroll", function(){
    if(this.pageYOffset > 60){
        document.querySelector(".header"). classList.add("sticky");
    }
    else{
        document.querySelector(".header"). classList.remove("sticky");
    }
});

//O nama
var nama=document.getElementById("onama");
var nizS=["psi.png"];
var aboutText=[" Pas čovekov najbolji prijatelj!"];
var aboutTextP=["Naš mali tim je nastao zbog velike ljubavi prema psima. Ideja nastanka 'Mini dog clothing' je da Vašim psima omogući topliju šetnju tokom zime. Pored naših kreacija,radimo i odeću po meri,jer znamo koliko je teško naći odgovarajuću veličinu za Vašeg malog prijatelja. "]
for(let i=0;i<nizS.length;i++){
var opis=document.createElement("div");
    opis.setAttribute("class","about-text");
    about.appendChild(opis);
var imgBox=document.createElement("img");
    opis.appendChild(imgBox);
var tekst=document.createElement("div");
    tekst.setAttribute("class","tekstopis");
    opis.appendChild(tekst);
var naslov=document.createElement("h3");
    naslov.innerHTML=aboutText[i];
var opis=document.createElement("p");
    opis.innerHTML=aboutTextP[i];
    tekst.appendChild(naslov);
    tekst.appendChild(opis);
    imgBox.setAttribute("src","assets/img/"+nizS[i]);
    imgBox.setAttribute("alt","Slika about");
    }

//Kolekcija 

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}
function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">UKLONI</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('RSD', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = total + 'RSD' 
}

 
 //Futer
var footer=document.getElementById("footer");
var okvir=document.createElement("div");
    okvir.setAttribute("class", "blok");
    footer.appendChild(okvir);
var naslovNiz=["Lokacija", "Radno vreme", "Veze"];
for(let i=0;i<naslovNiz.length;i++){
var footerBlokovi=document.createElement("div");
    footerBlokovi.setAttribute("class","footerB");
    okvir.appendChild(footerBlokovi);
var naslov=document.createElement("h3");
var tekst=document.createElement("ul");
    tekst.setAttribute("id", "ul"+[i]);
    footerBlokovi.appendChild(naslov);
    footerBlokovi.appendChild(tekst);
    naslov.innerHTML=naslovNiz[i];
}
var nizLi=[" Bulevar Kralja Aleksandra, Beograd","Telefon: 064 xxx xxx","E-mail: minidogclothes@gmail.com"];
for(let i=0;i<nizLi.length;i++){
var prvi=document.getElementById("ul0");
var liel=document.createElement("li");
    liel.innerHTML=nizLi[i];
    prvi.appendChild(liel);
   }
var nizInfo=["Ponedeljak-Petak 9h-19h","Subota 9h-17h ","Nedelja 9h-15h"];
for(let i=0;i<nizLi.length;i++){
var drugi=document.getElementById("ul1");
var nizIn=document.createElement("li");
    nizIn.innerHTML=nizInfo[i];
    drugi.appendChild(nizIn);
}
var nizMreze=["fab fa-facebook-f","fab fa-instagram", "fas fa-file-pdf", "fa fa-sitemap", "fas fa-rss"];
var mrezeLink=["https://www.facebook.com/","https://www.instagram.com/", "dokumentacija.pdf", "sitemap.xml", "rss.xml"];
var treci=document.getElementById("ul2");
for(let i=0;i<nizMreze.length;i++){
var liMreze=document.createElement("li");
    treci.appendChild(liMreze);
var putanja=document.createElement("a");
    putanja.setAttribute("href",mrezeLink[i]);
    liMreze.appendChild(putanja);
var ico=document.createElement("i");
    putanja.appendChild(ico);
    ico.setAttribute("class",nizMreze[i]);
}
//Autor 

var autor=document.getElementById("autor");
var nizP=["autor.jpg"];
var autorText=["Hristina Smiljanić 129/20"];
var autorTextP=["Moje ime je Hristina Smiljanić. Živim u Ljigu, gde sam završila Gimnaziju \"1300 kaplara\". Student sam treće godine \"Visoke ICT Škole\", smer internet tehnologije u Beogradu."]
for(let i=0;i<nizP.length;i++){
var omeni=document.createElement("div");
    omeni.setAttribute("class","autor-text");
    autor.appendChild(omeni);
var boxImg=document.createElement("img");
    omeni.appendChild(boxImg);
var paragraf=document.createElement("div");
    paragraf.setAttribute("class","paragraf-autor");
    omeni.appendChild(paragraf);
var ime=document.createElement("h2");
    ime.innerHTML=autorText[i];
var omeni=document.createElement("p");
    omeni.innerHTML=autorTextP[i];
    paragraf.appendChild(ime);
    paragraf.appendChild(omeni);
    boxImg.setAttribute("src","assets/img/"+nizP[i]);
    boxImg.setAttribute("alt","Slika about");
}

/*galerija*/

var hrefArray=[ "assets/images/1.jpg", "assets/images/2.jpg", "assets/images/3.jpg", "assets/images/4.jpg",
                "assets/images/5.jpg", "assets/images/6.jpg", "assets/images/7.jpg", "assets/images/8.jpg",
                "assets/images/9.jpg"];
var altArray=[  "Kira", "Roki", "Maza", "Bleki","Tedi","Tobi","Meda","Bole","Leo"];
var slikeId=document.getElementById("slike");
for(j=0; j<hrefArray.length; j++){
var divSlike=document.createElement("div");
    divSlike.classList.add("slike1");
    slikeId.appendChild(divSlike);
var divImg=document.createElement("div");
    divImg.setAttribute("id", "drzac");
    divImg.classList.add("hover");
    divSlike.appendChild(divImg);
var tagA=document.createElement("a");
    tagA.setAttribute("href",hrefArray[j]);
    divImg.appendChild(tagA);
var tagImg=document.createElement("img");
    tagImg.setAttribute("src",hrefArray[j]);
    tagImg.setAttribute("alt",altArray[j]);
    tagA.appendChild(tagImg);
}
$(".roww").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
        enabled: true
    }
});

$(document).ready(function(){

    $(window).scroll(function(){

        if($(this).scrollTop() > 40) {

            $('#topBtn').fadeIn();
        }
        else {
            $('#topBtn').fadeOut();
        }
    });
    $("#topBtn").click(function(){
        $('html','body').animate({scrollTop : 0},2000);

    });
});

$(".num").counterUp({delay: 10, time: 1000});


//Forma
function proveraUneteVrednosti(element, regEx, greska){
    if(regEx.test(element.value)){
    element.style.border="1px solid green";
    element.style.color = "greeen";
    greska.style.display = "none";
    return true;
    }
    else{
    element.style.border = "1px solid red"
    element.style.color = "red";
    greska.style.display = "block";
    return false;
    }
   }
   var emailRegEx = /^[a-z]+([\._]{0,2}[a-z0-9]+)*@([a-z0-9]+\.)+[a-z]{2,3}$/;
   email1.addEventListener("blur",
    function(){
    proveraUneteVrednosti(email1, emailRegEx, email1Greska);
   });
   var fullNameRegEx = /^[A-zČĆŠĐŽšđčćž]+(\s[A-zČĆŠĐŽšđčćž]+){1,3}$/;
   name1.addEventListener("blur", 
   function(){
    proveraUneteVrednosti(name1, fullNameRegEx, name1Greska);
   });
   var brojRegEx = /^[0-9]{3}(-?[0-9]{3,4}){2}$/;
   phone.addEventListener("blur", 
   function() {
    proveraUneteVrednosti(phone, brojRegEx, phoneGreska);
   });
   var porukaRegEx = /^[A-ZŠĐŽČĆ][A-zŠĐŽČĆšđžčćž,@\/_\.\s!?]+$/m;
   message.addEventListener("blur", 
   function(){
    proveraUneteVrednosti(message, porukaRegEx, messageGreska);
   });
   
  form.onsubmit = function(vrati){
            vrati.preventDefault();
        var brojGresaka = 4;
            brojGresaka-= proveraUneteVrednosti(name1, fullNameRegEx, name1Greska );
            brojGresaka-= proveraUneteVrednosti(email1, emailRegEx, email1Greska);
            brojGresaka-= proveraUneteVrednosti(phone, brojRegEx, phoneGreska);
            brojGresaka-= proveraUneteVrednosti(message, porukaRegEx, messageGreska);
        if(brojGresaka == 0)
        {
        for(let element of [name1, email1, phone, message]){
            element.value = "";
        }
            forma2.classList.add("prikazi");
        }
        else{
            forma2.classList.remove("prrikazi");
            
}
}




// Naši sponzori
var sponzori=document.getElementById("sponzori");
var brendovi=document.createElement("h2");
brendovi.innerHTML="Naši sponzori";
sponzori.appendChild(brendovi);
var drzacB=document.createElement("div");
drzacB.setAttribute("class","drzac");
sponzori.appendChild(drzacB);
var logoo=[];
for(let i=0;i<3;i++){
var divdrzac=document.createElement("div");
divdrzac.setAttribute("class", "logoo");
drzacB.appendChild(divdrzac);
logoo[i]=document.createElement("img");
logoo[i].src="assets/photo/logoo"+[i+1]+".png";
logoo[i].setAttribute("alt","Slika sponzora");
divdrzac.appendChild(logoo[i]);
}
