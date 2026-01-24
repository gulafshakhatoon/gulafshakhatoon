const text = ["Web Developer."];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;
const speed = 120;

function typeEffect() {
    const typing = document.getElementById("typing");

    if (!isDeleting && charIndex <= text[index].length) {
        currentText = text[index].substring(0, charIndex++);
    }

    if (isDeleting && charIndex >= 0) {
        currentText = text[index].substring(0, charIndex--);
    }

    typing.innerHTML = currentText;

    if (charIndex === text[index].length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % text.length;
    }

    setTimeout(typeEffect, isDeleting ? 80 : speed);
}

typeEffect();

/* ABOUT SECTION SCROLL ANIMATION */

const aboutSection = document.querySelector(".about-section");

window.addEventListener("scroll", () => {
  const sectionTop = aboutSection.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight / 1.2;

  if (sectionTop < triggerPoint) {
    aboutSection.classList.add("show");
  }
});


/* ================= 
SKILL BAR + % ANIMATION 
==================*/

const skillsSection = document.querySelector(".skills-section");
const skillBars = document.querySelectorAll(".skill-progress");

const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      skillBars.forEach(bar => {
        let target = bar.dataset.progress;
        let percent = bar.parentElement.previousElementSibling
                          .querySelector(".skill-percent");
        let count = 0;

        bar.style.width = target + "%";

        let interval = setInterval(() => {
          if (count >= target) {
            clearInterval(interval);
          } else {
            count++;
            percent.innerText = count + "%";
          }
        }, 15);
      });
      skillObserver.disconnect();
    }
  });
}, { threshold: 0.4 });

skillObserver.observe(skillsSection);

/* ==============================
   PROJECT MODAL FUNCTIONALITY
================================ */

// OPEN MODAL
function openModal(title, description, image, github, demo) {
  const modal = document.getElementById("projectModal");

  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalDescription").innerText = description;
  document.getElementById("modalImage").src = image;

  // ✅ USE PASSED LINKS (THIS IS THE FIX)
  document.getElementById("githubLink").href = github;
  document.getElementById("demoLink").href = demo;

  modal.style.display = "flex";
}


// CLOSE MODAL (X BUTTON)
function closeModal() {
  document.getElementById("projectModal").style.display = "none";
}


// CLOSE MODAL WHEN CLICK OUTSIDE
window.addEventListener("click", function (e) {
  const modal = document.getElementById("projectModal");
  if (e.target === modal) {
    modal.style.display = "none";
  }
});


/* ==============================
   PROJECT CARD HOVER EFFECT
   (EXTRA PROFESSIONAL TOUCH)
================================ */

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-12px) scale(1.02)";
    card.style.boxShadow = "0 20px 35px rgba(44,255,0,0.3)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)";
    card.style.boxShadow = "none";
  });
});

/*==================
CONTACT SECTION
==================*/
// 1️⃣ EmailJS init (TOP pe)
emailjs.init("YOUR_PUBLIC_KEY"); // ← yahan public key aayegi


// 2️⃣ Form submit handle
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_xxxxxxxx",   // ✅  Service ID
    "template_xxxxxxxx",   // ✅  Template ID
    this
  ).then(() => {
    alert("Message sent successfully 🚀");
    this.reset();
  }, (error) => {
    alert("Message not sent ❌");
    console.log(error);
  });
});



/*===================
MOBILE RESPONSIVE
===================*/
const menuIcon = document.querySelector(".menu-icon");
const navList = document.querySelector("nav ul");

menuIcon.addEventListener("click",()=>{
  navList.classList.toggle("show");
});


