import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import router from './routes/userRoute';

import { errorHandler, methodNotAllowed } from './middleware/errorHandler';

const app = express();

app.use(morgan('short'));
app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173",
    methods: ['GET', 'POST'],
    credentials: false
}));
app.use('/api/v1.0', router);

app.use(methodNotAllowed);
app.use(errorHandler);

export default app;