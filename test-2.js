// Lấy thẻ a và modal
var openModal = document.getElementById("open-modal");
var modal = document.getElementById("modal");

// Thêm sự kiện click vào thẻ a
openModal.addEventListener("click", function() {
    modal.style.display = "block"; // Hiển thị modal
});

// Thêm sự kiện click vào nút đóng modal
var closeBtn = document.getElementsByClassName("close")[0];
closeBtn.addEventListener("click", function() {
    modal.style.display = "none"; // Ẩn modal
});

// Thêm sự kiện click vào nền mờ của modal để ẩn modal
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none"; // Ẩn modal
    }
});
