// Récupérer les éléments du DOM
let btn_minus = document.querySelector('.minus');
let btn_plus = document.querySelector('.plus');
let display_draw_size = document.querySelector('.draw_size');
const canvas = document.getElementById('canvas');

document.querySelector('.clear').addEventListener('click', ()=>{
    canvas.innerHTML = ''
    ctx.stroke();
})

// Initialisation de la taille du dessin
let size = 5;
display_draw_size.innerHTML = `${size}`;

// Obtenir le contexte de dessin 2D du canevas
const ctx = canvas.getContext('2d');
ctx.lineWidth = size; // Set initial line width

// Mise à jour de la taille du dessin et de la largeur du trait de la toile
function updateSize(newSize) {
    size = newSize;
    display_draw_size.innerHTML = `${size}`;
    ctx.lineWidth = size; // Apply new size to canvas context
}

// Diminuer la taille lorsque l'on clique sur le bouton "moins".
btn_minus.addEventListener('click', () => {
    if (size > 5) {
        updateSize(size - 5);
    }
});

// Augmenter la taille lorsque l'on clique sur le bouton plus
btn_plus.addEventListener('click', () => {
    if (size < 50) {
        updateSize(size + 5);
    }
});

// Dessiner des variables d'état
let isDrawing = false;
let lastX, lastY;

// Commencer à dessiner lorsque la souris est enfoncée
canvas.addEventListener('mousedown', (event) => {
    isDrawing = true;
    lastX = event.offsetX ;
    lastY = event.offsetY;
});

// Dessiner sur la toile en fonction des mouvements de la souris
canvas.addEventListener('mousemove', (event) => {
    if (isDrawing) {
        const currentX = event.offsetX;
        const currentY = event.offsetY;
        ctx.beginPath();
        // ctx.arc(60, 65, 5, 0, Math.PI * 2, true)
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(currentX, currentY);
        ctx.stroke();

        lastX = currentX;
        lastY = currentY;
    }
});

// Arrêter de dessiner sur la souris en haut
canvas.addEventListener('mouseup', () => {
    isDrawing = false;
});

// Arrêter le dessin si la souris quitte le canevas
canvas.addEventListener('mouseleave', () => {
    isDrawing = false;
});



