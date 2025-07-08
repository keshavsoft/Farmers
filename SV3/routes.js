import express from 'express';

const router = express.Router();

import { router as routerFromSaleshead } from "./Saleshead/routes.js";
import { router as routerFromFarmers } from "./Farmers/routes.js";

router.use("/Saleshead", routerFromSaleshead);
router.use("/Farmers", routerFromFarmers);

export { router };