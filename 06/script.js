menu = document.querySelector('.listMenu');
lines = document.querySelector('.menuLines');

function toggleMenu() {
    menu.classList.toggle('hidden');
}

lines.addEventListener('click', toggleMenu);