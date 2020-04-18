var link = document.querySelector(".login-link");
var modalLogin = document.querySelector(".modal-login");
var modalCloseLogin = document.querySelector(".modal-login .modal-close");

var form = modalLogin.querySelector(".modal-login-form");
var login = form.querySelector("[name=login]");
var password = form.querySelector("[name=password]");

var storage = "";
var isStorageSuppoer = true;

var openMap = document.querySelectorAll(".map-btn");
var modalMap = document.querySelector(".modal-map");
var modalCloseMap = modalMap.querySelector(".modal-map .modal-close");

var overlay = document.querySelector(".overlay");

link.addEventListener("click", function(evt){
       evt.preventDefault();
       overlay.classList.add("overlay-show");
       modalLogin.classList.add("modal-show");
      
       if(storage){
       	login.value = storage;
       	password.focus();
       } else {
       	login.focus();
       }
    });

modalCloseLogin.addEventListener("click", function(evt){
       evt.preventDefault();
       modalLogin.classList.remove("modal-show");
       modalLogin.classList.remove("modal-error");
       overlay.classList.remove("overlay-show");
    });

form.addEventListener("submit", function(evt){
	if  (!login.value||!password.value){
		 evt.preventDefault();
		 modalLogin.classList.remove("modal-error");
		 modalLogin.offsetWidth = modalLogin.offsetWidth;
		 modalLogin.classList.add("modal-error");
	} else {
		if(isStorageSuppoer){
			localStorage.setItem("login",login.value);
		}
	}
})

try{
	storage = localStorage.getItem("login")
} catch(err){
	isStorageSuppoer =false;
}

window.addEventListener("keydown", function(evt){
	if (evt.keyCode === 27) {
		if(modalLogin.classList.contains("modal-show")){
			modalLogin.classList.remove("modal-show");
			modalLogin.classList.remove("modal-error");
			modalMap.classList.remove("modal-show");
			overlay.classList.remove("overlay-show");
		}
	}
})

/*openMap.forEach(function(element){
	element.addEventListener("click", function(evt){
       evt.preventDefault();
       overlay.classList.add("overlay-show");
       modalMap.classList.add("modal-show");
    });
})*/

for (var i = 0; i < openMap.length; i++) {
   openMap[i].addEventListener("click", function(evt){
       evt.preventDefault();
       overlay.classList.add("overlay-show");
       modalMap.classList.add("modal-show");
    });
}

modalCloseMap.addEventListener("click", function(evt){
       evt.preventDefault();
       modalMap.classList.remove("modal-show");
       overlay.classList.remove("overlay-show");
    });




