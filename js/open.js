const heightcontent = document.querySelector('.cart_body__content')
const btn = document.getElementsByClassName('more_btn')
console.log(btn);

btn[0].addEventListener('click',(()=>{
    heightcontent.classList.toggle('cart_body__full')
    btn[0].classList.toggle('transform_btn')
})) 