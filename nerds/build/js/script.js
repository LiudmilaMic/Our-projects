(function(){


   //modal//

  var modalLink = document.querySelector("#modalLink");
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


  modalLink.addEventListener("tap", function(event){
    event.preventDefault();
    dialogMessage.classList.add("modal--show");
    overlay.classList.add("modal__overlay--show");

    
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
     
  messageClose.addEventListener("tap", function(event){
    event.preventDefault();
    dialogMessage.classList.remove("modal--show"); 
    overlay.classList.remove("modal__overlay--show");
  });

     
  window.addEventListener("keydown", function(event){
    if (event.keyCode===27){
      if (dialogMessage.classList.contains("modal--show")){
          dialogMessage.classList.remove("modal--show"); 
          overlay.classList.remove("modal__overlay--show");
      }
    }
  });
//end//  

//slider//
var slides = document.querySelectorAll('#slides .slide');
var controls = document.querySelectorAll("#controls .control");

controls.forEach(function(element){
  element.addEventListener("tap", function(event){
    event.preventDefault();

    controls.forEach(function(el){
       el.classList.remove("active");
    })

    var button = event.target;
    button.classList.add("active");

    slides.forEach(function(el){

      el.classList.remove("showing");

      if (el.id.slice(5)===button.id.slice(7)){
        el.classList.add("showing");
      }
    }) 
  })
})
//end//
})();















 
/*function nextSlide() {
    slides[currentSlide].classList.remove("showing");
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].classList.add("showing");
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
    slides[currentSlide].className = 'slide showing';
}*/



















