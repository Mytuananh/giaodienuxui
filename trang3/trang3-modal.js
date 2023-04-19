const addNewBtn = document.getElementById('addNewBtn');
const addNewBtn1 = document.getElementById('addNewBtn-1');
const addNewBtn2 = document.getElementById('addNewBtn-2');
const addNewBtn3 = document.getElementById('addNewBtn-3');
const addNewBtn4 = document.getElementById('addNewBtn-4');
const functionList = document.getElementById('functionList');
const functionList1 = document.getElementById('functionList-1');
const functionList2 = document.getElementById('functionList-2');
const functionList3 = document.getElementById('functionList-3');
const functionList4 = document.getElementById('functionList-4');
const modal = document.getElementById('myModal');
const modal1 = document.getElementById('myModal1');
const modal2 = document.getElementById('myModal-1');
const modal3 = document.getElementById('myModal2');
const modal4 = document.getElementById('myModal-2');
const modal5 = document.getElementById('myModal3');
const modal6 = document.getElementById('myModal-3');
const modal7 = document.getElementById('myModal4');
const modal8 = document.getElementById('myModal-4');
const modal9 = document.getElementById('myModal5');
// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];
const span1 = document.getElementsByClassName("close-1")[0];
const span2 = document.getElementsByClassName("close-2")[0];
const span3 = document.getElementsByClassName("close-3")[0];
const span4 = document.getElementsByClassName("close-4")[0];
const span5 = document.getElementsByClassName("close-5")[0];
const span6 = document.getElementsByClassName("close-6")[0];
const span7 = document.getElementsByClassName("close-7")[0];
const span8 = document.getElementsByClassName("close-8")[0];
const span9 = document.getElementsByClassName("close-9")[0];
// Get the buttons to save and cancel changes
const saveBtn = document.getElementById("saveBtn");
const cancelBtn = document.getElementById("cancelBtn");
const saveBtn1 = document.getElementById("saveBtn1");
const cancelBtn1 = document.getElementById("cancelBtn1");
const saveBtn2 = document.getElementById("saveBtn-1");
const cancelBtn2 = document.getElementById("cancelBtn-1");
const saveBtn3 = document.getElementById("saveBtn1-2");
const cancelBtn3 = document.getElementById("cancelBtn1-2");
const saveBtn4 = document.getElementById("saveBtn-2");
const cancelBtn4 = document.getElementById("cancelBtn-2");
const saveBtn5 = document.getElementById("saveBtn1-3");
const cancelBtn5 = document.getElementById("cancelBtn1-3");
const saveBtn6 = document.getElementById("saveBtn-3");
const cancelBtn6 = document.getElementById("cancelBtn-3");
const saveBtn7 = document.getElementById("saveBtn1-4");
const cancelBtn7 = document.getElementById("cancelBtn1-4");
const saveBtn8 = document.getElementById("saveBtn-4");
const cancelBtn8 = document.getElementById("cancelBtn-4");
const saveBtn9 = document.getElementById("saveBtn1-5");
const cancelBtn9 = document.getElementById("cancelBtn1-5");
// Get the form and all input fields
const form = document.querySelector("form");
const inputFields = form.querySelectorAll("input, select");

