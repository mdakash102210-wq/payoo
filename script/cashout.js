document.getElementById("withdrow-btn").addEventListener("click", function () {
  let agentNumber = mashingInputToValue("cashout-number");
  if (agentNumber.length !== 11) {
    alert("Invalid Phone Number");
    return;
  }
  let currentBalence = mashingInnerText("curent-amount");
  console.log(currentBalence);

  let inputAmount = mashingInputToValue("cashout-amount");

  if (
    !(
      parseInt(currentBalence) >= parseInt(inputAmount) &&
      parseInt(inputAmount) > 0
    )
  ) {
    alert("Invalid Amount");
    return;
  }
  // console.log(Number(inputAmount), Number(currentBalence))
  let newblance = parseInt(currentBalence) - parseInt(inputAmount);
  console.log(typeof newblance);

  let inputPin = mashingInputToValue("input-pin");
  if (inputPin !== "1234") {
    alert("Invalid Pin");
    return;
  } else {
    balanceSet(newblance);
    alert("Cash Out Successfull");
  }
});
