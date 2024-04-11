import { Schema, model, models } from 'mongoose';

interface IOrder {
  orderID: string;
  resturantID: string;
  customerID: string;
  driverID: string;
  productIDArray: string[];
  orderDateTime: Date;
  deliveryAddress: string;
  orderStatus: string;
  deliveryStatus: string;
  totalCost: number;
}

const orderSchema = new Schema<IOrder>({
  orderID: { type: String, required: true, unique: true },
  resturantID: { type: String, required: true },
  customerID: { type: String, required: true },
  driverID: { type: String, required: true },
  productIDArray: [{ type: String, required: true }],
  orderDateTime: { type: Date, required: true },
  deliveryAddress: { type: String, required: true },
  orderStatus: {
    type: String,
    enum: ['pending', 'awaitingPayment', 'paid', 'submitted', 'accepted', 'completed', 'cancelled'],
    default: 'pending',
  },
  deliveryStatus: {
    type: String,
    enum: ['awaitingOrder', 'driving', 'delivered'],
    default: 'awaitingOrder',
  },
  totalCost: { type: Number, required: true },
});

export default models.Order || model<IOrder>('Order', orderSchema);