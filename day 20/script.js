document.querySelector('.btn').addEventListener('click', function (event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    
    // Définir les dimensions de l'onde
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    // Appliquer le style à l'onde
    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    ripple.style.top = `${event.clientY - button.offsetTop - radius}px`;
    ripple.classList.add('ripple');
    
    // Ajouter l'onde au bouton
    button.appendChild(ripple);

    // Retirer l'élément de l'onde après l'animation
    ripple.addEventListener('animationend', () => {
        ripple.remove();
    });
});