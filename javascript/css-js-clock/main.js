const hand = document.querySelector('.hand')
const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

const offset = 90
function positionNums() {
	const numbersArray = document.querySelectorAll('.numbers')
	const numArray = document.querySelectorAll('.number')

	const degSpace = (1 / 12) * 360

	numbersArray.forEach((outer_div, id) => {outer_div.style.transform = `rotate(${id*degSpace}deg)`})
	numArray.forEach((inner_div, id) => {inner_div.style.transform = `rotate(${-id*degSpace}deg)`})
}

function setDate() {
	const now = new Date()

	const seconds = now.getSeconds()
	const minutes = now.getMinutes()
	const hours = now.getHours()

	const secondsDegrees = (seconds / 60) * 360 + offset
	const minutesDegrees = (minutes / 60) * 360 + offset
	const hoursDegrees = (hours / 12) * 360 + offset

	if (seconds == 0) {
		hand.style.transition = 'none'
	} else {
		hand.style.transition = 'all 0.05s'

	}

	secondHand.style.transform = `rotate(${secondsDegrees}deg)`
	minuteHand.style.transform = `rotate(${minutesDegrees}deg)`
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`



	console.log(hours + ' ' + minutes + ' ' + seconds + ' ')
}
setInterval(setDate, 1000)
positionNums()