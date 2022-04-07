

import * as express from "express";
const router = express.Router();

import db from "../db";

// REST API
router.get("/:id?", async (req, res) => {
    try {
        const id = req.params.id;

        if (id) {
            const chirp = await db.confession.five(id);
            res.json(chirp);
        } else {
            const chirps = await db.confession.all5();
            res.json(chirps);
        }
    } catch (error) {
        console.log(error);
    }
});

export default router; 