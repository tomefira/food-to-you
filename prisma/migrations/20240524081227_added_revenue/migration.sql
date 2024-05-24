-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "isCompleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Restaurant" ADD COLUMN     "completedOrders" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "revenue" DOUBLE PRECISION NOT NULL DEFAULT 0.0;
