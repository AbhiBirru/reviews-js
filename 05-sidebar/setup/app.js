const toggleBtn = document.querySelector(".sidebar-toggle");
const closBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function () {
  console.log(sidebar.classList);
  sidebar.classList.toggle("show-sidebar");
});

closBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
