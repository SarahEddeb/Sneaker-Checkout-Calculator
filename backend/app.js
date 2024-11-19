const express = require('express');
const next = require("next");

const PORT = process.env.PORT || 3001;
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();
const server = express();

app.prepare().then(() => {
  
  const showRoutes = require('./routes/index.js');
  const addData = require('./database/addData.js');
  const getAllData = require('./database/getData.js');
  const updateDataPrice = require('./database/updateDataPrice.js');
  const updateDataAdded = require('./database/updateDataAdded.js');

  server.use('/api', showRoutes);
  server.use('/db', addData);
  server.use('/db', getAllData);
  server.use('/db', updateDataPrice);
  server.use('/db', updateDataAdded);

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.get("/api/shoes", (req, res) => {
    return res.end("we made it!");
  });

  server.listen(PORT, err => {
    if (err) throw err;
    console.log(`> Ready on ${PORT}`);
  });

}).catch(ex => {
  console.error(ex.stack);
  process.exit(1);
});

module.exports = server;