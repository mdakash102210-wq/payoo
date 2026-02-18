document.getElementById("login-btn").addEventListener("click", function () {
  console.log("click dane");
  let number = document.getElementById("input-number").value;
  let pin = document.getElementById("input-password").value;
  console.log(number);
  console.log(pin);
  if (number == "01815582214" && pin == "1234") {
    alert("login successfully");
    // window.location.replace('home.js')
    window.location.assign("home.html");
  } else {
    alert("login faild");
    return;
  }
});
