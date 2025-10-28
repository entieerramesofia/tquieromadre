// selecciona el botón de la varita
const wandBtn = document.getElementById('wand-toggle-btn');
const flash = document.createElement('div');
flash.classList.add('magic-flash');
document.body.appendChild(flash);

// al hacer click, alterna en <body>
wandBtn.addEventListener('click', () => {
  document.body.classList.toggle('magic-mode');



  // se quita después de la animación
  setTimeout(() => {
    document.body.style.backgroundImage = 'url("img/bosque.gif")';
  }, 4000); // vuelve al gif después de 4 segundos
  
});
