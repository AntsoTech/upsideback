import express, { Request, Response, NextFunction } from 'express';
import cookieParser from 'cookie-parser';
import { handleError } from './helpers/errors';
import setupRoutes from './router';
import 'dotenv/config';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

// CORS : J'autorise localhost:3001 et localhost:3000
// à faire des requetes axios
const corsOptions: cors.CorsOptions = {
  origin: [
    'https://upside-7bqesp2ee-jacquespoulin.vercel.app',
    'https://upside.vercel.app',
    'https://upside-jacquespoulin.vercel.app',
  ],
  credentials: true,
};

// middleware cors
app.use(cors(corsOptions));


//middleware pour lire le body
app.use(express.json());
//middleware pour envoyer des cookies
app.use(cookieParser());

setupRoutes(app);

// A mettre à la fin pour gèrer les erreurs qui sortiront des routes
app.use(handleError);

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
