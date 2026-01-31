// Typed Text Effect
var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Backend Developer", "Full Stack Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1000,
    loop: true
});

// Active Navbar on Scroll
// const sections = document.querySelectorAll("section");
// const navLinks = document.querySelectorAll(".navbar a");

// window.addEventListener("scroll", () => {
//     let current = "";

//     sections.forEach(section => {
//         const sectionTop = section.offsetTop - 150;
//         if (scrollY >= sectionTop) {
//             current = section.getAttribute("id");
//         }
//     });

//     navLinks.forEach(link => {
//         link.classList.remove("active");
//         if (link.getAttribute("href") === `#${current}`) {
//             link.classList.add("active");
//         }
//     });
// });
