// document
//   .querySelector(".navbar-toggler")
//   .addEventListener("click", function () {
//     document.querySelector(".list-group").classList.toggle("show");
//   });
$(".navbar-toggler").on("click", function () {
  $(".list-group").toggleClass("show");
});
