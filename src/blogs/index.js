import { Router } from 'express';
import { BlogController } from './controller';

export const blogs = Router();

blogs.post('/blog', (req, res) => {
    console.log(req.body);
    BlogController.postBlog(req, res);
});

blogs.get('/blog', (req, res) => {
    BlogController.getBlogs(req, res);
});