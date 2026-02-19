-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Order" (
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
    "status" TEXT NOT NULL DEFAULT 'new',
    CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Order_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Order" ("addressId", "countOfProducts", "id", "lastname", "orderDate", "patronymic", "payment", "totalDiscount", "totalPrice", "trackingNumber", "userId", "username") SELECT "addressId", "countOfProducts", "id", "lastname", "orderDate", "patronymic", "payment", "totalDiscount", "totalPrice", "trackingNumber", "userId", "username" FROM "Order";
DROP TABLE "Order";
ALTER TABLE "new_Order" RENAME TO "Order";
CREATE UNIQUE INDEX "Order_addressId_key" ON "Order"("addressId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
