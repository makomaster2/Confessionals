import * as express from "express";
const router = express.Router();

import ADHDRouter from "./adhd";
import DepressionRouter from "./depression";
import RageRouter from "./rage";
import AnxietyRouter from "./anxiety";
import UsersRouter from "./users";

// localhost:3000/api/chirps/
router.use("/adhd", ADHDRouter);
router.use("/depression", DepressionRouter);
router.use("/rage", RageRouter);
router.use("/anxiety", AnxietyRouter);
router.use("/users", UsersRouter);

export default router;
