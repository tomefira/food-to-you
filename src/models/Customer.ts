import { Schema, model, models } from 'mongoose';

interface ICustomer {
  customerID: string;
  firstName: string;
  lastName: string;
  address: string;
  orders: string[];
  mobileNum: string;
  submitOrder(): void;
  submitPayment(): void;
  submitFeedback(): void;
}

const customerSchema = new Schema<ICustomer>({
  customerID: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: true },
  orders: [{ type: Schema.Types.ObjectId, ref: 'Order' }],
  mobileNum: { type: String, required: true },
});

customerSchema.methods.submitOrder = function () {
  // Implementation for submitting an order
};

customerSchema.methods.submitPayment = function () {
  // Implementation for submitting payment
};

customerSchema.methods.submitFeedback = function () {
  // Implementation for submitting feedback
};

export default models.Customer || model<ICustomer>('Customer', customerSchema);