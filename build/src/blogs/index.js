"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogs = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
exports.blogs = (0, express_1.Router)();
exports.blogs.post('/blog', (req, res) => {
    console.log(req.body);
    controller_1.BlogController.postBlog(req, res);
});
exports.blogs.get('/blog', (req, res) => {
    controller_1.BlogController.getBlogs(req, res);
});
