import express from 'express';
import cookieParser from 'cookie-parser';
import http from 'http';

// import dotenv from 'dotenv';
// dotenv.config();

const app = express();
const server = http.createServer(app);
// const port = 3000;

var port = normalizePort(process.env.PORT || 3000);

import packageJSON from './package.json' with {type: 'json'};

import { StartFunc as StartFuncFromWebSocketServer } from "./Projects/WebSocketServer/V2/entryFile.js";
import { StartFunc as StartFuncFromMiddleware } from "./Token/MiddleWares/entryFile.js";

import { router as routerFromUtility } from "./Utility/routes.js";
import { router as routerFromSecret } from "./Secret/routes.js";
import { router as routerFromUsers } from "./Users/routes.js";
import { router as routerFromSV8 } from "./SV8/routes.js";
import { router as routerFromSV9 } from "./SV9/routes.js";
import { router as routerFromSV10 } from "./SV10/routes.js";
import { router as routerFromV5 } from "./V5/routes.js";

app.use(express.static('Public'));
// YAHOO MAIL SAFE IMAGE SERVING
// app.use(
//     '/MailAssets',
//     (req, res, next) => {
//         res.removeHeader('Alt-Svc'); // Yahoo proxy fix
//         res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
//         res.setHeader('Content-Encoding', 'identity');
//         next();
//     },
//     express.static('Public/MailAssets')
// );

// app.use('/MailAssets', (req, res, next) => {
//     res.removeHeader('Alt-Svc');
//     res.removeHeader('Accept-Ranges'); // 🔥 IMPORTANT
//     res.removeHeader('Via');
//     res.removeHeader('X-Powered-By');

//     res.setHeader('Cache-Control', 'public, max-age=31536000');
//     res.setHeader('Content-Encoding', 'identity');

//     next();
// },
//     express.static('Public/MailAssets', {
//         acceptRanges: false
//     })
// );


// app.use(
//     express.static('Public', {
//         setHeaders: (res, path) => {
//             if (path.endsWith('.png') || path.endsWith('.jpg') || path.endsWith('.jpeg') || path.endsWith('.gif')) {
//                 res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
//             }
//         }
//     })
// );

// ===== YAHOO MAIL IMAGE PROXY FIX =====
// app.use(
//     '/MailAssets',
//     (req, res, next) => {
//         // Remove HTTP/3 advertisement (Yahoo proxy breaks on this)
//         res.removeHeader('Alt-Svc');

//         // Force email-safe caching
//         res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');

//         // Avoid compression / encoding confusion
//         res.setHeader('Content-Encoding', 'identity');

//         next();
//     },
//     express.static('Public/MailAssets')
// );
// =====================================

app.use(cookieParser());

app.get('/Version', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Accept,Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.end(packageJSON.version);
});

app.get('/AboutUs', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Accept,Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.end("KeshavSoft : 9848163021");
});

app.use("/Utility", routerFromUtility);
app.use("/Secret", routerFromSecret);
app.use("/Users", routerFromUsers);
app.use("/SV8", StartFuncFromMiddleware, routerFromSV8);
app.use("/SV9", StartFuncFromMiddleware, routerFromSV9);
app.use("/SV10", StartFuncFromMiddleware, routerFromSV10);
app.use("/V5", routerFromV5);

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