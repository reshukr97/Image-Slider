const prevEl = document.querySelector(".prev");
const nextEl = document.querySelector(".next");
const imgContEl = document.querySelector(".img-container");
const imgCont = document.querySelectorAll("img");
let currImg = 1;
let timeOut ;

nextEl.addEventListener("click", ()=>{
    currImg+=1;
    clearTimeout(timeOut);
    updateImg();
});

prevEl.addEventListener("click", ()=>{
    currImg-=1;
    clearTimeout(timeOut);
    updateImg();
});

updateImg();

function updateImg(){
    if(currImg > imgCont.length){
        currImg=1;
    }
    else if(currImg < 1){
        currImg = imgCont.length;
    }
    imgContEl.style.transform = `translateX(-${(currImg - 1) * 25}rem)`;

    timeOut = setTimeout(()=>{
        currImg++;
        updateImg();
    }, 3000)
}