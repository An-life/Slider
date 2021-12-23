const container=document.querySelector('.container');
const rightPart=document.querySelector('.right-part');
const leftPart=document.querySelector('.left-part');
const upButton=document.querySelector('.up-button');
const downButton=document.querySelector('.down-button');
const slidesLength=leftPart.querySelectorAll('div').length;
let Index=0;

leftPart.style.top=`-${(slidesLength-1)*100}vh`;

upButton.addEventListener('click',()=>changeSlide('up'));
downButton.addEventListener('click',()=>changeSlide('down'));
document.addEventListener('mousewheel',event=> {
    if (event.deltaY < 0) {
        changeSlide('up')
    } else if (event.deltaY > 0) {
        changeSlide('down')
    }
})
const changeSlide=(direction)=>{
    const slideHight=container.clientHeight;
    if(direction==='up'){
        Index++
        if (Index>slidesLength-1){
            Index=0;
        }
    }else  if(direction==='down'){
        Index--
        if (Index<0){
            Index=slidesLength-1;
        }}
    rightPart.style.transform=`translateY(-${Index*slideHight}px)`
    leftPart.style.transform=`translateY(${Index*slideHight}px)`
};


