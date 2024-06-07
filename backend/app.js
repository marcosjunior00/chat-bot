require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const ChatRoutes = require('./src/routes/chat.routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', ChatRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
