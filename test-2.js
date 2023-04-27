function displayFileCount(event) {
    var input = event.target;
    var label = input.nextElementSibling;
    var labelText = label.querySelector('.custom-file-input__text');
    if (input.files.length === 0) {
        labelText.innerHTML = 'Chọn tệp';
    } else {
        labelText.innerHTML = input.files.length + ' file đã chọn';
    }
}
