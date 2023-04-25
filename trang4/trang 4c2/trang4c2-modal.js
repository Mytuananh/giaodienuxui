const functionList = document.getElementById('menu-ellipsis1-past');
const modal = document.getElementById('myModalHS');
const span = document.getElementsByClassName("close")[0];
const saveBtn = document.getElementById("saveBtn-1");
const cancelBtn = document.getElementById("cancelBtn-1");

functionList.addEventListener("click", function () {
        modal.style.display = "block";
});
function saveFormData() {
        closeModal();
}
function closeModal() {
    modal.style.display = "none";
}
span.onclick = function () {
    closeModal();
};
window.onclick = function (event) {
    if (event.target === modal) {
        closeModal();
    }
};
saveBtn.onclick = function () {
    saveFormData();
};
cancelBtn.onclick = function () {
    closeModal();
};
// Hiển thị thẻ input-link mặc định nếu lựa chọn là "link"
const infoInput = document.querySelectorAll('.input-link');
infoInput.forEach(function (input) {
    input.style.display = "block";
    const infoType =  document.querySelectorAll('.infoType');
    infoType.forEach(function (inf) {
        inf.addEventListener("change", function () {
            const infoType = this.value;
            const infoFiles = document.querySelectorAll('.input-file');
            infoFiles.forEach(function (infoFile) {
                if (infoType === "link") {
                    input.style.display = "block";
                    infoFile.style.display = "none";
                } else if (infoType === "file") {
                    input.style.display = "none";
                    infoFile.style.display = "block";
                }
            });
        })
    });
})
function removeSelectedImage1() {
    var select = document.getElementById('imageFiles-1');
    var selected = select.selectedIndex;
    if (selected >= 0) {
        select.remove(selected);
    }
}
function updateImageOptions1() {
    var input = document.getElementById('imageInput-1');
    var select = document.getElementById('imageFiles-1');
    select.innerHTML = '';

    for (var i = 0; i < input.files.length; i++) {
        var option = document.createElement('option');
        option.value = input.files[i].name;
        option.text = input.files[i].name;
        select.add(option);
    }
}
