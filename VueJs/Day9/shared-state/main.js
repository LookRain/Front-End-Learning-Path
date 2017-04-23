let store = {
	user: {
		name: "john"
	}
}

new Vue({
	el: '#one',
	data: {
		foo: 'bar',
		shared: store
	}
});

new Vue({
	el: '#two',
	data: {
		foo: 'another bar',
		shared: store
	}
});