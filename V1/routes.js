import express from 'express';

const router = express.Router();

import { router as routerFromFarmers } from "./Farmers/routes.js";
import { router as routerFromSaleshead } from "./Saleshead/routes.js";

router.use("/Farmers", routerFromFarmers);
router.use("/Saleshead", routerFromSaleshead);

export { router };