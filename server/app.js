const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cloudinary = require('cloudinary');

const app = express();
const router = express.Router();
const dbUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017/news';

// cloudinary
cloudinary.config({
  cloud_name: 'dtu8b2px7',
  api_key: '272567473836865',
  api_secret: 'p2Jb7lgAtICALcZiBZnejUdRNbA',
});

// mongodb
try {
  mongoose.connect(
    dbUrl,
    {
      // useMongoClient: true
    }
  );
} catch (error) {
  console.log('DB ERROR');
}

let port = 5000 || process.env.PORT;

// set up router
routes(router);

// set up middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(helmet());
// app.use('/static', express.static(path.join(__dirname, 'static')));
app.use('/api', router);

// start server
app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});
