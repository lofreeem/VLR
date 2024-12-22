// scripts.js

function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}
document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', animateOnScroll);

    function animateOnScroll() {
        let animatedBlocks = document.querySelectorAll('.animate-up');
        animatedBlocks.forEach(block => {
            const blockTop = block.getBoundingClientRect().top;
            const viewHeight = window.innerHeight;
            const offset = 100;

            if (blockTop < viewHeight + offset) {
                block.classList.add('show');
            } else {
                block.classList.remove('show');
            }
        });
    }

    animateOnScroll();
});