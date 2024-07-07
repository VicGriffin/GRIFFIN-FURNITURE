let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let backButton = document.getElementById('back');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let carousel = document.querySelector('.carousel');
let listREACT = document.querySelector('.carousel .list')

nextButton.onclick = function(){
    showSlider('next');
}
prevButton.onclick = function(){
    showSlider('prev');
}
let unAcceptClick;
const showSlider = (type) =>{
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    corousel.classList.remove('prev', 'next');
    let items = document.querySelectorAll('.carousel .list .items');
    if(type === 'next'){
        listREACT.appendChild(items[0]);
        carousel.classList.add('next');
    }else{
        let positionLast = items.length -1;
        listREACT.prepend(items[positionLast])
        carousel.classList.add('prev')
    }
    clearTimeout(unAcceptClick);
    unAcceptClick = setTimeout(() =>{
    nextButton.style.pointerEvents = 'auto';
    nextButton.style.pointerEvents = 'auto';
    },2000);
}
seeMoreButtons.forEach(button =>{
    button.onclick = function(){
        carousel.classList.add('showDetail');
    }
})
backButton.onclick = function(){
    carousel.classList.remove('showDetail');
}