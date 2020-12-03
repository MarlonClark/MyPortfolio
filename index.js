// Marlon's Portfolio
'use strict'

const nav = document.querySelector('nav')
const skillBars = document.querySelectorAll('.skill-bar')
const skillArr = ['90%', '100%', '85%']

window.addEventListener('scroll', function() {
    // Shrink nav bar
    if(scrollY > 200) {
        nav.classList.add('scrolled')
    } else {
        nav.classList.remove('scrolled')
    }
    // Expand skill bars
    if(scrollY > 400) {
        skillBars.forEach(bar => {
            bar.classList.add('grow')
        })
    }

})