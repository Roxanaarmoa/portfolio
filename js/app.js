
// Revelar elementos con hidden

function revealOnScroll() {
    const elementsToReveal = document.querySelectorAll('.hidden');

    elementsToReveal.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    const revealTrigger = 150; 
    if (elementPosition < windowHeight - revealTrigger) {
        element.classList.add('revealed');
    }
    });
}

window.addEventListener('scroll', revealOnScroll);

revealOnScroll();