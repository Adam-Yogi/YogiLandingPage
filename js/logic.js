const body = document.body;
let scrollLast=0;

window.addEventListener('scroll', () =>{
    const scrollNow = window.pageYOffset;

    if(scrollNow <= 0){
        body.classList.remove("scroll-up")
    }

    if(scrollNow > scrollLast && !body.classList.contains("scroll-down")){
        body.classList.add("scroll-down");
    }

    if(scrollNow < scrollLast && body.classList.contains("scroll-down")){
        body.classList.remove("scroll-down");
    }

    scrollLast = scrollNow;
})