const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const selectedProjects = document.getElementById('selectedProjects');

const projects = [
    'Công trình A',
    'Công trình B',
    'Công trình C',
    'Công trình D',
];

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    searchResults.innerHTML = '';

    projects.forEach((project) => {
        if (project.toLowerCase().includes(query)) {
            const result = document.createElement('div');
            result.textContent = project;
            result.addEventListener('click', () => {
                // Kiểm tra xem công trình đã được chọn chưa
                const isSelected = Array.from(selectedProjects.options).some(
                    (option) => option.value === project
                );

                // Nếu chưa được chọn, thêm công trình vào thẻ <select multiple>
                if (!isSelected) {
                    const option = document.createElement('option');
                    option.value = project;
                    option.textContent = project;
                    option.selected = true;
                    selectedProjects.add(option);
                }
            });
            searchResults.appendChild(result);
        }
    });
});