// Hide the function list initially
functionList.style.display = "none";
functionList1.style.display = "none";
functionList2.style.display = "none";
functionList3.style.display = "none";
functionList4.style.display = "none";
// Show the function list when addNewBtn is clicked and hide the modal
addNewBtn.addEventListener('click', function () {
    functionList.style.display = "block";
    modal.style.display = "none";
    modal1.style.display = "none";
});
addNewBtn1.addEventListener('click', function () {
    functionList1.style.display = "block";
    modal2.style.display = "none";
    modal3.style.display = "none";
});
addNewBtn2.addEventListener('click', function () {
    functionList2.style.display = "block";
    modal4.style.display = "none";
    modal5.style.display = "none";
});
addNewBtn3.addEventListener('click', function () {
    functionList3.style.display = "block";
    modal6.style.display = "none";
    modal7.style.display = "none";
});
addNewBtn4.addEventListener('click', function () {
    functionList4.style.display = "block";
    modal8.style.display = "none";
    modal9.style.display = "none";
});
// Hide the function list when any function is clicked, except for "thongTinChung", and show the modal
functionList.addEventListener('click', function (event) {
    const functionName = event.target.getAttribute('data-function');
    if (functionName === "thongTinChung") {
        functionList.style.display = "none";
        modal1.style.display = "none";
        modal.style.display = "block"
    }
    if (functionName === "thongTinQuanLy") {
        modal.style.display = 'none';
        functionList.style.display = "none";
        modal1.style.display = "block"
    }
});
functionList1.addEventListener('click', function (event) {
    const functionName = event.target.getAttribute('data-function');
    if (functionName === "thongTinChung") {
        functionList1.style.display = "none";
        modal3.style.display = "none";
        modal2.style.display = "block"
    }
    if (functionName === "thongTinQuanLy") {
        modal2.style.display = 'none';
        functionList1.style.display = "none";
        modal3.style.display = "block"
    }
});
functionList2.addEventListener('click', function (event) {
    const functionName = event.target.getAttribute('data-function');
    if (functionName === "thongTinChung") {
        functionList2.style.display = "none";
        modal5.style.display = "none";
        modal4.style.display = "block"
    }
    if (functionName === "thongTinQuanLy") {
        modal4.style.display = 'none';
        functionList2.style.display = "none";
        modal5.style.display = "block"
    }
});
functionList3.addEventListener('click', function (event) {
    const functionName = event.target.getAttribute('data-function');
    if (functionName === "thongTinChung") {
        functionList3.style.display = "none";
        modal7.style.display = "none";
        modal6.style.display = "block"
    }
    if (functionName === "thongTinQuanLy") {
        modal6.style.display = 'none';
        functionList3.style.display = "none";
        modal7.style.display = "block"
    }
});
functionList4.addEventListener('click', function (event) {
    const functionName = event.target.getAttribute('data-function');
    if (functionName === "thongTinChung") {
        functionList4.style.display = "none";
        modal9.style.display = "none";
        modal8.style.display = "block"
    }
    if (functionName === "thongTinQuanLy") {
        modal8.style.display = 'none';
        functionList4.style.display = "none";
        modal9.style.display = "block"
    }
});
// Get the error message elements
const projectCodeError = document.getElementById("project-code-error");
const projectNameError = document.getElementById("project-name-error");
const projectLocationError = document.getElementById("project-location-error");
const projectHistoryError = document.getElementById("project-history-error");

const projectCodeError1 = document.getElementById("project-code-error-1");
const projectNameError1 = document.getElementById("project-name-error-1");
const projectLocationError1 = document.getElementById("project-location-error-1");
const projectHistoryError1 = document.getElementById("project-history-error-1");

const projectCodeError2 = document.getElementById("project-code-error-2");
const projectNameError2 = document.getElementById("project-name-error-2");
const projectLocationError2 = document.getElementById("project-location-error-2");
const projectHistoryError2 = document.getElementById("project-history-error-2");

const projectCodeError3 = document.getElementById("project-code-error-3");
const projectNameError3 = document.getElementById("project-name-error-3");
const projectLocationError3 = document.getElementById("project-location-error-3");
const projectHistoryError3 = document.getElementById("project-history-error-3");

const projectCodeError4 = document.getElementById("project-code-error-4");
const projectNameError4 = document.getElementById("project-name-error-4");
const projectLocationError4 = document.getElementById("project-location-error-4");
const projectHistoryError4 = document.getElementById("project-history-error-4");
// Function to clear all input fields in the form
function clearFormInputs() {
    inputFields.forEach((field) => {
        field.value = "";
    });
}

