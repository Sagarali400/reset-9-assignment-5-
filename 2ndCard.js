document
  .getElementById("donate-button2")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const inputValue = document.getElementById("donate-input2").value;
    const inputNumber = parseFloat(inputValue);
    if (inputNumber >= 0) {
      const cardValue = document.getElementById("card-value2").innerText;
      const cardValueNumber = parseFloat(cardValue);
      const cardNewBalance = cardValueNumber + inputNumber;
      document.getElementById("card-value2").innerText = cardNewBalance;
      const totalBalance = document.getElementById("total-balance").innerText;
      const totalBalanceNumber = parseFloat(totalBalance);
      const newTotalBalance = totalBalanceNumber - inputNumber;
      document.getElementById("total-balance").innerText = newTotalBalance;

      const historyContainer = document.createElement("div");
      historyContainer.className =
        "bg-yellow-300 border-2 border-red mx-40 rounded-lg p-4";
      historyContainer.innerHTML = `
      <p>${inputNumber} Taka is Donated for Flood Relief in Feni,Bangladesh</p>
      <p>Date : ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} GMT +0600 (Bangladesh Standard Time)</p>
      
      `;
      document
        .getElementById("history-container")
        .appendChild(historyContainer);

      // alert section
      alert('You have Donated for Humankind successfully!')
    } else {
      alert(`Invalid donation amount`);
    }
  });
