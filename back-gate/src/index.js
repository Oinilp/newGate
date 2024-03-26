import express  from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import mongoose from "mongoose";
import { router } from "./routes/taskLog.js";
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

mongoose.connect('mongodb://localhost:27017')
    .then(db => console.log('db is connected'))
    .catch(err => console.log(err))
    
const app = express()

// settings
app.set('port', process.env.PORT || 3000)


//middlewares
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173' );
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

// routes
app.use('/app', router)

//static
//app.use(express.static(join(__dirname, 'public')));

// start the server
app.listen(app.get('port'), ()=>{
    console.log('server on port ', app.get('port'))
    console.log('http://localhost:3000/')
})