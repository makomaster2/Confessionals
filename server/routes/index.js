import * as express from "express";
const router = express.Router();

import ADHDRouter from "./ADHD";
import DepressionRouter from "./Depression";
import RageRouter from "./Rage";
import AnxietyRouter from "./Anxiety";
import UsersRouter from "./Users";



// localhost:3000/api/chirps/
router.use("/ADHD", ADHDRouter);
router.use("/Depression", DepressionRouter);
router.use("/Rage", RageRouter);
router.use("/Anxiety", AnxietyRouter);
router.use("/Users", UsersRouter);



export default router;
