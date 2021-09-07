require('dotenv').config();

const express = require('express');
const sequelize = require('./db');
const PORT = process.env.PORT || 5600;
const app = express();
const models = require('./models/models.js');
const cors = require('cors');
const router = require('./routes/route_index');
const errorHandlerMiddleware = require('./middleware/ErrorHandlingMiddleware');

app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use(errorHandlerMiddleware);


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