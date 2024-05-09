import cors from 'cors';
import express from 'express';
import fileUpload from 'express-fileupload';
import postsRoutes from './routes/posts.routes.js';

const app = express();
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload'
}));

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(postsRoutes);

export default app;