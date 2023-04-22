const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');

let isDragging = false;
let startX;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID;

carouselItems.forEach((item, index) => {
    item.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - carousel.offsetLeft;
        prevTranslate = currentTranslate;
        item.classList.add('active');
        cancelAnimationFrame(animationID);
    });

    item.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const x = e.pageX - carousel.offsetLeft;
            const distance = x - startX;
            currentTranslate = prevTranslate + distance;
            carouselItems.forEach((item, i) => {
                if (i !== index) {
                    item.style.transform = `translateX(${currentTranslate}px)`;
                }
            });
        }
    });

    item.addEventListener('mouseup', () => {
        isDragging = false;
        carouselItems.forEach((item) => {
            item.classList.remove('active');
        });
        animate();
    });

    item.addEventListener('mouseleave', () => {
        isDragging = false;
        carouselItems.forEach((item) => {
            item.classList.remove('active');
        });
        animate();
    });
});

function animate() {
    animationID = requestAnimationFrame(animate);
    carouselItems.forEach((item) => {
        item.style.transform = `translateX(${currentTranslate}px)`;
    });
}
