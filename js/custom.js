let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () =>{
    searchForm.classList.toggle("active");
    carthForm.classList.remove("active");
    loginForm.classList.remove("active");
    menuItem.classList.remove("active");
}
let carthForm = document.querySelector(".shopping-cart");

document.querySelector("#cart-btn").onclick = () =>{
    carthForm.classList.toggle("active");
    loginForm.classList.remove("active");
    searchForm.classList.remove("active");
    menuItem.classList.remove("active");
}

let loginForm = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () =>{
    loginForm.classList.toggle("active");
    carthForm.classList.remove("active");
    menuItem.classList.remove("active");
}

let menuItem = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () =>{
    menuItem.classList.toggle("active");
    loginForm.classList.remove("active");
    searchForm.classList.remove("active");
    carthForm.classList.remove("active");
   
}

window.scroll = () =>{
    loginForm.classList.remove("active");
    searchForm.classList.remove("active");
    menuItem.classList.remove("active");
    carthForm.classList.remove("active");
}


var swiper = new Swiper(".products-slider", {
    loop:true,
    
    spaceBetween: 20,

    autoplay: {
        delay :2500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
  
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        
      },
      1024: {
        slidesPerView: 3,
      
      },
    },
  });


var swiper = new Swiper(".review-slider", {
    loop:true,
    
    spaceBetween: 20,

    autoplay: {
        delay :2500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
  
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        
      },
      1024: {
        slidesPerView: 3,
      
      },
    },
  });

