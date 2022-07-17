import express from 'express'
import multer from 'multer';
import { createProducts, deleteProduct, getProduct, getProducts, updateProduct } from '../contrroller/product.js';
const routes = express.Router()

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./upload");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  
  const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
      if (
        file.mimetype == "image/png" ||
        file.mimetype == "image/jpg" ||
        file.mimetype == "image/jpeg"
      ) {
        cb(null, true);
      } else {
        cb(null, false);
        return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
      }
    },
  }).single("image")

  routes.post('/products',upload,createProducts);
  routes.get('/products', getProducts);
  routes.get('/products/:id',getProduct);
  routes.delete('/products/:id',deleteProduct);
  routes.put('/products/:id',updateProduct);
export default routes