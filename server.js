const express = require('express');
const jsonGraphqlExpress = require('json-graphql-server').default;
const data = require('./db.js');
const cors = require('cors');

const port = process.env.PORT;
const app = express();

// Enable cors
var corsOptions = {
  origin: process.env.CORS_ORIGIN_URL,
  credentials: false
};

app.use(cors(corsOptions));
app.use('/graphql', jsonGraphqlExpress(data));

app.listen(port, () => {
  console.log(`Server is up on port ${port}`)
});
