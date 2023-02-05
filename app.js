const quoteAnimate = () =>{
    let quoteText = document.querySelector('.quote-text-initial');
    let quotePosition = quoteText.getBoundingClientRect().top;
    let scrollPosition = window.innerHeight/1.1;

    if(quotePosition < scrollPosition){
        quoteText.classList.add("quote-text-animate");
    }
    if(quotePosition > scrollPosition){
        quoteText.classList.remove("quote-text-animate");
    }
}


document.addEventListener("scroll",quoteAnimate);