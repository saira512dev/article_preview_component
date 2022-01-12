const buttons = document.querySelectorAll('.share-icon');
const overlayElement = document.querySelector('.overlay');
const visibleElement =document.querySelector('.visible');

window.addEventListener("resize", function(event) {
   if(document.body.clientWidth >786){
    visibleElement.classList.remove('hide');
    overlayElement.classList.add('hide');
   } 
})

buttons.forEach(btn => btn.addEventListener('click',function(){
   if(document.body.clientWidth >786){
        overlayElement.classList.toggle('hide');
    } else {
       visibleElement.classList.toggle('hide');
        overlayElement.classList.toggle('hide');
   }
}));