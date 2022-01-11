const buttons = document.querySelectorAll('.share-icon');
const overlayElement = document.querySelector('.overlay');
const visibleElement =document.querySelector('.visible');

buttons.forEach(btn => btn.addEventListener('click',function(){
    const ifBigScreen = getComputedStyle(btn.parentElement).getPropertyValue('--if-big-screen');
    if (ifBigScreen == "true"){
        visibleElement.classList.remove('hide');
        overlayElement.classList.toggle('hide');

    } else {
        visibleElement.classList.toggle('hide');
        overlayElement.classList.toggle('hide');
    }
}));