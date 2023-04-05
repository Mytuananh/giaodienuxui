var selectElement = document.getElementById("mySelect");

selectElement.addEventListener("change", function() {
    var selectedOption = this.options[this.selectedIndex];
    if (selectedOption.value !== "#") {
        window.location.href = selectedOption.value;
    }
});


var selectElement1 = document.getElementById("mySelect1");

selectElement1.addEventListener("change", function() {
    var selectedOption = this.options[this.selectedIndex];
    if (selectedOption.value !== "#") {
        window.location.href = selectedOption.value;
    }
});
