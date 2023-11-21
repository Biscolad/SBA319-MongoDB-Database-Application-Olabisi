import express from "express"
import db from "../db/conn.mjs"
import {ObjectId} from 'mongodb'

const router = express.Router()

//GET - get all comments
router.get("/", async(req, res) => {
    const collection = await db.collection("comments")
    const results = await collection.find({}).limit(20).toArray()
    res.send(results).status(200)
})

//GET - show - get one comment
router.get('/:id', async(req, res) => {
    const collection = await db.collection('comments')
    const query = {_id: new ObjectId(req.params.id)}
    const result = await collection.findOne(query)

    if (!result) res.send("Not Found").status(404);
    else res.send(result).status(200)
})


// POST - create new id for a comment // //newid-655c0e9f62d529dcd3d182c4//
router.post('/', async (req, res) => {
    const collection = await db.collection('comments')
    const newComment = req.body; 
    newComment.date = new Date()
    const result = await collection.insertOne(newComment)
    res.send(result).status(204)
})


//UPDATE - Update the new id created with new comment
router.patch("/:id", async(req, res) => {
    const query = {_id: new ObjectId(req.params.id)}
    const updates = {
        $push: {comments: req.body}
    };
    console.log(updates);
    const collection = db.collection("comments")
    const result = await collection.updateOne(query, updates)
    res.send(result).status(200)
})












export default router;