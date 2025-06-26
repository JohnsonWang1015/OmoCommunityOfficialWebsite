const next = require("next");
const https = require("http");
const fs = require("fs");
const path = require("path");

const port = 4000;
const app = next({ dev: false });
const handle = app.getRequestHandler();

const httpsOptions = {
    // key: fs.readFileSync(
    //     "/etc/letsencrypt/live/promap.topedu.io/privkey.pem",
    //     "utf8"
    // ),
    // cert: fs.readFileSync(
    //     "/etc/letsencrypt/live/promap.topedu.io/fullchain.pem",
    //     "utf8"
    // ),
};

app.prepare().then(() => {
    https
        .createServer(httpsOptions, (req, res) => handle(req, res))
        .listen(port, () => {
            console.log(`✅ HTTP Ready at http://localhost:${port}`);
        });
});
