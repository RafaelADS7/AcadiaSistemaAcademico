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

const myButton1 = document.getElementById('myButton1');
const myButton2 = document.getElementById('myButton2');
const myButton3 = document.getElementById('myButton3');
// Adiciona evento de clique para o botão 1
myButton1.addEventListener('click', function () {
    if (myButton1.style.backgroundColor === 'rgb(217, 217, 217)') {
        myButton1.style.backgroundColor = '#1976D2';
        myButton1.style.color = 'white';
        myButton2.style.backgroundColor = '#D9D9D9';
        myButton3.style.backgroundColor = '#D9D9D9';
    } else {
        myButton1.style.backgroundColor = '#D9D9D9';
        myButton2.style.backgroundColor = '#D9D9D9';
        myButton3.style.backgroundColor = '#D9D9D9';
        myButton1.style.color = 'black';
    }
});

// Adiciona evento de clique para o botão 2
myButton2.addEventListener('click', function () {
    if (myButton2.style.backgroundColor === 'rgb(217, 217, 217)') {
        myButton1.style.backgroundColor = '#D9D9D9';
        myButton2.style.backgroundColor = '#1976D2';
        myButton2.style.color = 'white';
        myButton3.style.backgroundColor = '#D9D9D9';
    } else {
        myButton1.style.backgroundColor = '#D9D9D9';
        myButton2.style.backgroundColor = '#D9D9D9';
        myButton3.style.backgroundColor = '#D9D9D9';
        myButton2.style.color = 'black';
    }
});

// Adiciona evento de clique para o botão 3
myButton3.addEventListener('click', function () {
    if (myButton3.style.backgroundColor === 'rgb(217, 217, 217)') {
        myButton1.style.backgroundColor = '#D9D9D9';
        myButton2.style.backgroundColor = '#D9D9D9';
        myButton3.style.backgroundColor = '#1976D2';
        myButton3.style.color = 'white';
    } else {
        myButton1.style.backgroundColor = '#D9D9D9';
        myButton2.style.backgroundColor = '#D9D9D9';
        myButton3.style.backgroundColor = '#D9D9D9';
        myButton3.style.color = 'black';
    }
});
