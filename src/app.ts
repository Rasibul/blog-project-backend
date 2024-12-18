import cors from 'cors';
import express, { Application } from 'express';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());


// Root route for the backend
app.get('/', (req, res) => {
    res.send('Welcome to the Blog Project!');
});

// // routes for biCycleStore
// app.use('/api/products', BiCycleStoreRoutes);

// // routes for orders
// app.use('/api/orders', OrderRoutes);

export default app;
