function toggleMenu(){
    document.getElementById("navLinks").classList.toggle("active");
}

//home page
const track = document.getElementById("track");
const total = 5; // real images
let index = 0;

function moveSlider() {
    track.style.transform = `translateX(-${index * 25}%)`;
}

// Auto infinite loop
function nextSlide() {
    index++;
    moveSlider();

    // when slider reaches duplicate end → reset instantly to first real slide
    if (index === total) {
        setTimeout(() => {
            track.style.transition = "none";
            index = 0;
            moveSlider();
            setTimeout(() => {
                track.style.transition = "transform 0.6s ease";
            }, 20);
        }, 600);
    }
}

function prevSlide() {
    if (index === 0) {
        track.style.transition = "none";
        index = total;
        moveSlider();
        setTimeout(() => {
            track.style.transition = "transform 0.6s ease";
            index--;
            moveSlider();
        }, 20);
    } else {
        index--;
        moveSlider();
    }
}

document.getElementById("next").onclick = nextSlide;
document.getElementById("prev").onclick = prevSlide;

setInterval(nextSlide, 5000);


//buttons

    const buttons = document.querySelectorAll(".all-btn");
    const items = document.querySelectorAll(".menu-item");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            let filter = btn.getAttribute("data-filter");

            items.forEach(item => {
                let category = item.getAttribute("data-category");

                if (filter === "all" || filter === category) {
                    item.style.display = "block";
                } 
                else {
                    item.style.display = "none";
                }
            });
        });
    });

//contact

document.getElementById("bookBtn").addEventListener("click", function () {

    const name = document.getElementById("name").value.trim();
    const lname = document.getElementById("lname").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const date = document.getElementById("date").value.trim();
    const time = document.getElementById("time").value.trim();

    if (!name || !lname || !phone || !email || !date || !time) {
        alert("Please fill in all fields before booking a table.");
        return;
    }


    const msg = document.getElementById("successMessage");
    msg.style.display = "block";


    setTimeout(() => {
        msg.style.display = "none";
    }, 3000);

});