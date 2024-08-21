const express = require('express')
require('dotenv').config()
// import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
    res.send('mandeepsingh')
});

app.get('/login', (req, res)=>{
    res.send("<h1>Please login here at Mandeep singh<h1>")
})

app.get('/youtube', (req,res)=>{
    res.send('<h2>Mandeep SIngh<h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
