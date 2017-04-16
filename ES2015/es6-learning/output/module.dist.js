var TaskCollection = function TaskCollection(tasks) {
	if ( tasks === void 0 ) tasks = [];

	this.tasks = tasks;
};

TaskCollection.prototype.dump = function dump () {
	console.log(this.tasks);
};

tl = new TaskCollection([
	'chekc 1',
	'chekc 2',
	'check 3'
]);

tl.dump();
