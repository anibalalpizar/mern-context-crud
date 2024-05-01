import express from 'express';
import postsRoutes from './routes/posts.routes.js'
import { connect } from "./db.js";

const app = express();
connect();

app.use(postsRoutes);

app.listen(3000)
console.log('Server on port', 3000)