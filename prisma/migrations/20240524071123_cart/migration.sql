-- CreateTable
CREATE TABLE "Cart" (
    "id" SERIAL NOT NULL,
    "customerID" INTEGER NOT NULL,

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CartProducts" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Cart_customerID_key" ON "Cart"("customerID");

-- CreateIndex
CREATE UNIQUE INDEX "_CartProducts_AB_unique" ON "_CartProducts"("A", "B");

-- CreateIndex
CREATE INDEX "_CartProducts_B_index" ON "_CartProducts"("B");

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_customerID_fkey" FOREIGN KEY ("customerID") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CartProducts" ADD CONSTRAINT "_CartProducts_A_fkey" FOREIGN KEY ("A") REFERENCES "Cart"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CartProducts" ADD CONSTRAINT "_CartProducts_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
