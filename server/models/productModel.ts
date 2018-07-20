import * as mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: String,
  prize: Number,
});

const productModel = mongoose.model('product', productSchema);

export default productModel;
