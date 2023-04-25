const carouselSlide = document.querySelector('.carousel-slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const imageCounter = document.querySelector('.image-counter');
let imageIndex = 1;
let totalImages = carouselSlide.children.length;

function slideToImage() {
    carouselSlide.style.transform = `translateX(-${(imageIndex - 1) * 20}%)`;
    imageCounter.innerHTML = `${imageIndex}/${totalImages}`;
}

prevButton.addEventListener('click', () => {
    if (imageIndex === 1) {
        imageIndex = totalImages;
    } else {
        imageIndex--;
    }
    slideToImage();
});

nextButton.addEventListener('click', () => {
    if (imageIndex === totalImages) {
        imageIndex = 1;
    } else {
        imageIndex++;
    }
    slideToImage();
});

slideToImage();
