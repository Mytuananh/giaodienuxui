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
// Hiển thị thẻ input-link mặc định nếu lựa chọn là "link"
const infoInput = document.getElementById("other-info-1");
infoInput.style.display = "block";

document.getElementById("infoType").addEventListener("change", function () {
    const infoType = this.value;
    const infoFile = document.getElementById("file-upload-1");

    if (infoType === "link") {
        infoInput.style.display = "block";
        infoFile.style.display = "none";
    } else {
        infoInput.style.display = "none";
        infoFile.style.display = "block";
    }
});

document.getElementById("imageUpload").addEventListener("change", function () {
    const imageList = document.getElementById("imageList1");

    Array.from(this.files).forEach((file) => {
        const option = document.createElement("option");
        option.text = file.name;
        option.value = URL.createObjectURL(file);
        imageList.add(option);
    });
});

document.getElementById("imageList1").addEventListener("dblclick", function () {
    const selectedIndex = this.selectedIndex;
    if (selectedIndex !== -1) {
        this.remove(selectedIndex);
    }
});

document.getElementById("searchInput").addEventListener("input", function () {
    // Tìm kiếm công trình và đổ dữ liệu vào danh sách tìm kiếm
    // Đây chỉ là một ví dụ, bạn có thể thay đổi hàm tìm kiếm và đổ dữ liệu theo yêu cầu của bạn
    const searchValue = this.value.toLowerCase();
    const searchResultList = document.getElementById("searchResultList");
    const exampleData = ["Công trình 1", "Công trình 2", "Công trình 3", "Công trình 4", "Công trình 5"];

    if (searchValue !== "") {
        searchResultList.innerHTML = "";

        exampleData.forEach((item) => {
            if (item.toLowerCase().includes(searchValue)) {
                const option = document.createElement("option");
                option.text = item;
                searchResultList.add(option);
            }
        });
    } else {
        searchResultList.innerHTML = "";
    }
});

function removeSelectedImage() {
    var select = document.getElementById('imageFiles1');
    var selected = select.selectedIndex;
    if (selected >= 0) {
        select.remove(selected);
    }
}

function updateImageOptions() {
    var input = document.getElementById('imageInput1');
    var select = document.getElementById('imageFiles1');
    select.innerHTML = '';

    for (var i = 0; i < input.files.length; i++) {
        var option = document.createElement('option');
        option.value = input.files[i].name;
        option.text = input.files[i].name;
        select.add(option);
    }
}

var projects = ["Công trình 1", "Công trình 2", "Công trình 3", "Công trình 4", "Công trình 5"];
autocomplete(document.getElementById("search1"), projects);

function autocomplete(inp, arr) {
    var currentFocus;
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        closeAllLists();
        if (!val) {
            return false;
        }
        currentFocus = -1;
        a = document.createElement("div");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                b = document.createElement("div");
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                b.addEventListener("click", function (e) {
                    var selectedProjectsInput = document.getElementById("selectedProjects-1");
                    var selectedProject = this.getElementsByTagName("input")[0].value;
                    if (selectedProjectsInput.value === '') {
                        selectedProjectsInput.value = selectedProject;
                    } else {
                        selectedProjectsInput.value += ', ' + selectedProject;
                    }
                    inp.value = '';
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
}
