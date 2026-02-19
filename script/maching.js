function mashingInputToValue(id) {
  let idValue = document.getElementById(id).value;
  return idValue;
}
function mashingInnerText(span) {
  let innerText = document.getElementById(span).innerText;
  return innerText;
}

// balance set function
function balanceSet(event) {
  let balance = document.getElementById("curent-amount");
  let balanceinnerText = balance.innerText;
  balance.innerText = event;
}
