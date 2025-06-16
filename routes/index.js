// const express=require('express')
// const router=express.Router

// const userSignUpController = require("../controller/userSignUp");
// router.post("/signp",userSignUpController)
// module.exports=router
// ../routes/index.js2
const express = require('express');
const router = express.Router(); // Correctly instantiate the router

const userSignUpController = require('../controller/userSignUp'); // Import the controller
const userSignInController=require('../controller/userSignin');
const userDetailsController=require('../controller/userDetails');
const authToken = require('../middleware/authToken');
const userLogout = require('../controller/userLogout');
const allUser = require('../controller/allUsers');
const updateUser=require('../controller/updateUser');
const uploadProduct = require('../controller/uploadProduct');
const getAllProduct = require('../controller/product/getProducts');
const updateProductController=require('../controller/updateProduct')
const getCatagoryProduct=require('../controller/product/getCatagoryProduct');
const getCatagorywiseProduct = require('../controller/product/getCatagoryWiseproduct');
const getProductDetails=require('../controller/product/getProductDetails');
const addToCartController=require('../controller/user/addToCartController')
const countAddToCartProduct=require('../controller/user/countAddToCartProduct')
const addToCartViewProduct=require('../controller/user/addtoCartViewProduct')
const updateAddtoCartpoduct =require('../controller/user/updateAddtoCartpoduct')
const deleteAddtoCartProduct=require('../controller/user/deleteAddtoCartProduct')
const searchProduct=require('../controller/product/searchProduct'); 
const filterProductController = require('../controller/product/filterProduct');

// Define the route with the correct handler
router.post('/signUp', userSignUpController);
router.post("/signin",userSignInController)
router.get("/user-details",authToken,userDetailsController)
router.get("/Logout",authToken,userLogout)


//admin penral
router.get("/all-User",authToken,allUser)
router.post("/update-user",authToken,updateUser)

//upload product 
router.post("/upload-product",authToken,uploadProduct)

//get product
router.get("/get-products",getAllProduct)


//update product
router.post("/update-product",authToken,updateProductController)

//get product catagory
router.get("/get-product-catagory",getCatagoryProduct)

router.post("/catagory-product",getCatagorywiseProduct)
router.post("/product-Details",getProductDetails)
router.get('/search',searchProduct)
router.post('/filter-product',filterProductController)


//user adad to cart
router.post("/addtocart",authToken,addToCartController)  
router.get('/countAddToCartProduct',authToken,countAddToCartProduct)
router.get('/addToCartViewProduct',authToken,addToCartViewProduct)
router.post('/update-cart-product',authToken,updateAddtoCartpoduct)
router.post('/delete-cart-product',authToken,deleteAddtoCartProduct)

module.exports = router;
