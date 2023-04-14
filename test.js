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

let deleteBtns = document.getElementsByClassName("deleteBtn");
for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener("click", function() {
        if (confirm("Bạn chắc chắn muốn xóa chứ?")) {
            this.closest("tr").remove();
        }
    });
}