// Function to validate the input fields
function validateFormInputs() {
    let isValid = true;
    const projectCodeValue = document.getElementById("project-code-num").value;

    if (projectCodeValue === "") {
        projectCodeError.textContent = "Chưa nhập mã công trình!";
        isValid = false;
    } else {
        projectCodeError.textContent = "";
    }

    const projectNameValue = document.getElementById("project-name").value;
    if (projectNameValue === "") {
        projectNameError.textContent = "Chưa điền tên công trình";
        isValid = false;
    } else {
        projectNameError.textContent = "";
    }

    const projectLocationNameValue = document.getElementById(
        "project-location-name"
    ).value;
    const projectLocationXValue = document.getElementById(
        "project-location-x"
    ).value;
    const projectLocationYValue = document.getElementById(
        "project-location-y"
    ).value;
    if (
        projectLocationNameValue === "" ||
        projectLocationXValue === "" ||
        projectLocationYValue === ""
    ) {
        projectLocationError.textContent = "Chưa nhập vị trí hoặc địa điểm hoặc tọa độ";
        isValid = false;
    } else {
        projectLocationError.textContent = "";
    }

    const projectHistoryValue = document.getElementById(
        "project-history"
    ).value;
    if (
        projectHistoryValue === ""
    ) {
        projectHistoryError.textContent = "Chưa nhập thông tin lịch sử xây dựng công trình";
        isValid = false;
    } else {
        projectHistoryError.textContent = "";
    }

    return isValid;
}
function validateFormInputs1() {
    let isValid = true;
    const projectCodeValue1 = document.getElementById("project-code-num-1").value;
    if (projectCodeValue1 === "") {
        projectCodeError1.textContent = "Chưa nhập mã công trình!";
        isValid = false;
    } else {
        projectCodeError1.textContent = "";
    }

    const projectNameValue1 = document.getElementById("project-name-1").value;
    if (projectNameValue1 === "") {
        projectNameError1.textContent = "Chưa điền tên công trình";
        isValid = false;
    } else {
        projectNameError1.textContent = "";
    }
    const projectLocationNameValue1 = document.getElementById(
        "project-location-name-1"
    ).value;
    const projectLocationXValue1 = document.getElementById(
        "project-location-x-1"
    ).value;
    const projectLocationYValue1 = document.getElementById(
        "project-location-y-1"
    ).value;

    if (
        projectLocationNameValue1 === "" ||
        projectLocationXValue1 === "" ||
        projectLocationYValue1 === ""
    ) {
        projectLocationError1.textContent = "Chưa nhập vị trí hoặc địa điểm hoặc tọa độ";
        isValid = false;
    } else {
        projectLocationError1.textContent = "";
    }

    const projectHistoryValue1 = document.getElementById(
        "project-history-1"
    ).value;

    if (
        projectHistoryValue1 === ""
    ) {
        projectHistoryError1.textContent = "Chưa nhập thông tin lịch sử xây dựng công trình";
        isValid = false;
    } else {
        projectHistoryError1.textContent = "";
    }

    return isValid;
}
function validateFormInputs2() {
    let isValid = true;
    const projectCodeValue2 = document.getElementById("project-code-num-2").value;
    if (projectCodeValue2 === "") {
        projectCodeError2.textContent = "Chưa nhập mã công trình!";
        isValid = false;
    } else {
        projectCodeError2.textContent = "";
    }

    const projectNameValue2 = document.getElementById("project-name-2").value;
    if (projectNameValue2 === "") {
        projectNameError2.textContent = "Chưa điền tên công trình";
        isValid = false;
    } else {
        projectNameError2.textContent = "";
    }
    const projectLocationNameValue2 = document.getElementById(
        "project-location-name-2"
    ).value;
    const projectLocationXValue2 = document.getElementById(
        "project-location-x-2"
    ).value;
    const projectLocationYValue2 = document.getElementById(
        "project-location-y-2"
    ).value;

    if (
        projectLocationNameValue2 === "" ||
        projectLocationXValue2 === "" ||
        projectLocationYValue2 === ""
    ) {
        projectLocationError2.textContent = "Chưa nhập vị trí hoặc địa điểm hoặc tọa độ";
        isValid = false;
    } else {
        projectLocationError2.textContent = "";
    }
    const projectHistoryValue2 = document.getElementById(
        "project-history-2"
    ).value;
    if (
        projectHistoryValue2 === ""
    ) {
        projectHistoryError2.textContent = "Chưa nhập thông tin lịch sử xây dựng công trình";
        isValid = false;
    } else {
        projectHistoryError2.textContent = "";
    }

    return isValid;
}
function validateFormInputs3() {
    let isValid = true;
    const projectCodeValue3 = document.getElementById("project-code-num-3").value;
    if (projectCodeValue3 === "") {
        projectCodeError3.textContent = "Chưa nhập mã công trình!";
        isValid = false;
    } else {
        projectCodeError3.textContent = "";
    }

    const projectNameValue3 = document.getElementById("project-name-3").value;
    if (projectNameValue3 === "") {
        projectNameError3.textContent = "Chưa điền tên công trình";
        isValid = false;
    } else {
        projectNameError3.textContent = "";
    }
    const projectLocationNameValue3 = document.getElementById(
        "project-location-name-3"
    ).value;
    const projectLocationXValue3 = document.getElementById(
        "project-location-x-3"
    ).value;
    const projectLocationYValue3 = document.getElementById(
        "project-location-y-3"
    ).value;

    if (
        projectLocationNameValue3 === "" ||
        projectLocationXValue3 === "" ||
        projectLocationYValue3 === ""
    ) {
        projectLocationError3.textContent = "Chưa nhập vị trí hoặc địa điểm hoặc tọa độ";
        isValid = false;
    } else {
        projectLocationError3.textContent = "";
    }
    const projectHistoryValue3 = document.getElementById(
        "project-history-3"
    ).value;
    if (
        projectHistoryValue3 === ""
    ) {
        projectHistoryError3.textContent = "Chưa nhập thông tin lịch sử xây dựng công trình";
        isValid = false;
    } else {
        projectHistoryError3.textContent = "";
    }

    return isValid;
}
function validateFormInputs4() {
    let isValid = true;
    const projectCodeValue4 = document.getElementById("project-code-num-4").value;
    if (projectCodeValue4 === "") {
        projectCodeError4.textContent = "Chưa nhập mã công trình!";
        isValid = false;
    } else {
        projectCodeError4.textContent = "";
    }

    const projectNameValue4 = document.getElementById("project-name-4").value;
    if (projectNameValue4 === "") {
        projectNameError4.textContent = "Chưa điền tên công trình";
        isValid = false;
    } else {
        projectNameError4.textContent = "";
    }
    const projectLocationNameValue4 = document.getElementById(
        "project-location-name-4"
    ).value;
    const projectLocationXValue4 = document.getElementById(
        "project-location-x-4"
    ).value;
    const projectLocationYValue4 = document.getElementById(
        "project-location-y-4"
    ).value;

    if (
        projectLocationNameValue4 === "" ||
        projectLocationXValue4 === "" ||
        projectLocationYValue4 === ""
    ) {
        projectLocationError4.textContent = "Chưa nhập vị trí hoặc địa điểm hoặc tọa độ";
        isValid = false;
    } else {
        projectLocationError4.textContent = "";
    }
    const projectHistoryValue4 = document.getElementById(
        "project-history-4"
    ).value;
    if (
        projectHistoryValue4 === ""
    ) {
        projectHistoryError4.textContent = "Chưa nhập thông tin lịch sử xây dựng công trình";
        isValid = false;
    } else {
        projectHistoryError4.textContent = "";
    }
    return isValid;
}
// Function to save the form data
function saveFormData() {
    if (validateFormInputs()) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        // Do something with the form data, e.g. send it to the server
        console.log(data);
        closeModal();
        clearFormInputs();
    }
}
function saveFormData1() {
    if (validateFormInputs1()) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        // Do something with the form data, e.g. send it to the server
        console.log(data);
        closeModal1();
        clearFormInputs();
    }
}

