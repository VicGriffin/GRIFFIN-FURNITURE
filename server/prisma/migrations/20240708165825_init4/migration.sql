/*
  Warnings:

  - You are about to drop the column `Email` on the `Subscribe` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `Subscribe` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Subscribe` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Subscribe_Email_key";

-- AlterTable
ALTER TABLE "Subscribe" DROP COLUMN "Email",
ADD COLUMN     "email" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Subscribe_email_key" ON "Subscribe"("email");
