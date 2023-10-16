import { Router } from 'express';

export const goods = Router();

goods.get('/', (req, res) => {
  res.send("What's up doc ?!");
});

goods.get('/shout', (req, res) => {
    const {body, header} = req;
    res.send("SHOUT ?!");
});