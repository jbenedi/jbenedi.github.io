$(document).ready(function() {
    // Load the header and footer
    $("#importheader").load("https://jbenedict.work/assets/header.html", function() {
        console.log("Header loaded successfully");
    });

    $("#importfooter").load("https://jbenedict.work/assets/footer.html", function() {
        console.log("Footer loaded successfully");
    });

    // Set the current year in the footer or wherever "year" element exists
    var today = new Date();
    let year = today.getFullYear();
    let yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.innerHTML = year;
    } else {
        console.error("Element with ID 'year' not found in the DOM.");
    }

    // Initialize slideshow
    let slideIndex = 1;
    showSlides(slideIndex);

    // Auto-scroll to the top of the page
    autoScroll();
});

function autoScroll() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

function navBar() {
    document.getElementById("dropdownMenu").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.navbar-iconbutton')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (slides.length === 0 || dots.length === 0) return; // Guard clause if no slides or dots

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function delayedRedirect(element) {
    document.body.style.animation = '0.5s ease-out 0s 1 unReveal forwards';
    const url = element.getAttribute('data-url');
    setTimeout(function() {
        window.location.href = url;
    }, 500);
}
