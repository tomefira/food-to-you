-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('pending', 'awaitingPayment', 'paid', 'submitted', 'accepted', 'completed', 'cancelled');

-- CreateEnum
CREATE TYPE "DeliveryStatus" AS ENUM ('awaitingOrder', 'driving', 'delivered');

-- CreateTable
CREATE TABLE "Customer" (
    "id" TEXT NOT NULL,
    "customerID" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "mobileNum" TEXT NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Driver" (
    "id" TEXT NOT NULL,
    "driverId" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "mobileNum" TEXT NOT NULL,

    CONSTRAINT "Driver_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "orderID" TEXT NOT NULL,
    "resturantID" TEXT NOT NULL,
    "customerID" TEXT NOT NULL,
    "driverID" TEXT NOT NULL,
    "productIDArray" TEXT[],
    "orderDateTime" TIMESTAMP(3) NOT NULL,
    "deliveryAddress" TEXT NOT NULL,
    "orderStatus" "OrderStatus" NOT NULL DEFAULT 'pending',
    "deliveryStatus" "DeliveryStatus" NOT NULL DEFAULT 'awaitingOrder',
    "totalCost" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "productID" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "productCost" DOUBLE PRECISION NOT NULL,
    "resturantID" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Restaurant" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Restaurant_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer_customerID_key" ON "Customer"("customerID");

-- CreateIndex
CREATE UNIQUE INDEX "Driver_driverId_key" ON "Driver"("driverId");

-- CreateIndex
CREATE UNIQUE INDEX "Order_orderID_key" ON "Order"("orderID");

-- CreateIndex
CREATE UNIQUE INDEX "Product_productID_key" ON "Product"("productID");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_customerID_fkey" FOREIGN KEY ("customerID") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_driverID_fkey" FOREIGN KEY ("driverID") REFERENCES "Driver"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_resturantID_fkey" FOREIGN KEY ("resturantID") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_resturantID_fkey" FOREIGN KEY ("resturantID") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
