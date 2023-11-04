const express = require('express');
const app = express();
const cors = require("cors");
app.use(cors());

app.get('/api/v1', (req, res) => {
  return res.status(200).send({ "message": "API v1 Response from Node/Express server!" });
});

app.listen(5000, () => console.log('API Server is up and running'));