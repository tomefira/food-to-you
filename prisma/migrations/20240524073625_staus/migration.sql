/*
  Warnings:

  - The values [awaitingOrder] on the enum `DeliveryStatus` will be removed. If these variants are still used in the database, this will fail.
  - The values [delivered,cancelled] on the enum `OrderStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "DeliveryStatus_new" AS ENUM ('preparing', 'driving', 'delivered');
ALTER TABLE "Order" ALTER COLUMN "deliveryStatus" DROP DEFAULT;
ALTER TABLE "Order" ALTER COLUMN "deliveryStatus" TYPE "DeliveryStatus_new" USING ("deliveryStatus"::text::"DeliveryStatus_new");
ALTER TYPE "DeliveryStatus" RENAME TO "DeliveryStatus_old";
ALTER TYPE "DeliveryStatus_new" RENAME TO "DeliveryStatus";
DROP TYPE "DeliveryStatus_old";
ALTER TABLE "Order" ALTER COLUMN "deliveryStatus" SET DEFAULT 'preparing';
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "OrderStatus_new" AS ENUM ('pending', 'accepted', 'rejected', 'completed');
ALTER TABLE "Order" ALTER COLUMN "orderStatus" DROP DEFAULT;
ALTER TABLE "Order" ALTER COLUMN "orderStatus" TYPE "OrderStatus_new" USING ("orderStatus"::text::"OrderStatus_new");
ALTER TYPE "OrderStatus" RENAME TO "OrderStatus_old";
ALTER TYPE "OrderStatus_new" RENAME TO "OrderStatus";
DROP TYPE "OrderStatus_old";
ALTER TABLE "Order" ALTER COLUMN "orderStatus" SET DEFAULT 'pending';
COMMIT;

-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "deliveryStatus" SET DEFAULT 'preparing';
