import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
const port = 3000;

import { StartFunc as StartFuncFromMiddleware } from "./Token/MiddleWares/entryFile.js";

import { router as routerFromToken } from "./Token/routes.js";
import { router as routerFromV1 } from "./V1/routes.js";
import { router as routerFromSV1 } from "./SV1/routes.js";
import { router as routerFromV2 } from "./V2/routes.js";
import { router as routerFromV3 } from "./V3/routes.js";
import { router as routerFromSV2 } from "./SV2/routes.js";
import { router as routerFromV4 } from "./V4/routes.js";
import { router as routerFromSV3 } from "./SV3/routes.js";

app.use(express.static('public'));
app.use(cookieParser());

app.use("/Token", routerFromToken);
app.use("/V1", routerFromV1);
app.use("/SV1", StartFuncFromMiddleware, routerFromSV1);
app.use("/V2", routerFromV2);
app.use("/V3", routerFromV3);
app.use("/SV2", StartFuncFromMiddleware, routerFromSV2);
app.use("/V4", routerFromV4);
app.use("/SV3", StartFuncFromMiddleware, routerFromSV3);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log(`Open here http://localhost:${port}`);
});