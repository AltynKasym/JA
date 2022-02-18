document.addEventListener("DOMContentLoaded", () => {
  const amount = document.querySelector("#amount");
  const percent = document.querySelector("#percent");
  const years = document.querySelector("#years");
  const monthly = document.querySelector("#monthly");
  const total = document.querySelector("#totally");

  document.querySelector("#loan-form").addEventListener("submit", (e) => {
    e.preventDefault();

    if (amount.value === "" || percent.value === "" || years.value === "") {
      alert("Введите данные");
      document.querySelector("#output").style = `display:none`;
    } else {
      document.querySelector("#loader").style = `display:block`;

      setTimeout(function () {
        document.querySelector("#loader").style = `display:none`;
      }, 1000);
      document.querySelector("#output").style = `display: block`;
    }

    const amountVal = Number(amount.value);
    const percentVal = Number(percent.value);
    const yearsVal = Number(years.value);
    const numberOfMonth = Number(yearsVal * 12);

    const totalLoun = amountVal + (amountVal / 100) * percentVal * yearsVal;
    const totalFee = (amountVal / 100) * percentVal * yearsVal;
    const monthlyPayment = totalLoun / numberOfMonth;
    const monthlyPaymentArounded = Math.round(monthlyPayment);
    monthly.innerHTML = monthlyPaymentArounded + "$";
    total.innerHTML = totalLoun + "$";
    fees.innerHTML = totalFee + "$";
  });
});
