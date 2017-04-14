<div class="box">
        <ul>
        @foreach ($projects as $project)
        <div class="box">
            <li><h4 class="title is-4">{{ $project['title'] }}</h4></li>
        </div>
        @endforeach
        </ul>

</div>
