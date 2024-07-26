function calculate() {
  let VAT = document.getElementById("VAT").value;
  let HW = document.getElementById("HW").value;
  let SR = document.getElementById("SR");

  let monthlyWage = 0;
  let yearlyWage = 0;

  const lineItemTypesListNewPrices2024 = [
    {
      id: "Billing Assistant",
      amount: 2195,
    },
    {
      id: "Client Happiness Coordinator",
      amount: 2295,
    },
    {
      id: "Legal Assistant",
      amount: 2445,
    },
    {
      id: "Legal Assistant Spanish-speaking",
      amount: 2645,
    },
    {
      id: "Intake Specialist",
      amount: 2445,
    },
    {
      id: "Marketing Assistant",
      amount: 2695,
    },
    {
      id: "Receptionist",
      amount: 2195,
    },
    {
      id: "Executive Assistant",
      amount: 2295,
    },
    {
      id: "Virtual Case Manager",
      amount: 2595,
    },
  ];

  let VAT_MonthlySalary = 0;

  for (let i = 0; i < lineItemTypesListNewPrices2024.length; i++) {
    if (lineItemTypesListNewPrices2024[i].id === VAT) {
      VAT_MonthlySalary = lineItemTypesListNewPrices2024[i].amount;
    }
  }

  let VAT_AnnualSalary = VAT_MonthlySalary * 12;
  monthlyWage = HW * 160;
  yearlyWage = monthlyWage * 12;
  let monthlyTotal = monthlyWage - VAT_MonthlySalary;
  let annualTotal = yearlyWage - VAT_AnnualSalary;

  monthlyWage = formatMoneyNumber(monthlyWage);
  yearlyWage = formatMoneyNumber(yearlyWage);
  VAT_AnnualSalary = formatMoneyNumber(VAT_AnnualSalary);
  VAT_MonthlySalary = formatMoneyNumber(VAT_MonthlySalary);
  monthlyTotal = formatMoneyNumber(Number(monthlyTotal));
  annualTotal = formatMoneyNumber(Number(annualTotal));

  let alertMessage = `Alert Message:
`;
  let alertFlag = false;

  if (HW === "" || HW === 0 || HW === undefined) {
    alertMessage += `- The hourly wage value is required!
`;
    alertFlag = true;
  }
  if ((VAT === "") | (HW === undefined)) {
    alertMessage += `- The Virtual Assistant Type value is required!
`;
    alertFlag = true;
  }
  if (alertFlag) {
    alert(alertMessage);
  } else {
    SR.innerHTML = `
<table class="table">
  <thead>
    <tr>
      <th scope="col" class="textAlingCenter">Monthly Salaries</th>
      <th scope="col" class="textAlingCenter">Amount</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <th scope="col">Conventional Staffer Salary:</th>
      <td scope="col" class="textAlingRight">${monthlyWage}</td>
    </tr>
    <tr>
      <th scope="row">GSU Staffer Salary:</th>
      <td class="textAlingRight">${VAT_MonthlySalary}</td>
    </tr>
    <tr>
      <th scope="row">Total Savings:</th>
      <td class="textAlingRight" style="color:green; font-weight: bold;">${monthlyTotal}</td>
    </tr>
  </tbody>
</table>
<table class="table">
  <thead>
    <tr>
      <th scope="col" class="textAlingCenter">Annual Salaries</th>
      <th scope="col" class="textAlingCenter">Amount</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <th scope="col">Conventional Staffer Salary:</th>
      <td scope="col" class="textAlingRight">${yearlyWage}</td>
    </tr>
    <tr>
      <th scope="row">GSU Staffer Salary:</th>
      <td class="textAlingRight">${VAT_AnnualSalary}</td>
    </tr>
    <tr>
      <th scope="row">Total Savings:</th>
      <td class="textAlingRight" style="color:green; font-weight: bold;">${annualTotal}</td>
    </tr>
  </tbody>
</table>`;
  }
}

function formatMoneyNumber(amount) {
  let numberToString = amount.toFixed(2);
  let formattedNumber = "";
  let stringLength = numberToString.length;

  if (stringLength === 7)
    formattedNumber =
      "$" + numberToString.slice(0, 1) + "," + numberToString.slice(1);
  else if (stringLength === 8)
    formattedNumber =
      "$" + numberToString.slice(0, 2) + "," + numberToString.slice(2);
  else if (stringLength === 9)
    formattedNumber =
      "$" + numberToString.slice(0, 3) + "," + numberToString.slice(3);
  else if (stringLength === 10)
    formattedNumber =
      "$" +
      numberToString.slice(0, 1) +
      "," +
      numberToString.slice(1, 4) +
      "," +
      numberToString.slice(4);
  else if (stringLength === 11)
    formattedNumber =
      "$" +
      numberToString.slice(0, 2) +
      "," +
      numberToString.slice(2, 5) +
      "," +
      numberToString.slice(5);
  else if (stringLength === 12)
    formattedNumber =
      "$" +
      numberToString.slice(0, 3) +
      "," +
      numberToString.slice(3, 6) +
      "," +
      numberToString.slice(6);
  else if (stringLength <= 6) formattedNumber = "$" + numberToString;
  return formattedNumber;
}
