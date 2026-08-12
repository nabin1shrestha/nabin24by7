const photos = document.querySelectorAll(".photo");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxNumber = document.getElementById("lightboxNumber");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxClose = document.getElementById("lightboxClose");

photos.forEach((photo, index) => {

    photo.addEventListener("click", () => {

        const image = photo.querySelector("img");
        const title = photo.querySelector("strong");

        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;

        lightboxNumber.textContent =
            String(index + 1).padStart(2, "0");

        lightboxTitle.textContent =
            title ? title.textContent : image.alt;

        lightbox.classList.add("active");

        document.body.style.overflow = "hidden";
    });

});


function closeLightbox() {

    lightbox.classList.remove("active");

    document.body.style.overflow = "";
}


lightboxClose.addEventListener("click", closeLightbox);


lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {
        closeLightbox();
    }

});


document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeLightbox();
    }

});