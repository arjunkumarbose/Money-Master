const calculateBtn = document.getElementById("calculateBtn");
      const resultSection = document.getElementById("resultSection");
      const totalExpensesSpan = document.getElementById("totalExpenses");
      const balanceSpan = document.getElementById("balance");
      const savingPercentageInput = document.getElementById("savingPercentage");
      const saveBtn = document.getElementById("saveBtn");
      const savingsAmountSpan = document.getElementById("savingsAmount");
      const remainingBalanceSpan = document.getElementById("remainingBalance");

      calculateBtn.addEventListener("click", () => {
        const income = parseFloat(document.getElementById("income").value);
        const foodExpenses = parseFloat(document.getElementById("food").value);
        const rentExpenses = parseFloat(document.getElementById("rent").value);
        const clothingExpenses = parseFloat(
          document.getElementById("clothes").value
        );

        const totalExpenses = foodExpenses + rentExpenses + clothingExpenses;
        const balance = income - totalExpenses;

        totalExpensesSpan.textContent = totalExpenses.toFixed(2);
        balanceSpan.textContent = balance.toFixed(2);

        resultSection.classList.remove("hidden");
      });

      saveBtn.addEventListener("click", () => {
        const savingPercentage = parseFloat(savingPercentageInput.value);
        const balance = parseFloat(balanceSpan.textContent);

        const savingsAmount = (balance * savingPercentage) / 100;
        const remainingBalance = balance - savingsAmount;

        savingsAmountSpan.textContent = savingsAmount.toFixed(2);
        remainingBalanceSpan.textContent = remainingBalance.toFixed(2);
      });