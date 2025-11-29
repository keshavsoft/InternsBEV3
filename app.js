import express from 'express';
import cookieParser from 'cookie-parser';

// import dotenv from 'dotenv';
// dotenv.config();

const app = express();
// const port = 3000;

var port = normalizePort(process.env.PORT || 3000);

import { StartFunc as StartFuncFromMiddleware } from "./Token/MiddleWares/entryFile.js";

import { router as routerFromUtility } from "./Utility/routes.js";
import { router as routerFromSecret } from "./Secret/routes.js";
import { router as routerFromUsers } from "./Users/routes.js";
import { router as routerFromV1 } from "./V1/routes.js";
import { router as routerFromV2 } from "./V2/routes.js";
import { router as routerFromSV6 } from "./SV6/routes.js";
import { router as routerFromSV7 } from "./SV7/routes.js";
import { router as routerFromSV8 } from "./SV8/routes.js";

app.use(express.static('Public'));
app.use(cookieParser());

app.use("/AboutUs", (req, res) => {
    res.send('Hello World!')
});

app.use("/Utility", routerFromUtility);
app.use("/Secret", routerFromSecret);
app.use("/Users", routerFromUsers);
app.use("/V1", routerFromV1);
app.use("/V2", routerFromV2);
app.use("/SV6", StartFuncFromMiddleware, routerFromSV6);
app.use("/SV7", StartFuncFromMiddleware, routerFromSV7);
app.use("/SV8", StartFuncFromMiddleware, routerFromSV8);

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

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log(`Open here http://localhost:${port}`);
});