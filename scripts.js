let slideIndex = 0;

function moveSlide(n) {
    const slides = document.querySelectorAll('.carousel-slide img');
    slideIndex += n;

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    const slideWidth = slides[0].clientWidth;
    document.querySelector('.carousel-slide').style.transform = `translateX(${-slideIndex * slideWidth}px)`;
}

function expandImage(img) {
    const overlay = document.getElementById('overlay');
    const overlayImage = document.getElementById('overlayImage');
    overlayImage.src = img.src;
    overlay.style.display = 'flex';
}

function closeOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}

 // Função para mostrar ou esconder o popup
 function checkOrientation() {
    const rotateNotification = document.getElementById('rotate-notification');
    if (window.innerWidth < 768 && window.innerHeight > window.innerWidth) {
        rotateNotification.style.display = 'block';
    } else {
        rotateNotification.style.display = 'none';
    }
}

// Verificar orientação ao carregar e ao redimensionar a janela
window.addEventListener('load', checkOrientation);
window.addEventListener('resize', checkOrientation);