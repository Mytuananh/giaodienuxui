const addNewBtn = document.getElementById('addNewBtn');
const addNewBtn1 = document.getElementById('addNewBtn-1');
const functionList = document.getElementById('functionList');
const functionList1 = document.getElementById('functionList-1');
const modal = document.getElementById('myModal');
const modal1 = document.getElementById('myModal1');
const modal2 = document.getElementById('myModal-1');
const modal3 = document.getElementById('myModal2');
// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];
const span1 = document.getElementsByClassName("close-1")[0];
const span2 = document.getElementsByClassName("close-2")[0];
const span3 = document.getElementsByClassName("close-3")[0];
// Get the buttons to save and cancel changes
const saveBtn = document.getElementById("saveBtn");
const cancelBtn = document.getElementById("cancelBtn");
const saveBtn1 = document.getElementById("saveBtn1");
const cancelBtn1 = document.getElementById("cancelBtn1");
const saveBtn2 = document.getElementById("saveBtn-1");
const cancelBtn2 = document.getElementById("cancelBtn-1");
const saveBtn3 = document.getElementById("saveBtn1-2");
const cancelBtn3 = document.getElementById("cancelBtn1-2");

// Get the form and all input fields
const form = document.querySelector("form");
const inputFields = form.querySelectorAll("input, select");

// Hide the function list initially
functionList.style.display = "none";
functionList1.style.display = "none";

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
// Get the error message elements
const projectCodeError = document.getElementById("project-code-error");
const projectNameError = document.getElementById("project-name-error");
const projectLocationError = document.getElementById("project-location-error");
const projectHistoryError = document.getElementById("project-history-error");

const projectCodeError1 = document.getElementById("project-code-error-1");
const projectNameError1 = document.getElementById("project-name-error-1");
const projectLocationError1 = document.getElementById("project-location-error-1");
const projectHistoryError1 = document.getElementById("project-history-error-1");

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
// Function to close the modal
function closeModal() {
    modal.style.display = "none";
    modal1.style.display = "none";
}
function closeModal1() {
    modal2.style.display = "none";
    modal3.style.display = "none";
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
    if (event.target !== functionList1 && event.target !== addNewBtn1) {
        functionList1.style.display = "none";
    }
    if (event.target !== functionList && event.target !== addNewBtn) {
        functionList.style.display = "none";
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
