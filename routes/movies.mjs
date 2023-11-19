import express from "express"
import db from "../db/conn.mjs"
import {ObjectId} from 'mongodb'

const router = express.Router()

//GET - get all movies
router.get("/", async(req, res) => {
    const collection = await db.collection("movies")
    const results = await collection.find({}).limit(20).toArray()
    res.send(results).status(200)
})











export default router;