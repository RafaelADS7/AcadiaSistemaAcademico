// Seleciona a imagem e o menu
const menuIcon = document.getElementById('menuIcon');
const menu = document.getElementById('menu');

// Adiciona evento de clique na imagem
menuIcon.addEventListener('click', function() {
    // Alterna entre mostrar ou esconder o menu
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block'; // Mostra o menu
    } else {
        menu.style.display = 'none'; // Esconde o menu
    }

});
