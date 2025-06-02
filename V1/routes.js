import express from 'express';

const router = express.Router();

import { router as routerFromFarmers } from "./Farmers/routes.js";
import { router as routerFromSaleshead } from "./Saleshead/routes.js";
import { router as routerFromItems } from "./Items/routes.js";

router.use("/Farmers", routerFromFarmers);
router.use("/Saleshead", routerFromSaleshead);
router.use("/Items", routerFromItems);

export { router };