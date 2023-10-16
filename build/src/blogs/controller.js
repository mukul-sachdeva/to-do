"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogController = void 0;
const post_json_1 = __importDefault(require("../data/post.json"));
const fs = require('fs');
const path = require('path');
const blogController = {
    postBlog: async (req, res) => {
        // const { id, title, content, tags, createdAt, updatedAt } = req.body;
        const filename = path.join(__dirname, '..', 'data', 'post.json');
        console.log(filename);
        console.log(req.body, typeof JSON.stringify(req.body));
        fs.readFile(filename, 'utf8', (err, fileContents) => {
            if (err) {
                console.log(err);
                return;
            }
            try {
                const dataArray = JSON.parse(fileContents);
                dataArray.push(req.body); // Append new data to the array
                // Write the updated array back to the file
                fs.writeFile(filename, JSON.stringify(dataArray), 'utf8', (writeErr) => {
                    if (writeErr) {
                        console.log(writeErr);
                    }
                    else {
                        res.send('Data appended successfully.');
                    }
                });
            }
            catch (parseErr) {
                console.log(parseErr);
            }
        });
    },
    getBlogs: async (req, res) => {
        res.send(post_json_1.default);
    }
};
exports.BlogController = blogController;
