const sliderHeader = document.querySelector('.sliderHeader');
const btnRemoveSlide = document.querySelector('.btnRemoveSlide');
const HeaderOneLogo1 = document.querySelector('.HeaderOneLogo1');

btnRemoveSlide.addEventListener('click' , () => {
    sliderHeader.style.display = 'none';
})

HeaderOneLogo1.addEventListener('click' , () => {
    sliderHeader.style.display= 'block';
})