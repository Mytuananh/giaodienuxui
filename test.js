var dropdownToggles = document.querySelectorAll('.dropdown-toggle');

dropdownToggles.forEach(function(toggle) {
    toggle.addEventListener('click', function() {
        this.parentNode.classList.toggle('open');
        var dropdownMenu = this.nextElementSibling;
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });
});
