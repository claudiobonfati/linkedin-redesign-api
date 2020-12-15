const express = require('express');
const jsonGraphqlExpress = require('json-graphql-server').default;
const data = require('./db.js');

const port = process.env.PORT;
const app = express();

app.use('/graphql', jsonGraphqlExpress(data));
app.listen(port, () => {
  console.log(`Server is up on port ${port}`)
});
