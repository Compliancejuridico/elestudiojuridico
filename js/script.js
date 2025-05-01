// script.js

function showSection(sectionId) {
  const sections = document.querySelectorAll('.content-section');
  const volverBtn = document.getElementById('volverBtn');
  const menuButtons = document.getElementById('menu-buttons');

  // Ocultar todos los botones y secciones
  menuButtons.style.display = 'none';
  sections.forEach(section => section.style.display = 'none');

  // Mostrar la sección seleccionada y el botón de volver
  document.getElementById(sectionId).style.display = 'block';
  volverBtn.style.display = 'block';
}

function goBackToMenu() {
  const sections = document.querySelectorAll('.content-section');
  const volverBtn = document.getElementById('volverBtn');
  const menuButtons = document.getElementById('menu-buttons');

  // Ocultar todas las secciones y el botón de volver
  sections.forEach(section => section.style.display = 'none');
  volverBtn.style.display = 'none';

  // Mostrar el menú de botones
  menuButtons.style.display = 'flex';
}

