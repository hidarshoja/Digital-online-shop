// اسلایدر هدر
const sliderHeader = document.querySelector('.sliderHeader');
const btnRemoveSlide = document.querySelector('.btnRemoveSlide');
const HeaderOneLogo1 = document.querySelector('.HeaderOneLogo1');
const rangeInput = document.querySelectorAll('.range-input input');
const priceMin = document.querySelector('.input-min');
const priceMax = document.querySelector('.input-max');
let progress = document.querySelector('.sliderPrice .progress');
let priceGap = 1000;

btnRemoveSlide.addEventListener('click' , () => {
    sliderHeader.style.display = 'none';
})

HeaderOneLogo1.addEventListener('click' , () => {
    sliderHeader.style.display= 'block';
})

rangeInput.forEach(input => {
    input.addEventListener('input' , e => {
      let minVal = parseInt(rangeInput[0].value),
       maxVal = parseInt(rangeInput[1].value);
       
        if(maxVal - minVal < priceGap){
            if(e.target.className === "range-min"){
                
                rangeInput[0].value = maxVal - priceGap;
            }else{
                rangeInput[1].value = maxVal + priceGap; 
            }
        }else{
            priceMin.value= minVal;
            priceMax.value = maxVal;
            progress.style.left = (minVal / rangeInput[0].max)*100 + "%";
            progress.style.right =100-(maxVal / rangeInput[1].max)*100 + "%"; 
        }

    });
});