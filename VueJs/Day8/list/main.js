window.Event = new Vue();

var STORAGE_KEY = 'todos'
var todoStorage = {
    fetch: function() {
        var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
        todos.forEach(function(todo, index) {
            todo.id = index
        })
        todoStorage.uid = todos.length
        return todos
    },
    save: function(todos) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    }
}


function remove(array, element) {
    const index = array.indexOf(element);

    if (index !== -1) {
        array.splice(index, 1);
    }
}

Vue.component('tasks-app', {
    template: `
        <div class="columns is-flex-mobile">
            <div class="column has-text-centered">
                <p class="title is-1 is-primary">V-todos</p>
                <p class="subtitle is-5">a todo app based on Vue.js</p>
                <form @submit.prevent="addToList">
                    <div class="columns">
                        <div class="column is-9">
                            <input v-model="newInput" type="text" class="input is-primary" autofocus required>
                        </div>
                        <div class="column is-1">
                            <button class="button is-primary" action="submit">Add</button>    
                        </div>
                        <div class="column is-2">
                            <button class="button is-danger" @click="clearAll">Clear All</button>
                        </div>
                    </div>
                    <p class="subtitle is-6">Click on Task to <span class="completed">strike through</span></p>
                </form>
                <hr>
                

                <h1 class="notification is-primary">Current Tasks: <span v-show="currentNum">({{ currentNum }})</span></h1>
                <ul>
                    <li v-for="task in tasks_list">
                        <span v-show="isInProgress(task)" class="notification column is-10 is-offset-1 has-text-centered" :class="{ 'completed': task.completed }">
                                                <button class="button delete is-danger" @click="deleteTask(task)"></button>
                                                <span @click="task.completed=!task.completed">{{ task.body }}</span>
                        </span>
                    </li>
                </ul>
                <hr>
                <h1 class="notification is-warning">Finished Tasks: <span v-show="finishedNum">({{ finishedNum }})</span></h1>
                <ul>
                    <li v-for="task in tasks_list">
                        <span v-show="isCompleted(task)" class="notification column is-10 has-text-centered" :class="{ 'completed': task.completed }">
                                            <button class="button delete is-danger" @click="deleteTask(task)"></button>
                                            <span @click="task.completed=!task.completed">
                                                {{ task.body }}
                                            </span>
                        </span>
                    </li>
                </ul>
            </div>
        </div>


    `,

    props: ['list'],

    data() {
        return {
            newInput: '',
            tasks_list: this.list
        };
    },

    computed: {
        currentNum() {
            return this.tasks_list.filter(this.isInProgress).length;
        },

        finishedNum() {
            return this.tasks_list.filter(this.isCompleted).length;
        }
    },

    methods: {
        clearAll() {
            this.tasks_list = [];
            todoStorage.save(this.tasks_list);
        },
        isCompleted(task) {
            return task.completed;
        },

        isInProgress(task) {
            return !task.completed;
        },

        deleteTask(task) {
            tasksSet = new Set(this.tasks_list);
            tasksSet.delete(task);
            this.tasks_list = [...tasksSet];

            todoStorage.save(this.tasks_list);
        },

        addToList() {

            this.tasks_list.push({
                body: this.newInput,
                completed: false
            });
            this.newInput = '';
        }
    }

});

new Vue({
    el: '#root',

    data: {
        tasks: todoStorage.fetch(),
    },
    watch: {
        tasks: {
            handler: function(tasks) {
                todoStorage.save(tasks)
            },
            deep: true
        }
    },

    methods: {
        output() {
            console.log(todoStorage.fetch());
        },

        toggleCompletedFor(task) {
            task.completed = !task.completed;
        }
    },
    created() {
        // todoStorage.save(this.tasks);
        Event.$on('output', () => console.log(todoStorage.fetch()));
    }
});
