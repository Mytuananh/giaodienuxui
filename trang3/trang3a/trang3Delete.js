document.getElementById("toggleBtn").addEventListener("click", function() {
    let deleteColumns = document.getElementsByClassName("deleteColumn");
    for (let i = 0; i < deleteColumns.length; i++) {
        if (deleteColumns[i].style.display === "none") {
            deleteColumns[i].style.display = "table-cell";
        } else {
            deleteColumns[i].style.display = "none";
        }
    }
});

document.getElementById("toggleBtn1").addEventListener("click", function() {
    let deleteColumns = document.getElementsByClassName("deleteColumn1");
    for (let i = 0; i < deleteColumns.length; i++) {
        if (deleteColumns[i].style.display === "none") {
            deleteColumns[i].style.display = "table-cell";
        } else {
            deleteColumns[i].style.display = "none";
        }
    }
});

document.getElementById("toggleBtn2").addEventListener("click", function() {
    let deleteColumns = document.getElementsByClassName("deleteColumn2");
    for (let i = 0; i < deleteColumns.length; i++) {
        if (deleteColumns[i].style.display === "none") {
            deleteColumns[i].style.display = "table-cell";
        } else {
            deleteColumns[i].style.display = "none";
        }
    }
});

document.getElementById("toggleBtn3").addEventListener("click", function() {
    let deleteColumns = document.getElementsByClassName("deleteColumn3");
    for (let i = 0; i < deleteColumns.length; i++) {
        if (deleteColumns[i].style.display === "none") {
            deleteColumns[i].style.display = "table-cell";
        } else {
            deleteColumns[i].style.display = "none";
        }
    }
});

document.getElementById("toggleBtn4").addEventListener("click", function() {
    let deleteColumns = document.getElementsByClassName("deleteColumn4");
    for (let i = 0; i < deleteColumns.length; i++) {
        if (deleteColumns[i].style.display === "none") {
            deleteColumns[i].style.display = "table-cell";
        } else {
            deleteColumns[i].style.display = "none";
        }
    }
});

/*Modal hỏi delete*/
document.getElementById("deleteBtn").addEventListener("click", function () {
    document.getElementById("confirmModal").style.display = "block";
});

document.getElementById("yesBtn").addEventListener("click", function () {
    // Thực hiện xóa dữ liệu tại đây
    console.log("Xóa dữ liệu");

    // Đóng modal
    document.getElementById("confirmModal").style.display = "none";
});

document.getElementById("noBtn").addEventListener("click", function () {
    document.getElementById("confirmModal").style.display = "none";
});

/*-------------------------------------------------công trình liên quan----------------------------------------------*/
const searchInput = document.getElementById('related-projects-1');
const searchResults = document.getElementById('searchResults');
const selectedProjects = document.getElementById('selectedCT');

const projects = [
    'Công trình A',
    'Công trình B',
    'Công trình C',
    'Công trình D',
];

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    searchResults.innerHTML = '';

    if (query === '') {
        searchResults.style.display = 'none';
    } else {
        searchResults.style.display = 'block';

        projects.forEach((project) => {
            if (project.toLowerCase().includes(query)) {
                const result = document.createElement('div');
                result.textContent = project;
                result.addEventListener('click', () => {
                    const isSelected = Array.from(selectedProjects.options).some(
                        (option) => option.value === project
                    );

                    if (!isSelected) {
                        const option = document.createElement('option');
                        option.value = project;
                        option.textContent = project;
                        option.selected = true;
                        // Thêm sự kiện click để xóa công trình đã chọn
                        option.addEventListener('click', () => {
                            selectedProjects.remove(option);
                        });
                        selectedProjects.add(option);
                    }
                });
                searchResults.appendChild(result);
            }
        });
    }
});
