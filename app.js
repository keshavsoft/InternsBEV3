import express from 'express';
import cookieParser from 'cookie-parser';
import http from 'http';

// import dotenv from 'dotenv';
// dotenv.config();

const app = express();
const server = http.createServer(app);
// const port = 3000;

var port = normalizePort(process.env.PORT || 3000);

import { StartFunc as StartFuncFromWebSocketServer } from "./Projects/WebSocketServer/V2/entryFile.js";
import { StartFunc as StartFuncFromMiddleware } from "./Token/MiddleWares/entryFile.js";

import { router as routerFromUtility } from "./Utility/routes.js";
import { router as routerFromSecret } from "./Secret/routes.js";
import { router as routerFromUsers } from "./Users/routes.js";
import { router as routerFromSV8 } from "./SV8/routes.js";
import { router as routerFromSV9 } from "./SV9/routes.js";
import { router as routerFromSV10 } from "./SV10/routes.js";
import { router as routerFromV4 } from "./V4/routes.js";

app.use(express.static('Public'));
app.use(cookieParser());

app.use("/AboutUs", (req, res) => {
    res.send('Hello World!')
});

app.use("/Utility", routerFromUtility);
app.use("/Secret", routerFromSecret);
app.use("/Users", routerFromUsers);
app.use("/SV8", StartFuncFromMiddleware, routerFromSV8);
app.use("/SV9", StartFuncFromMiddleware, routerFromSV9);
app.use("/SV10", StartFuncFromMiddleware, routerFromSV10);
app.use("/V4", routerFromV4);

StartFuncFromWebSocketServer(server);

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
};

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log(`Open here http://localhost:${port}`);
});