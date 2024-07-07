import express from 'express'

const app = express();

app.listen(3001, (req,res) =>{
    console.log('server is running on port 3001....');
})