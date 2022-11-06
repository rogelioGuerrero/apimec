// import express
import express from "express";
  
// import function from controller
import { showProducts, showProductById, createProduct, updateProduct, deleteProduct } from "../controllers/categoria.js";
  
// init express router
const router = express.Router();
  
// Get All Product
router.get('/categoria', showProducts);
  
// Get Single Product
router.get('/categoria/:id', showProductById);
  
// Create New Product
router.post('/categoria', createProduct);
  
// Update Product
router.put('/categoria/:id', updateProduct);
  
// Delete Product
router.delete('/categoria/:id', deleteProduct);
  
// export default router
export default router;