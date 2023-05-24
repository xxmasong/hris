<!DOCTYPE html>
<html lang="en-US">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ $title }}</title>
    <!-- Styles -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    <link href="{{ asset('css/viewer.css') }}" type="text/css" rel="stylesheet" />
    <!-- Scripts -->
    <script src="{{ asset('js/jquery-3.6.0.min.js') }}" type="text/javascript"></script>
    <script src="{{ asset('js/viewer.js') }}" type="text/javascript"></script>
</head>

<body>
    <div>
        <textarea id="json-input">{{ $data }}</textarea>
        <p class="options">
            <input type="checkbox" id="collapsed">Collapsed
            <input type="checkbox" id="with-quotes">Quoted
        </p>
        <pre id="json-renderer"></pre>
    </div>
</body>

</html>
