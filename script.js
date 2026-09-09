// =====================================================
// MENU MOBILE
// =====================================================

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function () {

    navbar.classList.toggle("show");

    if (navbar.classList.contains("show")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});


// =====================================================
// ĐÓNG MENU KHI CLICK VÀO LINK
// =====================================================

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("show");
        menuBtn.textContent = "☰";

    });

});


// =====================================================
// ACTIVE MENU KHI CUỘN TRANG
// =====================================================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// =====================================================
// NÚT LÊN ĐẦU TRANG
// =====================================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }

});


topBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =====================================================
// FORM LIÊN HỆ
// =====================================================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {

        alert("Vui lòng nhập đầy đủ thông tin!");

        return;
    }

    alert(
        "Cảm ơn " +
        name +
        " đã liên hệ với Nhóm 2! 🚀"
    );

    contactForm.reset();

});


// =====================================================
// HIỆU ỨNG XUẤT HIỆN KHI CUỘN
// =====================================================

const cards = document.querySelectorAll(
    ".member-card, .skill-card, .project-card, .contact-box"
);

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.1
    }
);


cards.forEach(function (card) {

    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(card);

});