<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Laravel</title>
</head>
<body>
    <div id="root">
        <ul>
            <li v-for="skill in skills">@{{ skill }}</li>
            <li v-for="skill in skills" v-text="skill"></li>
        </ul>
    </div>
    <script src="https://unpkg.com/vue"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="/js/app.js"></script>

</body>
</html>