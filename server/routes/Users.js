

import * as express from "express";
const router = express.Router();

import db from "../db";

// REST API
router.get("/:id?", async (req, res) => {
    try {
        const id = req.params.id;

        if (id) {
            const chirp = await db.confession.Users_one(id);
            res.json(chirp);
        } else {
            const chirps = await db.confession.Users_all();
            res.json(chirps);
        }
    } catch (error) {
        console.log(error);
    }
});

export default router; 