document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    // Tạo nút đóng menu (❌) trên mobile
    const closeButton = document.createElement("span");
    closeButton.innerHTML = "❌";
    closeButton.classList.add("close-menu");
    navLinks.prepend(closeButton);

    // Khi click vào menu-toggle (☰), mở menu
    menuToggle.addEventListener("click", function () {
        navLinks.classList.add("active");
    });

    // Khi click vào ❌ hoặc một mục menu, đóng menu
    closeButton.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });

    navLinks.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            navLinks.classList.remove("active");
        }
    });

    // Khi click vào bất kỳ nơi nào ngoài menu, đóng menu
    document.addEventListener("click", function (event) {
        if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
            navLinks.classList.remove("active");
        }
    });
});
