-- CreateTable
CREATE TABLE "verificationCode" (
    "email" TEXT NOT NULL PRIMARY KEY,
    "code" TEXT NOT NULL,
    "expiresAt" DATETIME NOT NULL
);
