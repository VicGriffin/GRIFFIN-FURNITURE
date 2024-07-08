/*
  Warnings:

  - The primary key for the `Subscribe` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `email` on the `Subscribe` table. All the data in the column will be lost.
  - The `id` column on the `Subscribe` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[Email]` on the table `Subscribe` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `Email` to the `Subscribe` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Subscribe_email_key";

-- AlterTable
ALTER TABLE "Subscribe" DROP CONSTRAINT "Subscribe_pkey",
DROP COLUMN "email",
ADD COLUMN     "Email" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Subscribe_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Subscribe_Email_key" ON "Subscribe"("Email");
