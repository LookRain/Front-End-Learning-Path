// let button = document.querySelector('button');

// console.log('before');
// button.onclick = function () {
//   console.log('i was clicked')
// };
// console.log('after');


/*
Above are the traditional way of doing async in javascript


Use Prome instead
*/

var timer = function(length) {
	return new Promise(function(resolve, reject) {
	console.log('init promise');
  setTimeout(function() {
  	console.log('timeout done');
    resolve();
  }, 5000);
});
}

timer(4000).then(()=>alert('done!'));