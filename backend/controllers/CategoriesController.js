import CategoryModel from '../models/Categories.js';

export const getAll = async (req, res) => {
  try {
    const categories = await CategoryModel.find();
    
    res.json(categories);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Failed get categories',
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const productId = req.params.id;
    
    ProductModel.findOne(
      {
        _id: productId,
      },
      (err, doc) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            message: 'Failed get product',
          });
        }
        
        if (!doc) {
          return res.status(404).json({
            message: 'Product not found',
          });
        }
        
        res.json(doc);
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Failed get products',
    });
  }
};

export const remove = async (req, res) => {
  try {
    const productId = req.params.id;
    
    ProductModel.findOneAndDelete(
      {
        _id: productId,
      },
      (err, doc) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            message: 'Failed to delete product',
          });
        }
        
        if (!doc) {
          return res.status(404).json({
            message: 'Product not found',
          });
        }
        
        res.json({
          success: true,
        });
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Failed get products',
    });
  }
};

export const create = async (req, res) => {
  try {
    const doc = new ProductModel({
      title: req.body.title,
      category: req.body.category,
      price: req.body.price,
      article: req.body.article,
      brand: req.body.brand,
      description: req.body.description,
      material: req.body.material,
      sizes: req.body.sizes,
      gender: req.body.gender,
      color: req.body.color,
      season: req.body.season,
      country: req.body.country,
      img: req.body.img,
    });
    
    const product = await doc.save();
    
    res.json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Failed to add product',
    });
  }
};

export const update = async (req, res) => {
  try {
    const productId = req.params.id;
    
    await ProductModel.updateOne(
      {
        _id: productId,
      },
      {
        title: req.body.title,
        category: req.body.category,
        price: req.body.price,
        brand: req.body.brand,
        description: req.body.description,
        material: req.body.material,
        sizes: req.body.sizes,
        gender: req.body.gender,
        color: req.body.color,
        season: req.body.season,
        country: req.body,
        img: req.body.img,
      },
    );
    
    res.json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Failed to update product',
    });
  }
};