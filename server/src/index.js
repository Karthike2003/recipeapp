import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import { userRouter } from './routes/users.js';

const app = express();

app.use("/auth", userRouter);
app.use(express.json());
app.use(cors());  

mongoose.connect("mongodb+srv://karthik:karthik123@recipes.itpxhzu.mongodb.net/recipes?retryWrites=true&w=majority");

app.listen(3001, () => console.log('Server started'));