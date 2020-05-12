const express = require('express');
require('./services/passport');

const app = express();
require("./routes/authRoutes")(app);

app.get('/', (req, res) => {
    res.send({hi: 'there! this is my first web app!'});
});

PORT = process.env.PORT || 5000;
app.listen(PORT);