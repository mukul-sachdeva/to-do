"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.goods = void 0;
const express_1 = require("express");
exports.goods = (0, express_1.Router)();
exports.goods.get('/', (req, res) => {
    res.send("What's up doc ?!");
});
exports.goods.get('/shout', (req, res) => {
    const { body, header } = req;
    res.send("SHOUT ?!");
});
