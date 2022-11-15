const sliderHeader = document.querySelector('.sliderHeader');
const btnRemoveSlide = document.querySelector('.btnRemoveSlide');
const HeaderOneLogo1 = document.querySelector('.HeaderOneLogo1');

//sliderRight
const sliderRight = document.querySelector('.sliderRight');
const buy = document.getElementById('buy');
const buyBr = document.querySelector('.buyPr');
const content2 = document.querySelector('.content2');


buy.addEventListener('click' , () => {
    sliderRight.style.right = '20px';
    sliderRight.style.transition = '2s';
})

buyBr.addEventListener('click' , () => {
    sliderRight.style.right = '20px';
    sliderRight.style.transition = '2s';
    content2.style.display = 'none';
})

btnRemoveSlide.addEventListener('click' , () => {
    sliderHeader.style.display = 'none';
})

HeaderOneLogo1.addEventListener('click' , () => {
    sliderHeader.style.display= 'block';
})