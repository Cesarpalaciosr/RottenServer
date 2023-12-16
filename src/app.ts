import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import passport from 'passport';
import passportMiddleware from './middlewares/passport';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes';
import specialRoutes from './routes/special.routes';
import http from 'http';
import { Server, Socket } from 'socket.io';

dotenv.config();

//initialization
const app = express();
const server = http.createServer(app);
const io = new Server(server);


//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(passport.initialize());
passport.use(passportMiddleware);


//routes
app.get('/', (req, res) => {
    res.send(`Hola, es el endpoint por defecto`);
});
app.use(authRoutes);
app.use(specialRoutes);


export default app;