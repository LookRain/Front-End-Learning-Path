Vue.component('task', {
	template: '<li><slot></slot></li>'
});
Vue.component('task-list', {
	template: `
		<div>
			<task v-for="task in tasks">
				{{ task.task }}
			</task>
		</div>
		`,

	data() {
		return {
			tasks: [
				{task: 'go to store', completed: false},
				{task: 'go to school', completed: true},
				{task: 'go to here', completed: false},
				{task: 'go to there', completed: false},
				{task: 'kill store', completed: true},
				{task: 'open store', completed: false},
			]
		};
	}
});

new Vue({
	el: '#root'
})