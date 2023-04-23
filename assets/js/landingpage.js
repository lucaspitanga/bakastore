window.addEventListener('scroll', onScroll);

onScroll();

function onScroll() {
    showBackToTopButtonOnScroll();
}

function showBackToTopButtonOnScroll(){
    if(scrollY > 400){
        backToTopButton.classList.add('show')
        }else {
            backToTopButton.classList.remove('show')
        }
}

function openMenu() {
    let menuMobile = document.querySelector('#menu-aberto');
  
     {
      if (menuMobile.classList.contains('d-none')) {
        menuMobile.classList.remove('d-none');
        document.querySelector("body").classList.add("overflow_hidden");
        document.querySelector("html").classList.add("overflow_hidden"); 
        document.querySelector('#flagId').classList.add("menu_hidden");
      } else {
        menuMobile.classList.add('d-none');
        document.querySelector("body").classList.remove("overflow_hidden");
        document.querySelector("html").classList.remove("overflow_hidden");
        document.querySelector('#flagId').classList.remove("menu_hidden")
      }
    
    }
  }

  function closeMenu(){
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 700,
}).reveal('#mainDishesId, .container, #sideDishesId');


