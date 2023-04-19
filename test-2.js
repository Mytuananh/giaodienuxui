// Hiển thị thẻ input-link mặc định nếu lựa chọn là "link"
const infoInput = document.getElementById("infoInput");
infoInput.style.display = "block";

document.getElementById("infoType").addEventListener("change", function () {
    const infoType = this.value;
    const infoFile = document.getElementById("infoFile");

    if (infoType === "link") {
        infoInput.style.display = "block";
        infoFile.style.display = "none";
    } else {
        infoInput.style.display = "none";
        infoFile.style.display = "block";
    }
});

document.getElementById("imageUpload").addEventListener("change", function () {
    const imageList = document.getElementById("imageList");

    Array.from(this.files).forEach((file) => {
        const option = document.createElement("option");
        option.text = file.name;
        option.value = URL.createObjectURL(file);
        imageList.add(option);
    });
});

document.getElementById("imageList").addEventListener("dblclick", function () {
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