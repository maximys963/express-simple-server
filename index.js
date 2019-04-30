const express = require('express');
const path = require('path');
const app = express();
const logger = require('./middleware/logger');

//init middleware
// app.use(logger);

//Body parser middleware

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/members', require('./routes/api/members'));

const PORT  = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));