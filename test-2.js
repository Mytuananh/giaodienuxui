var addNewBtn = document.getElementById('addNewBtn');
var functionList = document.getElementById('functionList');
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// Get the buttons to save and cancel changes
const saveBtn = document.getElementById("saveBtn");
const cancelBtn = document.getElementById("cancelBtn");

// Get the form and all input fields
const form = document.querySelector("form");
const inputFields = form.querySelectorAll("input, select");

// Hide the function list initially
functionList.style.display = "none";

// Show the function list when addNewBtn is clicked and hide the modal
addNewBtn.addEventListener('click', function () {
    functionList.style.display = "block";
    modal.style.display = "none";
});

// Hide the function list when any function is clicked, except for "thongTinChung", and show the modal
functionList.addEventListener('click', function (event) {
    var functionName = event.target.getAttribute('data-function');
    if (functionName !== "thongTinChung") {
        functionList.style.display = "none";
    } else {
        modal.style.display = 'block';
        functionList.style.display = "none";
    }
});

// Get the error message elements
const projectCodeError = document.getElementById("project-code-error");
const projectNameError = document.getElementById("project-name-error");
const projectLocationError = document.getElementById("project-location-error");

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

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    closeModal();
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target === modal) {
        closeModal();
    }
};

// When the user clicks the save button, save the form data
saveBtn.onclick = function () {
    saveFormData();
};
// When the user clicks the cancel button, close the modal
cancelBtn.onclick = function () {
    closeModal();
};

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}
