import cors from 'cors';
import express, { Application } from 'express';
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());


// Root route for the backend
app.get('/', (req, res) => {
    res.send('Welcome to the Blog Project!');
});

// application routes
app.use('/api', router);


app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
