

(function(){


   //modal//

  var messageBtn = document.querySelector("#messageBtn");
  var dialogMessage = document.querySelector("#dialogMessage");
  var overlay = document.querySelector(".modal__overlay");
  var messageSubmit = dialogMessage.querySelector("#messageSubmit");
  var MessageClose = dialogMessage.querySelector("#messageClose");
  
  var form = dialogMessage.querySelector(".modal--message__form");
  var name = form.querySelector("[name=name]");
  var email = form.querySelector("[name=email]");
  var text = form.querySelector("[name=text]");
  if(localStorage){ 
    var storageName = localStorage.getItem("name");
    var storageEmail = localStorage.getItem("email");
  }


  messageBtn.addEventListener("tap", function(evt){
    evt.preventDefault();
    console.log("!!!");
    dialogMessage.classList.add("modal__show");
    overlay.classList.add("modal__show");

    
    if((storageName)&&(storageEmail)){
      name.value = storageName;
      email.value = storageEmail;
      text.focus();
    }else{
      name.focus();
    }
  });

  form.addEventListener("submit", function(){
    if (!name.value || !email.value){
      event.preventDefault();
      dialogMessage.classList.remove("modal-error");
      dialogMessage.offsetWidth = dialogMessage.offsetWidth;
      dialogMessage.classList.add("modal-error");
    }else{
     localStorage.setItem("name", name.value);
     localStorage.setItem("email", email.value);
    }
  });
     
  messageClose.addEventListener("tap", function(evt){
    evt.preventDefault();
    dialogMessage.classList.remove("modal__show"); 
    overlay.classList.remove("modal__show");
  });

     
  window.addEventListener("keydown", function(evt){
    if (event.keyCode===27){
      if (dialogMessage.classList.contains("modal__show")){
          dialogMessage.classList.remove("modal__show"); 
          overlay.classList.remove("modal__show");
      }
    }
  });
//end//  

//map//

var mapBtn = document.querySelector("#mapBtn");
var dialogMap = document.querySelector("#dialogMap")
var mapClose =dialogMap.querySelector("#mapClose");

mapBtn.addEventListener("tap", function(evt){
  evt.preventDefault();
  dialogMap.classList.add("modal__show");
  overlay.classList.add("modal__show");
})

mapClose.addEventListener("tap", function(evt){
  evt.preventDefault();
  dialogMap.classList.remove("modal__show");
  overlay.classList.remove("modal__show");
});

window.addEventListener("keydown", function(evt){
    if (event.keyCode===27){
      if (dialogMap.classList.contains("modal__show")){
          dialogMap.classList.remove("modal__show"); 
          overlay.classList.remove("modal__show");
      }
    }
  });

//end//

//services__slider//
var serviceSlides = document.querySelectorAll('#serviceSlides .slide');
var serviceControls = document.querySelectorAll("#serviceControls .control");

var currentSlide = 0;

var arrowPrev = document.querySelector("#arrowPrev");
var arrowNext = document.querySelector("#arrowNext");

serviceControls.forEach(function(element){
  element.addEventListener("tap", function(event){
    event.preventDefault();

    serviceControls.forEach(function(el){
       el.classList.remove("active");
    })

    var button = event.target;
    button.classList.add("active");

    serviceSlides.forEach(function(el){

      el.classList.remove("showing");

      if (el.id.slice(5)===button.id.slice(7)){
        el.classList.add("showing");
      }
    }) 
  })
})

function goToSlide(n) {
 serviceSlides[currentSlide].classList.remove("showing");
 currentSlide = (n+serviceSlides.length)%serviceSlides.length;
 serviceSlides[currentSlide].classList.add("showing");
}

function nextSlide() {
 goToSlide(currentSlide+1);
}

function previousSlide() {
 goToSlide(currentSlide-1);
}



arrowNext.onclick = function() {
 
 nextSlide();
};
arrowPrev.onclick = function() {
 
 previousSlide();
};
//end//

//add to cart//
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


//slider Features//

var featureSlides = document.querySelectorAll("#featureSlides .slide");
var featureControls = document.querySelectorAll("#featureControls .control");

featureControls.forEach(function(element){
  element.addEventListener("tap", function(evt){
    
    evt.preventDefault();

    featureControls.forEach(function(el){
       el.classList.remove("active");
    })

    var button = event.target;
    button.classList.add("active");


    featureSlides.forEach(function(el){

      el.classList.remove("display");

      if (el.id.slice(5)==button.id.slice(7)){
        
        el.classList.add("display");
      }
    }) 
  })
})

})();















 
/*function nextSlide() {
    slides[currentSlide].classList.remove("modal__showing");
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].classList.add("modal__showing");
}  

function nextSlide() {
    goToSlide(currentSlide+1);
}
 
function previousSlide() {
    goToSlide(currentSlide-1);
}
 
function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slide modal__showing';
}*/



















