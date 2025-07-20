const next = require("next");
const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 4000;
const app = next({ dev: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    http
        .createServer((req, res) => handle(req, res))
        .listen(port, () => {
            console.log(`✅ HTTP Ready at http://localhost:${port}`);
        });
});
