/*
  Warnings:

  - You are about to drop the column `resturantID` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `resturantID` on the `Product` table. All the data in the column will be lost.
  - Added the required column `restaurantID` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `restaurantID` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_resturantID_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_resturantID_fkey";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "resturantID",
ADD COLUMN     "restaurantID" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "resturantID",
ADD COLUMN     "restaurantID" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "password" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_restaurantID_fkey" FOREIGN KEY ("restaurantID") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_restaurantID_fkey" FOREIGN KEY ("restaurantID") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
