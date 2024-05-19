/*
  Warnings:

  - You are about to drop the column `referer` on the `Analytics` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Analytics" DROP COLUMN "referer",
ADD COLUMN     "referrer" TEXT;
