function calculate() {
  let RC = document.getElementById("RC").value;
  let TR = document.getElementById("TR").value;
  let OS = document.getElementById("OS").value;
  let BA = document.getElementById("BA").value;
  let UDCM_field = document.getElementById("UDCM");
  let NM_field = document.getElementById("NM");
  UDCM_field.innerText = "Calculating...";
  NM_field.innerText = "Calculating...";

  let UDCM = "";
  let NM = "";

  let UDCM_color = "rgb(80, 79, 79)";
  let UDCM_bgColor = "rgb(239, 239, 239)";
  let NM_color = "rgb(80, 79, 79)";
  let NM_bgColor = "rgb(239, 239, 239)";
  let message = "You are missing the following information: ";

  if (RC === "" || TR === "" || OS === "" || BA === "") {
    if (RC === "") {
      message += `
- Cancel/Replace value`;
    }
    if (TR === "") {
      message += `
- Termination/Resignation value`;
    }
    if (OS === "") {
      message += `
- Other Staffers? value`;
    }
    if (BA === "") {
      message += `
- Before 15th /After 15th value`;
    }
    alert(message);
  }

  if (
    RC === "Replace" &&
    TR === "Termination" &&
    OS === "Yes" &&
    BA === "Before 15th"
  ) {
    UDCM = "Credit";
    NM = "Not yet paid";
  } else if (
    RC === "Replace" &&
    TR === "Termination" &&
    OS === "No" &&
    BA === "Before 15th"
  ) {
    UDCM = "Credit";
    NM = "Not yet paid";
  } else if (
    RC === "Replace" &&
    TR === "Termination" &&
    OS === "Yes" &&
    BA === "After 15th"
  ) {
    UDCM = "Credit";
    NM = "Credit";
  } else if (
    RC === "Replace" &&
    TR === "Termination" &&
    OS === "No" &&
    BA === "After 15th"
  ) {
    UDCM = "Credit";
    NM = "Credit";
  }
  //========================================================
  else if (
    RC === "Replace" &&
    TR === "Resignation" &&
    OS === "Yes" &&
    BA === "Before 15th"
  ) {
    UDCM = "Credit";
    NM = "Not yet paid";
  } else if (
    RC === "Replace" &&
    TR === "Resignation" &&
    OS === "No" &&
    BA === "Before 15th"
  ) {
    UDCM = "Credit";
    NM = "Not yet paid";
  } else if (
    RC === "Replace" &&
    TR === "Resignation" &&
    OS === "Yes" &&
    BA === "After 15th"
  ) {
    UDCM = "Credit";
    NM = "Credit";
  } else if (
    RC === "Replace" &&
    TR === "Resignation" &&
    OS === "No" &&
    BA === "After 15th"
  ) {
    UDCM = "Credit";
    NM = "Credit";
  }
  //========================================================
  else if (
    RC === "Replace" &&
    TR === "Resignation" &&
    OS === "Yes" &&
    BA === "Before 15th"
  ) {
    UDCM = "Credit";
    NM = "Not yet paid";
  } else if (
    RC === "Replace" &&
    TR === "Resignation" &&
    OS === "No" &&
    BA === "Before 15th"
  ) {
    UDCM = "Credit";
    NM = "Not yet paid";
  } else if (
    RC === "Replace" &&
    TR === "Resignation" &&
    OS === "Yes" &&
    BA === "After 15th"
  ) {
    UDCM = "Credit";
    NM = "Credit";
  } else if (
    RC === "Replace" &&
    TR === "Resignation" &&
    OS === "No" &&
    BA === "After 15th"
  ) {
    UDCM = "Credit";
    NM = "Credit";
  }
  //========================================================
  else if (
    RC === "Cancel" &&
    TR === "Termination" &&
    OS === "Yes" &&
    BA === "Before 15th"
  ) {
    UDCM = "Credit";
    NM = "Not yet paid";
  } else if (
    RC === "Cancel" &&
    TR === "Termination" &&
    OS === "No" &&
    BA === "Before 15th"
  ) {
    UDCM = "Credit/Refund";
    NM = "Not yet paid";
    UDCM_color = "rgb(239, 239, 239)";
    UDCM_bgColor = "rgb(61, 145, 201)";
  } else if (
    RC === "Cancel" &&
    TR === "Termination" &&
    OS === "Yes" &&
    BA === "After 15th"
  ) {
    UDCM = "Credit";
    NM = "Credit";
  } else if (
    RC === "Cancel" &&
    TR === "Termination" &&
    OS === "No" &&
    BA === "After 15th"
  ) {
    UDCM = "Credit/Refund";
    NM = "Credit/Refund";
    UDCM_color = "rgb(239, 239, 239)";
    UDCM_bgColor = "rgb(61, 145, 201)";
    NM_color = "rgb(239, 239, 239)";
    NM_bgColor = "rgb(61, 145, 201)";
  }
  //========================================================
  else if (
    RC === "Cancel" &&
    TR === "Resignation" &&
    OS === "Yes" &&
    BA === "Before 15th"
  ) {
    UDCM = "Credit";
    NM = "Not yet paid";
  } else if (
    RC === "Cancel" &&
    TR === "Resignation" &&
    OS === "No" &&
    BA === "Before 15th"
  ) {
    UDCM = "Credit/Refund";
    NM = "Not yet paid";
    UDCM_color = "rgb(239, 239, 239)";
    UDCM_bgColor = "rgb(61, 145, 201)";
  } else if (
    RC === "Cancel" &&
    TR === "Resignation" &&
    OS === "Yes" &&
    BA === "After 15th"
  ) {
    UDCM = "Credit";
    NM = "Credit";
  } else if (
    RC === "Cancel" &&
    TR === "Resignation" &&
    OS === "No" &&
    BA === "After 15th"
  ) {
    UDCM = "Credit/Refund";
    NM = "Credit/Refund";
    UDCM_color = "rgb(239, 239, 239)";
    UDCM_bgColor = "rgb(61, 145, 201)";
    NM_color = "rgb(239, 239, 239)";
    NM_bgColor = "rgb(61, 145, 201)";
  }

  UDCM_field.innerText = UDCM;
  NM_field.innerText = NM;
  UDCM_field.style.color = UDCM_color;
  UDCM_field.style.backgroundColor = UDCM_bgColor;
  NM_field.style.color = NM_color;
  NM_field.style.backgroundColor = NM_bgColor;
}
