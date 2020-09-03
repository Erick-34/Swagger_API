'use strict';

const bodyParser = require('body-parser');
const express = require("express");
const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  const contractsRouter = require('./routes/search.routes');
  const contractsIndex = require('./routes/index.routes');

  app.route('/api', contractsRouter);
  app.route('/', contractsIndex);

  const port = process.env.PORT || 10010;
  app.listen(port, () => {
    console.log("sever on in http://localhost:10010");
  });
