const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');

sidebarToggle.addEventListener('click', function() {
    this.classList.toggle('active'); // toggle the active class on the toggle button
    sidebar.classList.toggle('active'); // toggle the active class on the sidebar
});
