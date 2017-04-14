<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Laravel</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.0/css/bulma.css">
    <style type="text/css">
    body {
        padding-top: 40px;
    }
    </style>
</head>
<body>
    <div id="app" class="container">
        
        @include('projects.list')
        <hr>
        <form method="POST" action="/projects" @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)">
            <div class="control">
                <label for="title" class="label">Project Title:</label>
                <input type="text" id="title" name="title" class="input" v-model="form.title">
                <span class="help is-danger" v-if="form.errors.has('title')" v-text="form.errors.get('title')"></span>
            </div>

            

            <div class="control">
                <label for="description" class="label">Project Description:</label>

                <input type="text" id="description" name="description" class="input" v-model="form.description">
                <span class="help is-danger" v-if="form.errors.has('description')" v-text="form.errors.get('description')"></span>
            </div>
            
            <div class="control">
                <button class="button is-primary" :disabled="form.errors.any()">Create</button>
            </div>

        </form>
    </div>
    <script src="https://unpkg.com/vue"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="/js/app.js"></script>

</body>
</html>