const mongoose = require('mongoose');
const Task = require ('./Schema');
const connect = require ('./database');
const express = require ('express');
const route = require  ('./routes');

const app = express();
const port = 4000;

app.use(express.json());

connect();

app.use('./api',route)

app.listen (port, () => {
    console.log(`server is running in port ${port}`);
})

