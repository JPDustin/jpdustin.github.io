document.querySelector('.menu-toggle').addEventListener('click', function() {
    var menu = document.querySelector('nav ul');
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
    } else {
        menu.classList.add('active');
    }
});
