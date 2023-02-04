import { body } from 'express-validator';

export const loginValidation = [
  body('email', 'Invalid mail format').isEmail(),
  body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
];

export const registerValidation = [
  body('email', 'Invalid mail format').isEmail(),
  body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
  body('name', 'Name must be at least 5 characters').isLength({ min: 5 }),
  body('avatarUrl', 'Invalid avatar link').optional().isURL(),
];

export const productsValidation = [
  body('name', 'Name must be at least 5 characters').isLength({ min: 5 }),
  body('description', 'Description must be at least 5 characters').isLength({ min: 5 }),
  body('price', 'Price must be at least 1 characters').isLength({ min: 1 }),
  body('imgUrl', 'Invalid img link').isString(),
];