-- CreateTable
CREATE TABLE "Order" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "patronymic" TEXT NOT NULL,
    "totalDiscount" INTEGER NOT NULL,
    "payment" TEXT NOT NULL,
    "trackingNumber" INTEGER NOT NULL,
    "totalPrice" INTEGER NOT NULL,
    "countOfProducts" INTEGER NOT NULL,
    "orderDate" DATETIME NOT NULL,
    "userId" INTEGER NOT NULL,
    "addressId" INTEGER NOT NULL,
    CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Order_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Order_addressId_key" ON "Order"("addressId");
