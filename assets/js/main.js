$(document).ready(function () {
    $("#importheader").load("https://jbenedict.work/assets/header.html", function () {
        console.log("Header loaded successfully");
    });

    $("#importfooter").load("https://jbenedict.work/assets/footer.html", function () {
        console.log("Footer loaded successfully");
    });

    var today = new Date();
    let year = today.getFullYear();
    let yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.innerHTML = year;
    } else {
        console.error("Element with ID 'year' not found in the DOM.");
    }

    waitForSlides();
});

function navBar() {
    document.getElementById("dropdownMenu").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches(".navbar-iconbutton")) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
    }
};

function waitForSlides() {
    const checkSlides = setInterval(() => {
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");

        if (slides.length > 0 && dots.length > 0) {
            clearInterval(checkSlides);
            let slideIndex = 1;
            showSlides(slideIndex);
        }
    }, 100);
}

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (slides.length === 0 || dots.length === 0) return;

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
    document.body.style.animation = "0.5s ease-out 0s 1 unReveal forwards";
    const url = element.getAttribute("data-url");
    setTimeout(function () {
        window.location.href = url;
    }, 500);
}
