import express from 'express';
import multer from 'multer';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

import { registerValidation, loginValidation, productsValidation } from './validations/validation.js';
import checkAuth from './utils/checkAuth.js';
import {
  ProductController,
  UserController,
  CategoriesController,
  BrandsController,
  GendersController,
  SeasonsController,
  CountriesController
} from './controllers/index.js';

mongoose
.connect(process.env.MONGO_URL)
.then(() => console.log('DB Ok'))
.catch((err) => console.log('DB error', err));

const app = express();

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, 'uploads');
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({storage});

app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use(cors({
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
  credentials: true
}));
app.use(function (req, res, next) {
  
  res.header('Access-Control-Allow-Origin', "http://localhost:3000");
  res.header('Access-Control-Allow-Headers', true);
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});

app.post('/auth/login', loginValidation, UserController.login);
app.post('/auth/register', registerValidation, UserController.register);
app.get('/auth/me', checkAuth, UserController.getMe);

app.post('/uploads', checkAuth, upload.single('image'), (req, res) => {
  res.json({
    url: `/uploads/${req.file.originalname}`,
  });
});

app.get('/categories', CategoriesController.getAll);
app.get('/brands', BrandsController.getAll);
app.get('/genders', GendersController.getAll);
app.get('/genders', GendersController.getAll);
app.get('/seasons', SeasonsController.getAll);
app.get('/countries', CountriesController.getAll);

app.get('/products', ProductController.getAll);
app.get('/products/:id', ProductController.getOne);
app.post('/products', checkAuth, productsValidation, ProductController.create);
app.delete('/products/:id', checkAuth, ProductController.remove);
app.patch('/products/:id', checkAuth, ProductController.update);

app.listen(5000, (err) => {
  if (err) {
    return console.log(err);
  }
  
  console.log('Server OK');
});