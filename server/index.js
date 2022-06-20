const doteenv = require('dotenv')
const express  = require('express');
const cors = require('cors');
const next = require('next')
const port = process.env.PORT || 3000
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handle = app.getRequestHandler();

doteenv.config();


(async () => {
  await app.prepare()
  const server = express()
  //handle cors
  server.use(cors());

  //handle json
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));

  //Import Route
  server.use('/verify', require('../routes/verify'));

  // handle nextjs routing
  server.get('*', (req, res) => handle(req, res))

  await server.listen(port)
  console.log(`🚀 Ready on http://localhost:${port}`) // eslint-disable-line no-console
})()