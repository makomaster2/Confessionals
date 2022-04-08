import * as express from "express";
const router = express.Router();
import * as bodyParser from "body-parser";



import db from "../db";

// REST API
router.get("/:id?", async (req, res) => {
    try {
        const id = req.params.id;

        if (id) {
            const chirp = await db.confession.Depression_one(id);
            res.json(chirp);
        } else {
            const chirps = await db.confession.Depression_all();
            res.json(chirps);
        }
    } catch (error) {
        console.log(error);
    }
});

// Create
router.post("/", async (req, res) => {
    try {
        const body = req.body;

        const dbRes = await db.confession.Depression_insert(body.Depression_id, body.Depression_post);
        res.status(200).send(dbRes);
    } catch (error) {
        console.log(error)
    }
}); 

// Delete
router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const dbRes = await db.confession.Depression_destroy(id);

        res.status(200).json(dbRes);
    } catch (error) {
        console.log(error);
    }
});

// Update
router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const content = req.body.Depression_post;

        const dbRes = await db.confession.Depression_edit(id, content);

        res.status(200).json(dbRes);
    } catch (error) {
        console.log(error)
    }
});

export default router;