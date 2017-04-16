class TaskCollection {
	constructor(tasks = []) {
		this.tasks = tasks;
	}

	dump() {
		console.log(this.tasks);
	}
}

tl = new TaskCollection([
	'chekc 1',
	'chekc 2',
	'check 3'
]);

tl.dump();
