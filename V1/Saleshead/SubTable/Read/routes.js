import express from 'express';

const router = express.Router();

import { router as routerFromAsIs } from "./AsIs/routes.js";
import { router as routerFromRowData } from "./RowData/routes.js";

router.use("/AsIs", routerFromAsIs);
router.use("/RowData", routerFromRowData);

export { router };