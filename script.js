$(document).ready(function () {


    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    function scrollToBottom() {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }

    $('.navbar .menu li a').click(function () {
        $('html').css("scrollBehavior", "smooth");
    });

    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    var typed = new Typed(".typing", {
        strings: ["Frontend Developer", "UI/UX Designer", "Open Source Contributor", "Prototyper"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Frontend Developer", "UI/UX Designer", "Open Source Contributor", "Prototyper"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});

let scrollingDown = false;

function toggleScroll() {
    scrollingDown = !scrollingDown;
    if (scrollingDown) {
        scrollToBottom();
    } else {
        scrollToTop();
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}

function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}

// Close the modal with the escape key
document.onkeydown = function(event) {
    if (event.key === 'Escape') {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => modal.style.display = 'none');
    }
};