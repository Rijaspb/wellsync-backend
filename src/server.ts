import express from 'express'
import 'dotenv/config'

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome Rijas')
})

//server
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})