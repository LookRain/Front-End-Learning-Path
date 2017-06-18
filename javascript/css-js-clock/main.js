const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

const offset = 90
function setDate() {
	const now = new Date()

	const seconds = now.getSeconds()
	const minutes = now.getMinutes()
	const hours = now.getHours()

	const secondsDegrees = (seconds / 60) * 360 + offset
	const minutesDegrees = (minutes / 60) * 360 + offset
	const hoursDegrees = (hours / 60) * 360 + offset

	secondHand.style.transform = `rotate(${secondsDegrees}deg)`
	minuteHand.style.transform = `rotate(${minutesDegrees}deg)`
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`


	console.log(hours + ' ' + minutes + ' ' + seconds + ' ')
}
setInterval(setDate, 1000)