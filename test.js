document.addEventListener('DOMContentLoaded', function () {
    var ellipsisBtn = document.querySelector('.ellipsis-btn');
    var menu = document.querySelector('.menu');
    var menuItems = document.querySelectorAll('.menu-item');

    ellipsisBtn.addEventListener('click', function () {
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });

    menuItems.forEach(function (menuItem) {
        menuItem.addEventListener('click', function () {
            menu.style.display = 'none';
            // Thực hiện chức năng tương ứng với từng lựa chọn ở đây
        });
    });

    document.addEventListener('click', function (event) {
        if (!ellipsisBtn.contains(event.target) && !menu.contains(event.target)) {
            menu.style.display = 'none';
        }
    });
});
