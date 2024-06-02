document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("img01");
    const images = document.querySelectorAll("img");
    const closeModal = document.querySelector(".close");
    images.forEach(img => {
        img.addEventListener("click", () => {
            if (img.src.endsWith(".jpg")) {
                modal.style.display = "block";
                modalImg.src = img.src;
            }
        });
    });
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });
});
