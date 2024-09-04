const menu = document.querySelector(".menu");
const taskbar = document.querySelector(".taskbar");

menu.addEventListener("click", function(){
  taskbar.classList.add("show-taskbar");
});

const hidetask = document.querySelector(".fa-xmark");

hidetask.addEventListener("click", function(){
  taskbar.classList.remove("show-taskbar");
});
document.addEventListener('scroll', function () {
  var navbar = document.querySelector('.nav');
  var scrollPosition = window.scrollY;
  var viewportHeight = window.innerHeight;

  // إذا كان موضع التمرير أكبر من ارتفاع 100vh
  if (scrollPosition >= viewportHeight) {
      navbar.classList.add('fixed');
  } else {
      navbar.classList.remove('fixed');
  }
});
