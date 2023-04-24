const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item-hs-nam");
const panes = $$(".tab-pane-hs-nam");


// SonDN fixed - Active size wrong size on first load.
// Original post: https://www.facebook.com/groups/649972919142215/?multi_permalinks=1175881616551340


tabs.forEach((tab, index) => {
    const pane = panes[index];

    tab.onclick = function () {
        $(".tab-item-hs-nam.active").classList.remove("active");
        $(".tab-pane-hs-nam.active").classList.remove("active");


        this.classList.add("active");
        pane.classList.add("active");
    };
});

/*---------------------------------------------Modal------------------------------------------------------------------*/
const addNewBtn = document.getElementById('addNewBtn');
const functionList = document.getElementById('functionList');
const modal = document.getElementById('myModal');
const span = document.getElementsByClassName("close")[0];
const saveBtn = document.getElementById("saveBtn");
const cancelBtn = document.getElementById("cancelBtn");

// Get the form and all input fields
const form = document.querySelector("form");
const inputFields = form.querySelectorAll("input, select");

// Hide the function list initially
functionList.style.display = "none";

addNewBtn.addEventListener('click', function () {
    functionList.style.display = "block";
    modal.style.display = "none";
    modal1.style.display = "none";
    modal11.style.display = "none";
});

functionList.addEventListener('click', function (event) {
    const functionName = event.target.getAttribute('data-function');
    if (functionName === "thongTinChung") {
        functionList.style.display = "none";
        modal1.style.display = "none";
        modal.style.display = "block"
        modal11.style.display = "none";
    }
    if (functionName === "thongTinQuanLy") {
        modal11.style.display = "none";
        modal.style.display = 'none';
        functionList.style.display = "none";
        modal1.style.display = "block"
    }
    if (functionName === "hoSoCongTrinh") {
        modal.style.display = 'none';
        functionList.style.display = "none";
        modal1.style.display = "none"
        modal11.style.display = "block";
    }
});

const projectCodeHSError = document.getElementById("project-code-error-hs");
const projectNameHsError = document.getElementById("project-name-error-hs");
const projectLocationNameHsError = document.getElementById("project-location-name-error-hs");
const projectLocationHsError = document.getElementById("project-location-error-hs");
const projectDvlhsError = document.getElementById("project-dvlhs-error-hs");

function clearFormInputs() {
    inputFields.forEach((field) => {
        field.value = "";
    });
}

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
    const projectCodeHSErrorValue1 = document.getElementById("project-code-hs-1").value;
    if (projectCodeHSErrorValue1 === "") {
        projectCodeHSError1.textContent = "Chưa nhập mã hồ sơ";
        isValid = false;
    } else {
        projectCodeHSError1.textContent = "";
    }
    const projectNameHsErrorValue1 = document.getElementById("project-name-hs-1").value;
    if (projectNameHsErrorValue1 === "") {
        projectNameHsError1.textContent = "Chưa nhập tên hồ sơ công trình";
        isValid = false;
    } else {
        projectNameHsError1.textContent = "";
    }
    const projectLocationNameHsErrorValue1 = document.getElementById("project-location-name-hs-1").value;
    if (projectLocationNameHsErrorValue1 === "") {
        projectLocationNameHsError1.textContent = "Chưa điền địa điểm công trình";
        isValid = false;
    } else {
        projectLocationNameHsError1.textContent = "";
    }
    const projectLocationHsErrorValueX1 = document.getElementById("project-location-x-hs-1").value;
    const projectLocationHsErrorValueY1 = document.getElementById("project-location-y-hs-1").value;
    if (projectLocationHsErrorValueX1 === "" || projectLocationHsErrorValueY1 === "") {
        projectLocationHsError1.textContent = "Chưa nhập tọa độ";
        isValid = false;
    } else {
        projectLocationHsError1.textContent = "";
    }
    const projectDvlhsErrorValue1 = document.getElementById("project-dvlhs-hs-1").value;
    if (projectDvlhsErrorValue1 === "") {
        projectDvlhsError1.textContent =  "Chưa nhập đơn vị lập hồ sơ";
        isValid = false;
    } else {
        projectDvlhsError1.textContent =  "";
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
    modal1.style.display = "none";
    modal11.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    closeModal1();
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target === modal) {
        closeModal();
    }
    if (event.target === modal1) {
        closeModal();
    }
    if (event.target === modal11) {
        closeModal();
    }
    if (event.target === modal2) {
        closeModal1();
    }
    if (event.target === modal3) {
        closeModal1();
    }
    if (event.target === modal10) {
        closeModal1();
    }
    if (event.target === modal4) {
        closeModal2();
    }
    if (event.target === modal5) {
        closeModal2();
    }
    if (event.target === modal12) {
        closeModal2();
    }
    if (event.target === modal6) {
        closeModal3();
    }
    if (event.target === modal7) {
        closeModal3();
    }
    if (event.target === modal13) {
        closeModal3();
    }
    if (event.target === modal8) {
        closeModal4();
    }
    if (event.target === modal9) {
        closeModal4();
    }
    if (event.target === modal14) {
        closeModal4();
    }
    if (event.target === modalKhac) {
        closeModalKhac();
    }
    if (event.target === modalKhac1) {
        closeModalKhac();
    }
    if (event.target === modalKhac2) {
        closeModalKhac();
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
    if (event.target !== functionListKhac && event.target !== addNewBtnKhac) {
        functionListKhac.style.display = "none";
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