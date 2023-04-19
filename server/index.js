import express from 'express';

const app = express();

const port = 8080

app.get('/', (req, res) => {
    res.status(200)
    res.send("<h1>This is Express</h1>")
});

app.listen(`${port}`, () => {
    console.log("Server is Working");
    console.log(`http://localhost:${port}`);
})