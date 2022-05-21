import express from "express";

const router = express.Router()

router.get('/api/todo', (req, res)=>{
    return res.send('Hello Todo')
});

router.post('/api/todo', (req, res) => {
    return res.send('Todo Create')
});

export { router as todoRouter }

