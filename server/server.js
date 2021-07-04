import express from 'express';
import data from './data.js';

const app = express();
const port = process.env.PORT || 5000;

app.get("/",(req,res) => {
    res.send("Server is ready");
})
.get("/api/products",(req,res) => {
    res.send(data.products);
});

app.listen(port,()=> {
    console.log("Server is running at http://localhost:"+{port});
});