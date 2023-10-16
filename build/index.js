"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import the express in typescript file
const express_1 = __importDefault(require("express"));
// import dotenv from 'dotenv';
const goods_1 = require("./src/goods");
const blogs_1 = require("./src/blogs");
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
// Initialize the express engine
const app = (0, express_1.default)();
// Take a port 3000 for running server.
const port = 3000;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json()); // for parsing application/json
app.use(body_parser_1.default.urlencoded({ extended: true }));
// Handling '/' Request
app.use('/', goods_1.goods);
app.use('/', blogs_1.blogs);
// Server setup
app.listen(port, '0.0.0.0', () => {
    console.log(`TypeScript with Express
         http://localhost:${port}/`);
});
