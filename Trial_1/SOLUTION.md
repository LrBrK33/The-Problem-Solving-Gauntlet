# Solution

## GET http://localhost:8080/app.js net::ERR_ABORTED 404 (Not Found)

### index.html

8 - <script src="app.js"></script>

8 + <script src="bundle.js"></script>

## favicon.ico 404

### index.html

6 + <link rel="shortcut icon" href="#" />
