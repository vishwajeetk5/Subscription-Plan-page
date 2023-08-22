const buyButtons = document.querySelectorAll(".plan-button");
const payNote = document.getElementById("paynote");
const payBtn = document.getElementById("pay-btn");
let selectedPlanIndex = -1;

const plans = [
  { name: "Basic", price: 9 },
  { name: "Standard", price: 19 },
  { name: "Premium", price: 49 }
];

buyButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (selectedPlanIndex === index) {
      // Deselect the current plan if clicked again
      button.classList.remove("selected");
      selectedPlanIndex = -1;
      clearPayNoteAndButton();
    } else {
      if (selectedPlanIndex !== -1) {
        buyButtons[selectedPlanIndex].classList.remove("selected");
      }
      selectedPlanIndex = index;
      button.classList.add("selected");
      updatePayNoteAndButton(plans[index]);
    }
  });
});

payBtn.addEventListener("click", () => {
  if (selectedPlanIndex !== -1) {
    payBtn.innerHTML = "<h3>☑️ Payment Done</h3>";
    payBtn.classList.add("payment-done");
  }
});

function updatePayNoteAndButton(plan) {
  const startDate = new Date();
  const endDate = new Date();
  endDate.setMonth(endDate.getMonth() + 1);

  payNote.innerHTML = `You have selected <h2>${plan.name} Plan</h2> Which will be effective from <br> ${startDate.toDateString()} to ${endDate.toDateString()}`;
  payBtn.innerHTML = `<button><h2>Proceed to pay ₹ ${plan.price}</h2></button>`;
  window.scrollBy({
        top: 1100,
        behavior: "smooth",
      });
}

function clearPayNoteAndButton() {
  payNote.innerHTML = "";
  payBtn.innerHTML = "<h3>Choose any Plan</h3>";
  payBtn.classList.remove("payment-done");
}

// Before refactoring COde
// const buy = document.getElementsByClassName("plan-button");
// const payNote = document.getElementById("paynote");
// const payBtn = document.getElementById("pay-btn");
// let choosen = false;

// for (let i = 0; i < buy.length; i++) {
//   buy[i].addEventListener("click", () => {
//     if (i === 0 && !choosen) {
//       createPayNote(buy, "Basic", 9, i);
//     } else if (i === 1 && !choosen) {
//       createPayNote(buy, "Standard", 19, i);
//     } else if (i === 2 && !choosen) {
//       createPayNote(buy, "Premium", 49, i);
//     } else {
//       alert("Already you have choosen a plan");
//       return;
//     }

//     document.getElementById("topay").innerHTML = `<Button  id="pay-btn" >
//     <h3>Choose any Plan</h3>
//    </Button>`;
//   });
// }

// payBtn.addEventListener("click", () => {
//   choosen = true;
//   payBtn.innerHTML = "<h3>☑️ Payment Done</h3>";
//   payBtn.style.backgroundColor = "green";
//   payBtn.style.color = "white";
// });

// function createPayNote(a, plan, n, c) {
//   let sd = new Date();
//   let ld = new Date();
//   ld.setMonth(ld.getMonth() + 1);
//   payNote.innerHTML = `You have selected <h2>${plan} Plan </h2>Which will be effective
//        from <br> ${sd.toDateString() + " to " + ld.toDateString()}`;
//   payBtn.innerHTML = `<Button><h2>Proceed to pay ₹ ${n}</h2></Button>`;

//   const fug = document.querySelectorAll(".plan-button");

//   for (let i = 0; i < fug.length; i++) {
//     if (i !== c) {
//       fug[i].style.backgroundColor = " rgb(251, 137, 44)";
//     } else {
//       fug[i].style.backgroundColor = " green";
//     }
//   }
//   window.scrollBy({
//     top: 1100,
//     behavior: "smooth",
//   });
// }

