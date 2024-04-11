import { Schema, model, models } from 'mongoose';

interface IRestaurant {
  id: string;
  name: string;
  orders: string[];
  products: string[];
  adjustOrder(): void;
  adjustMenu(): void;
  generateReport(): void;
  adjustRestDetails(): void;
}

const restaurantSchema = new Schema<IRestaurant>({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  orders: [{ type: Schema.Types.ObjectId, ref: 'Order' }],
  products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
});

restaurantSchema.methods.adjustOrder = function () {
  // Implementation for adjusting order
};

restaurantSchema.methods.adjustMenu = function () {
  // Implementation for adjusting menu
};

restaurantSchema.methods.generateReport = function () {
  // Implementation for generating report
};

restaurantSchema.methods.adjustRestDetails = function () {
  // Implementation for adjusting restaurant details
};

export default models.Restaurant || model<IRestaurant>('Restaurant', restaurantSchema);