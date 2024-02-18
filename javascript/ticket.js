const buyTicketsButton = document.getElementById("buyTickets");

// Add a click event listener to the button
buyTicketsButton.addEventListener("click", function () {
  // Scroll to the section with id "route"
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
    const totalPriceElement = document.getElementById("total-price");
    const discountedPrice = totalPriceElement.innerText * 0.85;
    setInnerText("total-price", discountedPrice);
  } else {
    alert("Please select at least 4 seat or check your coupon code is correct");
  }
  document.getElementById("couponCode").value = "";
});

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

const pName = document.getElementById('pName')
const pNum = document.getElementById('pNum')
const gmail = document.getElementById('gmail')

const nextButton = document.getElementById('nextButton')
nextButton.addEventListener('click',function () {
	if(pName === "" && pNum === "" && gmail === "") {
		alert('please fill up the enter field')
	}
	alert('Success')
})