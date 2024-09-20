const navToggle = document.getElementById('nav--toggle');
    const navClose = document.getElementById('nav--close');
    const navMenu = document.getElementById('nav--menu');

    if(navToggle){
    navToggle.addEventListener('click', ()=> {
        navMenu.classList.add("show-menu") ;
    })
    }

    if(navClose){
    navClose.addEventListener('click', ()=> {
      navMenu.classList.remove("show-menu") 
    })
}


const navlink = document.querySelectorAll(".nav-link")

const linkaction = () =>{
   
    navMenu.classList.remove("show-menu");

}
navlink.forEach((n)=>{
   n.addEventListener('click',linkaction)
})

const swiperwatches  = new Swiper('.home-swiper', {
    
    loop: true,
    spaceBetween: 32,
    grabCursor:true,
    effect: 'creative',
    creativeEffect:{
        prev:{
            translate : [-100,0,-500],
            rotate:[0,0,15],
            opacity: 0
        },
        next:{
            translate : [100,0,-500],
            rotate:[0,0,-15],
            opacity: 0
        }

    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  
    
  })