import { Schema, model, models } from 'mongoose';

interface IDriver {
  driverId: string;
  firstName: string;
  lastName: string;
  mobileNum: string;
  adjustDelivery(): void;
}

const driverSchema = new Schema<IDriver>({
  driverId: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  mobileNum: { type: String, required: true },
});

driverSchema.methods.adjustDelivery = function () {
  // Implementation for adjusting delivery
};

export default models.Driver || model<IDriver>('Driver', driverSchema);