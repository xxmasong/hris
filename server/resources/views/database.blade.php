<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ $title }}</title>
    <!-- Styles -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    <link href="{{ asset('css/tabulator_semanticui.css') }}" type="text/css" rel="stylesheet" />
    <link href="{{ asset('css/viewer.css') }}" type="text/css" rel="stylesheet" />
    <!-- Scripts -->
    <script src="{{ asset('js/jquery-3.6.0.min.js') }}" type="text/javascript"></script>
    <script src="{{ asset('js/tabulator.js') }}" type="text/javascript"></script>
    <script src="{{ asset('js/viewer.js') }}" type="text/javascript"></script>
</head>

<body>
    <div>
        <form method="POST" action="{{ route('database', ['key' => config('common.key')]) }}">
            @csrf
            <div class="form-group">
                <p>Query: <button class="button-blend button-execute">Execute</button></p>
                @if (!empty($data))
                    <textarea id="query-input" placeholder="SELECT * from `tables`" name="rawDBQuery">{{ $data['query'] }}</textarea>
                @else
                    <textarea id="query-input" placeholder="SELECT * from `tables`" name="rawDBQuery"></textarea>
                @endif
            </div>
        </form>
        <p id='result-message'>
            Result:
            @if (!empty($data))
                {{ $data['message'] }}
            @endif
        </p>
        <div id="db-table"></div>
    </div>
    <script>
        var table = new Tabulator("#db-table", {
            maxHeight: "100%",
            height: "400px",
            index: "id",
            layout: "fitDataStretch",
            data: {!! json_encode($data['resultset'], true) !!},
            autoColumns: true,
            autoColumnsDefinitions: function(definitions) {
                definitions.forEach((column) => {
                    column.headerFilter = true;
                });
                return definitions;
            },
            persistentLayout:true,
            persistentFilter:true,
            pagination: "local",
            paginationSize: 10,
            paginationSizeSelector: [10, 50, 100, 500, 1000],
        });
    </script>
</body>

</html>
