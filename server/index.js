'use strict';
require('dotenv').config();
const express = require('express');
const sequelize = require('./db');

const PORT = process.env.PORT || 5600;
const app = express();

const start = async () => {
    try {
        await sequelize.authenticate();
        await  sequelize.sync();
        app.listen(PORT, () => console.log(`Server started. PORT ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start();