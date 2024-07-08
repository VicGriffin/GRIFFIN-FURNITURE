-- CreateTable
CREATE TABLE "Subscribe" (
    "id" TEXT NOT NULL,
    "Email" TEXT NOT NULL,

    CONSTRAINT "Subscribe_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Subscribe_Email_key" ON "Subscribe"("Email");
