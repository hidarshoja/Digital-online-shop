const clickBuy = document.querySelector('.clickBuy');
const sliderBuy = document.querySelector('.sliderBuy');
const inputTag2 = document.querySelector('.inputTag2');
const User = document.getElementById('demo');
const numberLaptop = document.querySelector('.numberLaptop');
const plusAir = document.querySelector('.plusAir');
const minusAir = document.querySelector('.minusAir');
const numbrAir = document.querySelector('.numbrAir');
const numberBox =document.querySelector('.numberBox');
const number = document.querySelector('.number1').value;
const result = document.querySelector('.number1');
const number2 = document.querySelector('.number2').value;
const totalPrice = document.querySelector('#totalPrice');
const number1 = document.querySelector('.number2').value;
const result1 = document.querySelector('.number2');

console.log(result1);


let x = number;
let y = number1;

function zero(){
    result.value = 1;
    result1.value = 1;
}

function plus(){
    x++;
    result.value = x;
    numberBox.innerHTML = (parseInt(result.value) + parseInt(result1.value));
    totalPrice.innerHTML = (parseInt(result.value)*450) + (parseInt(result1.value)*150);
}

function minus(){
    if( x > 0){
        result.value = x;
        x--;
        totalPrice.innerHTML = `$ ${(parseInt(result.value)*450) + (parseInt(result1.value)*150)}`;
        numberBox.innerHTML = (parseInt(result.value) + parseInt(result1.value));
             }
}
function plus2(){
    y++;
    result1.value = y;
    numberBox.innerHTML = (parseInt(result.value) + parseInt(result1.value));
    totalPrice.innerHTML = `$ ${(parseInt(result.value)*450) + (parseInt(result1.value)*150)}`;
}
function minus2(){
    if( y > 0){
        result1.value = y;
        y--;
        totalPrice.innerHTML = `$ ${(parseInt(result.value)*450) + (parseInt(result1.value)*150)}`;
        numberBox.innerHTML = (parseInt(result.value) + parseInt(result1.value));
             }
        }

zero();
// plusAir.addEventListener('click' , () => {
//    y++;
//    numbrAir.innerText = y;
//    totalAir = numbrAir.innerHTML;
// })
//  minusAir.addEventListener('click' , () => {
//     if(y > 1){
//         y--;
//         numbrAir.innerText = y;
//         totalAir = numbrAir.innerHTML;
//     }
// })


    // plusLaptop.addEventListener('click' , () =>{
    //     x++;
    //     numberLaptop.innerText = x;
    //   totalLaptop = numberLaptop.innerText;
    // })
    // minusLaptop.addEventListener('click' , () => {
    //     if(x > 1){
    //         x--;
    //         numberLaptop.innerText = x;
    //         totalLaptop = numberLaptop.innerText;
    //     }
    // })



function add(){
    let styleUser = getComputedStyle(User);
    let result = styleUser.getPropertyValue('display');
    let inputTag = getComputedStyle(inputTag2);
    let result2 = inputTag.getPropertyValue('display');

    sliderBuy.classList.toggle('sliderBuy');
    if(result === 'block' && result2 === 'flex'){
        User.style.display = 'none';
        inputTag2.style.display = 'none';
    }else{
        User.style.display = 'block';
        inputTag2.style.display = 'flex';
    }
    // if(result2 === 'block'){
    //     inputTag.style.display = 'none';
    // }else{
    //     inputTag.style.display = 'block';
    // }
}


// clickBuy.addEventListener('click' , () => {
//     sliderBuy.style.display = 'block';
//     User.style.display = 'none';
//      inputTag2.style.display = 'none';
//      clickBuy.addEventListener('click' , () => {
//         sliderBuy.style.display = 'none';
//         User.style.display = 'block';
//         inputTag2.style.display = 'flex';
//      })
// })
