document.addEventListener('scroll', () => {
    const animatedDiv = document.getElementById('signs-div');
    const scrollPosition = window.scrollY;
    const triggerPoint = window.innerHeight;

    if (scrollPosition >= triggerPoint) {
        animatedDiv.classList.add('visible');
    } else {
        animatedDiv.classList.remove('visible');
    }
});