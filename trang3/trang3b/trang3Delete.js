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

document.getElementById("toggleBtnkhac").addEventListener("click", function() {
    let deleteColumns = document.getElementsByClassName("deleteColumnKhac");
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
