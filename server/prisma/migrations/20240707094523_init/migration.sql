-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "FirstName" TEXT NOT NULL,
    "SecondName" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "PhoneNumber" INTEGER NOT NULL,
    "Password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_Email_key" ON "User"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "User_PhoneNumber_key" ON "User"("PhoneNumber");
