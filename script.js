// Slideshow
let index = 0;
const slides = document.querySelectorAll('.slide');
setInterval(() => {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}, 3000);

// Collapsible Section
const collapsibleHeader = document.querySelector('.collapsible-header');
const collapsibleContent = document.querySelector('.collapsible-content');
collapsibleHeader.addEventListener('click', () => {
    collapsibleContent.style.maxHeight =
        collapsibleContent.style.maxHeight ? null : '100px';
});