function saveFormData2() {
    if (validateFormInputs2()) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        // Do something with the form data, e.g. send it to the server
        console.log(data);
        closeModal2();
        clearFormInputs();
    }
}

function saveFormData3() {
    if (validateFormInputs3()) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        // Do something with the form data, e.g. send it to the server
        console.log(data);
        closeModal3();
        clearFormInputs();
    }
}

function saveFormData4() {
    if (validateFormInputs4()) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        // Do something with the form data, e.g. send it to the server
        console.log(data);
        closeModal4();
        clearFormInputs();
    }
}
// Function to close the modal
function closeModal() {
    modal.style.display = "none";
    modal1.style.display = "none";
}
function closeModal1() {
    modal2.style.display = "none";
    modal3.style.display = "none";
}
function closeModal2() {
    modal4.style.display = "none";
    modal5.style.display = "none";
}
function closeModal3() {
    modal6.style.display = "none";
    modal7.style.display = "none";
}
function closeModal4() {
    modal8.style.display = "none";
    modal9.style.display = "none";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    closeModal1();
};
span1.onclick = function () {
    closeModal1();
};
span2.onclick = function () {
    closeModal();
};
span3.onclick = function () {
    closeModal();
};
span4.onclick = function () {
    closeModal2();
};
span5.onclick = function () {
    closeModal2();
};
span6.onclick = function () {
    closeModal3();
};
span7.onclick = function () {
    closeModal3();
};
span8.onclick = function () {
    closeModal4();
};
span9.onclick = function () {
    closeModal4();
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target === modal) {
        closeModal();
    }

    if (event.target === modal1) {
        closeModal();
    }
    if (event.target === modal2) {
        closeModal1();
    }
    if (event.target === modal3) {
        closeModal1();
    }
    if (event.target === modal4) {
        closeModal2();
    }
    if (event.target === modal5) {
        closeModal2();
    }
    if (event.target === modal6) {
        closeModal3();
    }
    if (event.target === modal7) {
        closeModal3();
    }
    if (event.target === modal8) {
        closeModal4();
    }
    if (event.target === modal9) {
        closeModal4();
    }
    if (event.target !== functionList1 && event.target !== addNewBtn1) {
        functionList1.style.display = "none";
    }
    if (event.target !== functionList && event.target !== addNewBtn) {
        functionList.style.display = "none";
    }
    if (event.target !== functionList2 && event.target !== addNewBtn2) {
        functionList2.style.display = "none";
    }
    if (event.target !== functionList3 && event.target !== addNewBtn3) {
        functionList3.style.display = "none";
    }
    if (event.target !== functionList4 && event.target !== addNewBtn4) {
        functionList4.style.display = "none";
    }
};

