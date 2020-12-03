// Marlon's Portfolio
'use strict'

const nav = document.querySelector('nav')

window.addEventListener('scroll', function() {
    // Shrink nav bar
    if(scrollY > 200) {
        nav.classList.add('scrolled')
    } else {
        nav.classList.remove('scrolled')
    }
})

const skillBarContainer = document.querySelector('.skill-bars')
const skillBarArray = document.querySelectorAll('.skill-bar')

let animateSkillBars = () => {
    console.log('io working')
    skillBarArray.forEach(bar => {
        bar.classList.add('grow')
    })
}
let io = new IntersectionObserver(animateSkillBars);
io.observe(skillBarContainer)