const minus = document.querySelector('.muins');
const number = document.querySelector('.number1').value;
const number2 = document.querySelector('.number2').value;
const plus = document.querySelector('.plus');
const result = document.querySelector('.number1');
const demo = document.querySelector('.demo');
const demo2 = document.querySelector('.demo2');

 let x = number;

function zero(){
    result.value = 0;
}


 plus.addEventListener('click' , () => {
    x++;
    result.value = x;
    console.log(result.value);
    demo.innerHTML = (parseInt((result.value)) + parseInt((number2)));
    demo2.innerHTML =  (parseInt((result.value)*45000) + parseInt((number2)*100000))
})

zero();





