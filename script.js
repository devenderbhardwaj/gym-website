const tst = document.getElementsByClassName("testimonial");
const dots = document.getElementsByClassName("dot");
let x = document.getElementById("hamburger");
x.addEventListener('click', displaymenu);
let currentIndex = 0;
let next = 1;
displaynext(0);
function displaynext(n) {
    for(let i=0; i<tst.length; ++i) {
        tst[i].style.opacity = '0';
        tst[i].style.display = 'none';
        if (dots[i].classList.contains('activedot') == 1) {
            dots[i].classList.toggle('activedot');
        }
    }
    tst[n].style.display = 'flex';
    tst[n].style.opacity = '1';
    dots[n].classList.toggle("activedot")
}
function displaymenu() {
    if (document.getElementById("centernav").style.display == 'none') {
        document.getElementById("centernav").style.display = 'flex';
    }
    else {
        document.getElementById("centernav").style.display= 'none';
    }
}

//This is code is copied from https://www.w3schools.com/howto/howto_js_navbar_shrink_scroll.asp and modified as per requirement
// When the user scrolls down 91px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 91 || document.documentElement.scrollTop > 91) {
    document.querySelector("nav").style.padding = "0px 1.5vw";
    } else {
    document.querySelector("nav").style.padding = "20px 1.5vw";
    }
}