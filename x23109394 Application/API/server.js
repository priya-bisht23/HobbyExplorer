import dotenv from 'dotenv';
dotenv.config();
console.log(process.env)
import express from 'express';
//import mongoose from 'mongoose';
import levelCheckRoutes from './routes/levelcheck.js';
import connectDB from "./config/db.js";

await connectDB()
 
const app = express();
const port = process.env.PORT || 3000;
 
/*mongoose.connect('mongodb://localhost/workshopFinder', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));*/
 
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, x-access-token, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, PUT, DELETE, POST, PATCH"
  );
  next();
    });
app.use('/levelcheck', levelCheckRoutes);
 
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;