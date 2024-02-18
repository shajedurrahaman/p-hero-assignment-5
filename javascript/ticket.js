const buyTickets = document.getElementById('buyTickets')
buyTickets.addEventListener('click', () => {
	const route = document.getElementById('route')
})

const allButton = document.getElementsByClassName('btn')
let sum = 0;

for (let btn of allButton) {
	btn.addEventListener('click' , (e) => {
		sum++;
		
		btn.style.backgroundColor = '#1DD100'
		setInnerText('count', sum)
		
		const btnAppend = e.target.allButton
		const economy = 'economy'
		const price = 550;
		const appendItems = document.getElementById('append-items')

		const li = document.createElement('li')

		const li1 = document.createElement('li')
		li1.innerText = btnAppend
		const li2 = document.createElement('li')
		li2.innerText = economy
		const li3 = document.createElement('li')
		li3.innerText = price;

		li.appendChild(li1)
		li.appendChild(li2)
		li.appendChild(li3)

		appendItems.appendChild(li)

		const totalPrice = document.getElementById('total-price').innerText
		const convertedPrice = parseInt(totalPrice);
		document.getElementById('total-price');
		const priceTotal = convertedPrice + parseInt(price)

		const discountPrice = document.getElementById('discount-price').innerText
		const convertedDiscountPrice = parseInt(discountPrice)
		document.getElementById('discount-price');
		const afterDiscount = convertedDiscountPrice + parseInt(price)

		setInnerText('total-price', priceTotal)
		setInnerText('discount-price', afterDiscount)
	})
}
function setInnerText(id,value) {
	document.getElementById(id).innerText = value;
}