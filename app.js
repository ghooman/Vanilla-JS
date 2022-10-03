// document
//   .querySelector(".navbar-toggler")
//   .addEventListener("click", function () {
//     document.querySelector(".list-group").classList.toggle("show");
//   });
$(".navbar-toggler").on("click", function () {
  $(".list-group").toggleClass("show");
});

$("#login").on("click", function () {
  $(".black-bg").addClass("show-modal");
});

$("#close").on("click", function () {
  $(".black-bg").removeClass("show-modal");
});

$("form").on("submit", function (e) {
  if (document.getElementById("email").value === "") {
    e.preventDefault();
    alert("아이디를 입력하세요");
  }
  if (document.getElementById("pw").value === "") {
    e.preventDefault();
    alert("비밀번호를 입력하세요");
  }
  if (document.getElementById("pw").value.length < 6) {
    e.preventDefault();
    alert("비밀번호를 6자 이상 입력하세요.");
  }
});