// When the user clicks the save button, save the form data
saveBtn.onclick = function () {
    saveFormData();
};
saveBtn1.onclick = function () {
    saveFormData();
}
saveBtn2.onclick = function () {
    saveFormData1();
}
saveBtn3.onclick = function () {
    saveFormData1();
}
saveBtn4.onclick = function () {
    saveFormData2();
}
saveBtn5.onclick = function () {
    saveFormData2();
}
saveBtn6.onclick = function () {
    saveFormData3();
}
saveBtn7.onclick = function () {
    saveFormData3();
}
saveBtn8.onclick = function () {
    saveFormData4();
}
saveBtn9.onclick = function () {
    saveFormData4();
}
// When the user clicks the cancel button, close the modal
cancelBtn.onclick = function () {
    closeModal();
};
cancelBtn1.onclick = function () {
    closeModal();
}
cancelBtn2.onclick = function () {
    closeModal1();
}
cancelBtn3.onclick = function () {
    closeModal1();
}
cancelBtn4.onclick = function () {
    closeModal2();
}
cancelBtn5.onclick = function () {
    closeModal2();
}
cancelBtn6.onclick = function () {
    closeModal3();
}
cancelBtn7.onclick = function () {
    closeModal3();
}
cancelBtn8.onclick = function () {
    closeModal4();
}
cancelBtn9.onclick = function () {
    closeModal4();
}

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
function removeSelectedImage() {
    var select = document.getElementById('imageFiles');
    var selected = select.selectedIndex;
    if (selected >= 0) {
        select.remove(selected);
    }
}
function updateImageOptions() {
    var input = document.getElementById('imageInput');
    var select = document.getElementById('imageFiles');
    select.innerHTML = '';

    for (var i = 0; i < input.files.length; i++) {
        var option = document.createElement('option');
        option.value = input.files[i].name;
        option.text = input.files[i].name;
        select.add(option);
    }
}
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
function removeSelectedImage2() {
    var select = document.getElementById('imageFiles-2');
    var selected = select.selectedIndex;
    if (selected >= 0) {
        select.remove(selected);
    }
}
function updateImageOptions2() {
    var input = document.getElementById('imageInput-2');
    var select = document.getElementById('imageFiles-2');
    select.innerHTML = '';

    for (var i = 0; i < input.files.length; i++) {
        var option = document.createElement('option');
        option.value = input.files[i].name;
        option.text = input.files[i].name;
        select.add(option);
    }
}
function removeSelectedImage3() {
    var select = document.getElementById('imageFiles-3');
    var selected = select.selectedIndex;
    if (selected >= 0) {
        select.remove(selected);
    }
}
function updateImageOptions3() {
    var input = document.getElementById('imageInput-3');
    var select = document.getElementById('imageFiles-3');
    select.innerHTML = '';

    for (var i = 0; i < input.files.length; i++) {
        var option = document.createElement('option');
        option.value = input.files[i].name;
        option.text = input.files[i].name;
        select.add(option);
    }
}
function removeSelectedImage4() {
    var select = document.getElementById('imageFiles-4');
    var selected = select.selectedIndex;
    if (selected >= 0) {
        select.remove(selected);
    }
}
function updateImageOptions4() {
    var input = document.getElementById('imageInput-4');
    var select = document.getElementById('imageFiles-4');
    select.innerHTML = '';

    for (var i = 0; i < input.files.length; i++) {
        var option = document.createElement('option');
        option.value = input.files[i].name;
        option.text = input.files[i].name;
        select.add(option);
    }
}