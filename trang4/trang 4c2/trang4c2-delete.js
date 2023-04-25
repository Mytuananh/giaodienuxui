document.getElementById("toggleBtnDelete").addEventListener("click", function() {
    let deleteColumns = document.getElementsByClassName("deleteColumnCT");
    let editColumns = document.getElementsByClassName("EditColumnCT");
    for (let i = 0; i < deleteColumns.length; i++) {
        if (deleteColumns[i].style.display === "none") {
            deleteColumns[i].style.display = "table-cell";
            editColumns[i].style.display = "none";
        } else {
            deleteColumns[i].style.display = "none";
        }
    }
});

document.getElementById("toggleBtnUpdate").addEventListener("click", function() {
    let editColumns = document.getElementsByClassName("EditColumnCT");
    let deleteColumns = document.getElementsByClassName("deleteColumnCT");
    for (let i = 0; i < editColumns.length; i++) {
        if (editColumns[i].style.display === "none") {
            editColumns[i].style.display = "table-cell";
            deleteColumns[i].style.display = "none";
        } else {
            editColumns[i].style.display = "none";
        }
    }
});