-- CreateTable
CREATE TABLE "OrderProducts" (
    "OrderId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "count_of_product" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "discount" INTEGER NOT NULL,

    PRIMARY KEY ("OrderId", "productId"),
    CONSTRAINT "OrderProducts_OrderId_fkey" FOREIGN KEY ("OrderId") REFERENCES "Order" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "OrderProducts_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
