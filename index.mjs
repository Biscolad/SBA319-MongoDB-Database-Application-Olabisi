import express from "express"
const app = express()
const port = 4000

import movies from "./routes/movies.mjs"

//MIDDLEWARE
app.use(express.json())
app.use('/movies', movies)


//ERROR HANDLING
app.use((err, req, res, next) => {
    res.status(500).send("Something went wrong!")
})









app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`)
})
