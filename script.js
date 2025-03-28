document.addEventListener("DOMContentLoaded", function () {
    const portfolioLink = document.querySelector(".portfolio-link");
    const popup = document.getElementById("popup");

    portfolioLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior

        // Show the transition effect immediately
        popup.classList.add("active");

        // Open the image instantly
        window.open("company/myportfolio.jpg", "_blank");

        // Hide the animation after a short moment
        setTimeout(() => {
            popup.classList.remove("active");
        }, 300); // Keep it very short (300ms) for smooth experience
    });
});
document.querySelectorAll('.gif-animated').forEach(img => {
    let src = img.src;
    img.src = ''; // Reset the GIF
    img.src = src; // Load only the first frame
});
