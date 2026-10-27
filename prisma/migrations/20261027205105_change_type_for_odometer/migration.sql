/*
  Warnings:

  - Changed the type of `odoMeter` on the `Motorcycle` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Motorcycle" DROP COLUMN "odoMeter",
ADD COLUMN     "odoMeter" DOUBLE PRECISION NOT NULL;
