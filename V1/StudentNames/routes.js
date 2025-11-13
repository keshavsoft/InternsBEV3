import express from 'express';

const router = express.Router();

import { router as routerFromInsertWithChecks } from "./InsertWithChecks/routes.js"

router.use("/InsertWithChecks", routerFromInsertWithChecks);

export { router };