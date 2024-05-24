/*
  Warnings:

  - You are about to drop the column `completedOrders` on the `Restaurant` table. All the data in the column will be lost.
  - You are about to drop the column `revenue` on the `Restaurant` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "completedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Restaurant" DROP COLUMN "completedOrders",
DROP COLUMN "revenue";
