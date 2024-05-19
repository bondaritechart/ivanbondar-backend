-- AlterTable
ALTER TABLE "User" ADD COLUMN     "analyticsUuid" TEXT;

-- CreateTable
CREATE TABLE "Analytics" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "userId" INTEGER,
    "event" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ip" TEXT NOT NULL,
    "userAgent" TEXT NOT NULL,
    "referer" TEXT,
    "path" TEXT NOT NULL,
    "data" TEXT,

    CONSTRAINT "Analytics_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Analytics_uuid_key" ON "Analytics"("uuid");

-- CreateIndex
CREATE INDEX "Analytics_userId_idx" ON "Analytics"("userId");

-- AddForeignKey
ALTER TABLE "Analytics" ADD CONSTRAINT "Analytics_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
