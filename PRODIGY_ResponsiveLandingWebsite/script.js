window.addEventListener("scroll", function(){

    let nav = document.getElementById("navbar");

    if(this.window.scrollY > 50){
        navbar.classList.add("scrolled");
    }
    else{
        nav.classList.remove("scrolled");
    }
});

function openMenu(){

let m = document.getElementById("menu");

if(m.style.display == "block")
     m.style.display="none";
 else
     m.style.display="block";
}

function theme(){

   document.body.classList.toggle("light");

}

// Scroll Reveal Animation
window.addEventListener("scroll", reveal);

function reveal(){

 let items = document.querySelectorAll(".reveal");

 for(let i = 0; i < items.length; i++){

     let height = window.innerHeight;
     let top = items[i].getBoundingClientRect().top;

     if(top < height - 100){
         items[i].classList.add("active");
     }
 }
}

// Contact Form Handling
document.getElementById("contactForm")
.addEventListener("submit", function(e){

 e.preventDefault();

 let name = document.getElementById("name").value;
 let email = document.getElementById("email").value;
 let msg = document.getElementById("msg").value;

 if(name=="" || email=="" || msg==""){
     alert("Please fill all fields");
 }
 else{
     document.getElementById("result").innerHTML =
     "Thank you " + name + "! Message Sent";

     this.reset();
 }

});

// Back to Top
let btn = document.getElementById("topBtn");

window.onscroll = function(){
 if(document.documentElement.scrollTop > 200)
     btn.style.display="block";
 else
     btn.style.display="none";
};

function topFunction(){
 window.scrollTo({top:0, behavior:'smooth'});
}

// Image Preview
function openImg(img){
   document.getElementById("preview").style.display="block";
   document.getElementById("big").src = img.src;
}

function closeImg(){
   document.getElementById("preview").style.display="none";
}

