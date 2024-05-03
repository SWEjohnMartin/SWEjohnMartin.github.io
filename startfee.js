function calculate() {
  let startupfee = document.getElementById("startupfee").value;
  //alert("Hola " + startupfee);

  let EA = Number(document.getElementById("EA").value);
  let R = Number(document.getElementById("R").value);
  let MA = Number(document.getElementById("MA").value);
  let IS = Number(document.getElementById("IS").value);
  let LA = Number(document.getElementById("LA").value);
  let BA = Number(document.getElementById("BA").value);
  let CHC = Number(document.getElementById("CHC").value);
  let DR = document.getElementById("DR").value;
  let OT = document.getElementById("OT").value;

  let numberOfStaffers = EA + R + MA + IS + LA + BA + CHC;
  let startupfeeAfterTheDiscount = 0;
  let details = ``;
  let moreThanOneStaffer = 0;
  let stafferDetails = ``;

  if (numberOfStaffers === 1 && OT === "New Deal") {
    startupfeeAfterTheDiscount = 975;
    document.getElementById("startupfee").value = 975;
    details = `Opportunity Type: ${OT}
      Number of staffers: 1
      Startup Fee Total: $975.00`;
  } else if (numberOfStaffers > 1 && OT === "New Deal") {
    moreThanOneStaffer = numberOfStaffers - 1;
    startupfeeAfterTheDiscount = 975 + moreThanOneStaffer * 750;
    document.getElementById("startupfee").value = 975;
    for (let i = 0; i < numberOfStaffers; i++) {
      if (i === 0) {
        stafferDetails += `Staffer #${i + 1}: $975.00
              `;
      } else {
        stafferDetails += `Staffer #${i + 1}: $750.00
              `;
      }
    }
    details = `Opportunity Type: ${OT}
      Number of staffers: ${numberOfStaffers}
      ${stafferDetails}
      Startup Fee Total: $${startupfeeAfterTheDiscount}.00`;
  } else if (numberOfStaffers === 1 && OT === "Fast-Track") {
    startupfeeAfterTheDiscount = 750;
    document.getElementById("startupfee").value = 750;
    details = `Opportunity Type: ${OT}
      Number of staffers: 1
      Startup Fee Total: $750.00`;
  } else if (numberOfStaffers > 1 && OT === "Fast-Track") {
    moreThanOneStaffer = numberOfStaffers - 1;
    startupfeeAfterTheDiscount = 750 + moreThanOneStaffer * 750;
    document.getElementById("startupfee").value = 750;
    for (let i = 0; i < numberOfStaffers; i++) {
      if (i === 0) {
        stafferDetails += `Staffer #${i + 1}: $750.00
              `;
      } else {
        stafferDetails += `Staffer #${i + 1}: $750.00
              `;
      }
    }
    details = `Opportunity Type: ${OT}
      Number of staffers: ${numberOfStaffers}
      ${stafferDetails}
      Startup Fee Total: $${startupfeeAfterTheDiscount}.00`;
  } else if (numberOfStaffers === 0 && OT === "") {
    details = `Opportunity Type: ${OT}
      Number of staffers: ${numberOfStaffers}
      ${stafferDetails}
      Startup Fee Total: $${startupfeeAfterTheDiscount}.00`;
    alert("Select at least one staffer and one Opportunity Type!");
  } else if (numberOfStaffers > 0 && OT === "") {
    details = `Opportunity Type: ${OT}
      Number of staffers: ${numberOfStaffers}
      ${stafferDetails}
      Startup Fee Total: $${startupfeeAfterTheDiscount}.00`;
    alert("Select an Opportunity Type option!");
  } else if (numberOfStaffers === 0 && OT === "New Deal") {
    details = `Opportunity Type: ${OT}
      Number of staffers: ${numberOfStaffers}
      ${stafferDetails}
      Startup Fee Total: $${startupfeeAfterTheDiscount}.00`;
    alert("Select at least one staffer!");
  } else if (numberOfStaffers === 0 && OT === "Fast-Track") {
    details = `Opportunity Type: ${OT}
      Number of staffers: ${numberOfStaffers}
      ${stafferDetails}
      Startup Fee Total: $${startupfeeAfterTheDiscount}.00`;
    alert("Select at least one staffer!");
  }

  document.getElementById("numberOfStaffers").value = numberOfStaffers;
  document.getElementById("startfeeamount").value = startupfeeAfterTheDiscount;
  document.getElementById("details").innerText = details;
}
