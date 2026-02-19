document.getElementById("add-mony-btn").addEventListener("click", function () {
  let selectBank = mashingInputToValue("select-bank");

  if (selectBank == "Select Your Bank") {
    alert("Please Select Your Bank");
    return;
  }
  let bankNumber = mashingInputToValue("add-acount-number");
  if (bankNumber.length !== 11) {
    alert("Please Enter Your 11 Digit Number");
    return;
  }
  let addAmount = mashingInputToValue("add-to-amount");
  let addAmountparsenInt = parseInt(addAmount);
  if (addAmountparsenInt >= 100000) {
    alert("Max Amount : 100000. Please Enter valid Amount");
    return;
  }
  let currentBlance = mashingInnerText("curent-amount");
  let currentblanceparsentInt = parseInt(currentBlance);
  let newBlances = currentblanceparsentInt + addAmountparsenInt;

  let addMonyPin = mashingInputToValue("add-pin-number");
  if (addMonyPin !== "1234") {
    alert(" Your Pin Invalid");
  } else {
    alert(`Add mony Successfull from ${selectBank} 
         ad ${new Date()}`);
    balanceSet(newBlances);
  }
});
