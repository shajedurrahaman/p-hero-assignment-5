const buyTicketsButton = document.getElementById("buyTickets");

buyTicketsButton.addEventListener("click", function () {
  const routeSection = document.getElementById("route");
  if (routeSection) {
    routeSection.scrollIntoView({ behavior: "smooth" });
  }
});
const allButtons = document.getElementsByClassName("btn");
let sum = 0;
let couponApplied = false;

for (let btn of allButtons) {
  btn.addEventListener("click", (e) => {
    if (!btn.classList.contains("selected")) {
      btn.classList.add("selected");
      sum++;
      btn.style.backgroundColor = "#1DD100";
      setInnerText("count", sum);

      const btnAppend = e.target.innerText;
      const economy = "economy";
      const price = 550;
      const appendItems = document.getElementById("append-items");

      const li = document.createElement("li");
      const p = document.createElement("p");
      p.innerText = btnAppend;
      const p2 = document.createElement("p");
      p2.innerText = economy;
      const p3 = document.createElement("p");
      p3.innerText = price;

      li.appendChild(p);
      li.appendChild(p2);
      li.appendChild(p3);
      appendItems.appendChild(li);

      const leftSeat = document.getElementById("left").innerText;
      const convertedLeftSeat = parseInt(leftSeat);

      if (sum >= 4) {
        for (let btn of allButtons) {
          btn.setAttribute("disabled", true);
        }
      }

      document.getElementById("left").innerText = convertedLeftSeat - 1;

      const totalPrice = document.getElementById("total-price").innerText;
      const convertedPrice = parseInt(totalPrice);
      const priceTotal = convertedPrice + price;

      const discountPrice = document.getElementById("discount-price").innerText;
      const convertedDiscountPrice = parseInt(discountPrice);
      const afterDiscount = convertedDiscountPrice + price;

      setInnerText("total-price", priceTotal);
      setInnerText("discount-price", afterDiscount);
    }
  });
}

document.getElementById("applyCoupon").addEventListener("click", () => {
  const couponCode = document.getElementById("couponCode").value;
  if (
    sum >= 4 &&
    !couponApplied &&
    (couponCode === "NEW15" || couponCode === "Couple 20")
  ) {
    couponApplied = true;
    alert("Coupon code accepted! You've received a discount.");
    document.getElementById("couponCode").style.display = "none";
    document.getElementById("applyCoupon").style.display = "none";
    const totalPriceElement = document.getElementById("total-price");
    const discountedPrice = totalPriceElement.innerText * 0.85;
    setInnerText("discount-price", discountedPrice);
  } else {
    alert("Please select at least 4 seat or check your coupon code is correct");
  }
  document.getElementById("couponCode").value = "";
});

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
// input field id here 
const pName = document.getElementById("pName");
const pNum = document.getElementById("pNum");
const gmail = document.getElementById("gmail");
const nextButton = document.getElementById("nextButton");

function checkInputs() {
  return pName.value !== "" && pNum.value !== "" && gmail.value !== "";
}

pName.addEventListener("input", function () {
  nextButton.disabled = !checkInputs();
});

pNum.addEventListener("input", function () {
  nextButton.disabled = !checkInputs();
});

gmail.addEventListener("input", function () {
  nextButton.disabled = !checkInputs();
});

nextButton.addEventListener("click", function () {
  if (checkInputs() == true) {
    // alert("Success! All input fields have values.");
    document.getElementById("pName").value = "";
    document.getElementById("pNum").value = "";
    document.getElementById("gmail").value = "";
  }
});
function changeButtonColor() {
  if (checkInputs()) {
    nextButton.style.backgroundColor = "#1DD100";
  } else {
    nextButton.style.backgroundColor = "";
  }
}
pName.addEventListener("input", function () {
  changeButtonColor();
});

pNum.addEventListener("input", function () {
  changeButtonColor();
});

gmail.addEventListener("input", function () {
  changeButtonColor();
});
changeButtonColor();

const popup = document.getElementById('popup') 
function openPopup() {
	popup.classList.add('open-popup')
}
function closePopup() {
	popup.classList.remove('open-popup')
}



