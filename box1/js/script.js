
const thumbnails = document.getElementsByClassName("thumbnail");
const slider = document.getElementById("slider");
const buttonRight = document.getElementById("slide-right");
const buttonLeft = document.getElementById("slide-left");
// laptop
const buttonRightLaptop = document.getElementById("slide-right1");
const buttonLeftLaptop = document.getElementById("slide-left1");
 const content4 = document.querySelector('.content4');
const laptop = document.getElementsByClassName('laptop');
const logoMobile = document.querySelector('.logoMobile1');
const logoComputer = document.querySelector('.logoComputer');
const logoKey = document.querySelector('.logoKeyboard');
const logoMonitor = document.querySelector('.logoMonitor');
const slides = document.getElementsByClassName('slide');
const slideMobali = document.getElementById('slideMobail');
const slideLaptop = document.getElementById('slidelaptop');
const slideKeyboard = document.getElementById('slidekeyboard');
const slideMonitor = document.getElementById('slidemonitor');
const priceComputer = document.querySelector('.priceComputer');
const priceMobail = document.querySelector('.priceMobail');
const priceKey = document.querySelector('.priceKeyboard');
const priceMonitor = document.querySelector('.priceMonitor');
// اسلایدر هدر
const sliderHeader = document.querySelector('.sliderHeader');
const btnRemoveSlide = document.querySelector('.btnRemoveSlide');
const HeaderOneLogo1 = document.querySelector('.HeaderOneLogo1');

btnRemoveSlide.addEventListener('click' , () => {
    sliderHeader.style.display = 'none';
})

HeaderOneLogo1.addEventListener('click' , () => {
    sliderHeader.style.display= 'block';
})

function displayNone(){
    for(let i = 0 ; i < slides.length ; i++){
        slides[i].style.display = 'none';
    }
}

function noActive() {
    for(let i = 0 ; i < slides.length ; i++){
        slides[i].classList.remove('active');
    }
}

logoMobile.addEventListener('click' , () => {
    displayNone();
    noActive();
   slideMobali.style.display = 'block';
   slideMobali.classList.add('active');
})

logoComputer.addEventListener('click' , () =>{
    displayNone();
    noActive();
    slideLaptop.style.display = 'block';
    slideLaptop.classList.add('active');
})

logoKey.addEventListener('click' , () =>{
    displayNone();
    noActive();
    slideKeyboard.style.display = 'block';
    slideKeyboard.classList.add('active');
})

logoMonitor.addEventListener('click' , () =>{
    displayNone();
    noActive();
    slideMonitor.style.display = 'block';
    slideMonitor.classList.add('active');
})
   
logoMobile.addEventListener('mouseenter' , () => {
    priceComputer.style.display = 'block';
})
logoMobile.addEventListener('mouseout' , () => {
    priceComputer.style.display = 'none';
})

logoComputer.addEventListener('mouseenter' , () => {
    priceMobail.style.display = 'block';
})
logoComputer.addEventListener('mouseout' , () => {
    priceMobail.style.display = 'none'
})

logoKey.addEventListener('mouseenter' , () => {
    priceKey.style.display = 'block';
})
logoKey.addEventListener('mouseout' , () => {
    priceKey.style.display = 'none'
})

logoMonitor.addEventListener('mouseenter' , () => {
    priceMonitor.style.display = 'block';
})
logoMonitor.addEventListener('mouseout' , () => {
    priceMonitor.style.display = 'none'
})

buttonLeftLaptop.addEventListener('click' , () => {
    content4.scrollLeft -=125;
});

buttonRightLaptop.addEventListener('click' , () => {
    console.log('clicked');
    console.log(buttonRightLaptop);
    content4.scrollLeft +=125;
})


buttonLeft.addEventListener('click' , () => {
    slider.scrollLeft -=125;
});

buttonRight.addEventListener('click' ,() => {
    slider.scrollLeft +=125; 
});

const maxScrollLeft= slider.scrollWidth - slider.clientHeight;

function autoPlay1(){
    if(content4.scrollLeft > (maxScrollLeft -1)){
        content4.scrollLeft -= maxScrollLeft;
    }else{
        content4.scrollLeft += 1;
    }
}

let play1 = setInterval(autoPlay1 , 50);

for(let i = 0 ; i < laptop.length ; i++ ){
    laptop[i].addEventListener('mouseover' , () => {
        clearInterval(play1);
    })
    laptop[i].addEventListener('mouseout' , () => {
        return play1 = setInterval(autoPlay1 , 50)
    })
}



function autoPlay(){
    if(slider.scrollLeft > (maxScrollLeft - 1)){
        slider.scrollLeft -= maxScrollLeft;
    }else {
        slider.scrollLeft += 1; 
    }
}


let play = setInterval(autoPlay , 50);

for(let i = 0 ; i < thumbnails.length ; i++){
    thumbnails[i].addEventListener("mouseover" , () => { 
        clearInterval(play);
    })
    thumbnails[i].addEventListener("mouseout" , () => { 
        return play = setInterval(autoPlay , 50)
    })
}








