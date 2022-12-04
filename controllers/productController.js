const Product = require('../models/productModel');
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors")

//Create Product
exports.createProduct = catchAsyncErrors(
    async (req, res, next) => {
        const product = await Product.create(req.body);
        res.status(200).json({
            success: true,
            product
        });
    });         

//Get All Products
exports.getAllProducts = catchAsyncErrors(
    async (req, res) => {
        const products = await Product.find();
        res.status(200).json({
            success: true,
            products
        });
    
    });

//Get Single Product Or Product Details

exports.getProductDetails = catchAsyncErrors(
    async (req, res, next) => {
        let product = await Product.findById(req.params.id);
        if (!product) {
            return next(new ErrorHandler("Product Not Found", 500))
        }
        res.status(200).json({
            success: true,
            product
        })
    });

//Update Product
exports.updateProduct = catchAsyncErrors(
    async (req, res, next) => {

        let product = await Product.findById(req.params.id);
        if (!product) {
            return next(new ErrorHandler("Product Not Found", 500))
        }
        product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidator: true,
            useFindAndModify: false
        })
        res.status(200).json({
            success: true,
            product
        })
    });

//Delete Product
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.params.id)

    if (!product) {
        return next(new ErrorHandler("Product Not Found", 500))

    }
    await product.remove();
    res.status(200).json({
        success: true,
        message: "Product Deleted SuccessFully"
    })
});