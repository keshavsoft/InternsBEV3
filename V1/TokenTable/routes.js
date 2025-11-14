import express from 'express';

const router = express.Router();

import { router as routerFromRead } from "./Read/routes.js"

router.use("/Read", routerFromRead);

export { router };