window.addEventListener('keydown', playSound)
window.addEventListener('keyup', removeStyle)
function playSound(e) {

	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
	console.log(key)

	if(!audio) return;
	if(!key) return;

	audio.currentTime = 0
	audio.play()

	key.classList.add('playing')
}

function removeStyle(e) {
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
	if(!key) return;
	key.classList.remove('playing')
}

// function removeTransition(e) {
// 	if (e.propertyName !== 'transform') return ;

// 	// console.log(e.propertyName)
// 	this.classList.remove('playing')
// }
// const keys = document.querySelectorAll('.key')
// keys.forEach(key => {
// 	key.addEventListener('keyup', ()=>{console.log('sdf')})
// })