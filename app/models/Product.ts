import { Schema, model, models } from 'mongoose';

interface IProduct {
  productID: string;
  productName: string;
  productCost: number;
  resturantID: string;
}

const productSchema = new Schema<IProduct>({
  productID: { type: String, required: true, unique: true },
  productName: { type: String, required: true },
  productCost: { type: Number, required: true },
  resturantID: { type: String, required: true },
});

export default models.Product || model<IProduct>('Product', productSchema);