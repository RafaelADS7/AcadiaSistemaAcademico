// Função para alternar a visibilidade do menu lateral
function toggleMenu() {
    const menu = document.getElementById('menuLateral');
    const currentLeft = menu.style.left;

    // Alterna a posição do menu lateral
    if (currentLeft === '0px') {
        menu.style.left = '-250px';  // Esconde o menu
    } else {
        menu.style.left = '0px';  // Mostra o menu
    }
}
