window.addEventListener('scroll', function(){
    let header = document.getElementById('header');
    let windowPosition= window.scrollY;

    if(windowPosition<10){
        header.classList.toggle('scrolling-inactive', windowPosition)
    }
   else{
       header.classList.toggle('scrolling-active', windowPosition)
   }
})

window.addEventListener('scroll', function(){
    let top_logo = document.getElementById('logo');
    let windowPosition= window.scrollY;

    if(windowPosition<10){
        top_logo.classList.toggle('logo-inactive', windowPosition)
    }
   else{
       top_logo.classList.toggle('logo-active', windowPosition)
   }
})

const mobile = document.getElementById('mobile_navbar');
const cross = document.getElementById('cross')

icon.addEventListener('click', ()=>{
    mobile.style.marginLeft="0"

})

cross.addEventListener('click', ()=>{
    mobile.style.marginLeft="-200%"

})







