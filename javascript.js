
let slideIndex = 1;
showSlides();
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");   
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000);
}

function validate(){
  
  var name_re = /^[a-zA-Z\s]+$/
  var email_re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  
  var name = document.getElementById('name');
  var email = document.getElementById('email');
  var message = document.getElementById('message');
  if(!name_re.test(name.value)){
    name.style.border="1px solid red";
  }
  else{
    name.style.border="1px solid rgb(82, 82, 82)"
    
  }
  if(!email_re.test(email.value)){
    email.style.border="1px solid red";
  }
  else{
    email.style.border="1px solid rgb(82, 82, 82)"
  }
  if(message.value==''){
    message.style.border="1px solid red";
  }
  else{
    message.style.border="1px solid rgb(82, 82, 82)"
  }
  if(name.value!=0 & email.value!=0 & message.value!=0){
    name.value='';
    email.value='';
    message.value='';
    alert("Your Data is submitted!!!")
  }

}


