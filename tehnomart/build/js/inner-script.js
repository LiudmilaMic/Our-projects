
(function(){

//add to cart//
var overlay = document.querySelector(".modal__overlay");
var buyButton = document.querySelectorAll(".hover__btn--buy");
var dialogAddCart = document.querySelector("#addCart");
var addCartClose = dialogAddCart.querySelector("#addCartClose");

buyButton.forEach(function(element){
  element.addEventListener("tap", function(evt){
    evt.preventDefault();
    dialogAddCart.classList.add("modal__show");
    overlay.classList.add("modal__show");
  })
});

addCartClose.addEventListener("tap", function(evt){
  evt.preventDefault();
  dialogAddCart.classList.remove("modal__show");
  overlay.classList.remove("modal__show");
});

window.addEventListener("keydown", function(evt){
    if (event.keyCode===27){
      if (dialogAddCart.classList.contains("modal__show")){
          dialogAddCart.classList.remove("modal__show"); 
          overlay.classList.remove("modal__show");
      }
    }
  });
})();


































