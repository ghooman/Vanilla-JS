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
    alert("아이디를 입력하세요");
  }
  if (document.getElementById("pw").value === "") {
    alert("비밀번호를 입력하세요");
  }
  if (document.getElementById("pw").value.length < 6) {
    alert("비밀번호를 6자 이상 입력하세요.");
  }
});

let count = 0;
$(".badge").on("click", function () {
  count += 1;
  if (count % 2 === 1) {
    $(".badge").html("Light 🔄");
  }
  if (count % 2 === 0) {
    $(".badge").html("Dark 🔄");
  }
});
