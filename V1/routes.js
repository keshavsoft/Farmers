import express from 'express';

const router = express.Router();

import { router as routerFromFarmers } from "./Farmers/routes.js";

router.use("/Farmers", routerFromFarmers);

export { router };