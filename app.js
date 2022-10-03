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
  let emailInputValue = document.getElementById("email").value;
  let pwInputValue = document.getElementById("pw").value;
  if (emailInputValue === "") {
    alert("아이디를 입력하세요");
    e.preventDefault();
  }
  if (/\S+@\S+\.\S+/.test(emailInputValue) === false) {
    alert("이메일 형식이 아닙니다.");
    e.preventDefault();
  }
  if (pwInputValue === "") {
    alert("비밀번호를 입력하세요");
    e.preventDefault();
  }
  if (pwInputValue.length < 6) {
    alert("비밀번호를 6자 이상 입력하세요.");
    e.preventDefault();
  }
  if (/[A-Z]/.test(pwInputValue) === false) {
    alert("비밀번호에 대문자를 포함해야 합니다.");
    e.preventDefault();
  }
});

let count = 0;
$(".badge").on("click", function () {
  count += 1;
  if (count % 2 === 1) {
    $(".badge").html("Light 🔄");
    $("#navbar").addClass("navbar-dark bg-dark");
    $("#modeChange").addClass("dark");
  } else {
    $(".badge").html("Dark 🔄");
    $("#navbar").removeClass("navbar-dark bg-dark");
    $("#modeChange").removeClass("dark");
  }
});

let giftCount = 5;

let giftCountDown = setInterval(function () {
  giftCount -= 1;
  if (giftCount >= 0) {
    document.querySelector("#num").innerHTML = giftCount;
  }
}, 1000);

// clearTimeout(giftCountDown);
// document.querySelector("#gift").style.display = "none"
