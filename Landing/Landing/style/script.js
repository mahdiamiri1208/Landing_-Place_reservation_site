const navBtn = document.querySelector(".nav__mobile-btn")
const navMobile = document.querySelector(".nav__mobile")



let navOpen = false
navBtn.addEventListener("click", function(){
    if(navOpen){
        navBtn.classList.remove("nav__mobile-btn--open")
        navMobile.classList.remove("nav__mobile--open")
        navOpen = false
    }
    else{
        navBtn.classList.add("nav__mobile-btn--open")
        navMobile.classList.add("nav__mobile--open")
        navOpen = true
    }
})