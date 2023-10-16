// Import the express in typescript file
import express from 'express';
// import dotenv from 'dotenv';
import { goods }  from './src/goods';
import { blogs } from './src/blogs';
import bodyParser from 'body-parser';
import cors from 'cors'; 
// Initialize the express engine
const app: express.Application = express();
 
// Take a port 3000 for running server.
const port: number = 3000

app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); 
 
// Handling '/' Request
app.use('/', goods);
app.use('/', blogs);
 
// Server setup
app.listen(port, '0.0.0.0', () => {
    console.log(`TypeScript with Express
         http://localhost:${port}/`);
});