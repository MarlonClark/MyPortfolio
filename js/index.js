// Marlon's Portfolio
'use strict'

// ============== Collapse nav padding on scroll ==============
const nav = document.querySelector('nav')
window.addEventListener('scroll', function() {
    // Shrink nav bar
    if(scrollY > 100) {
        nav.classList.add('scrolled')
    } else {
        nav.classList.remove('scrolled')
    }
})

// ============== Animate skill bars with observer ============== 
const skillBarContainer = document.querySelector('.skill-bars')
const skillBarArray = document.querySelectorAll('.skill-bar')
const options = {
    root: null,
    rootMargin: "0px 0px -50px 0px",
    threshold: 1
  };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            skillBarArray.forEach(bar => {
                bar.classList.add('grow')
            })
        }
    })
}, options)

observer.observe(skillBarContainer)

// ============== Contact Form (Formspree code) ==============
window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    const form = document.getElementById("contact-form");
    const button = document.getElementById("form-btn");
    const status = document.getElementById("form-status");

    // Success and Error functions for after the form is submitted
    function success() {
        form.reset();
        button.style = "display: none ";
        status.innerHTML = "Success!";
    }

    function error() {
        status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event
    form.addEventListener("submit", function(ev) {
        ev.preventDefault();
        let data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});
  
// ============== helper function for sending an AJAX request ==============
function ajax(method, url, data, success, error) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
        } else {
        error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}