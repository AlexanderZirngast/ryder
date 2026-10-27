/*
  Warnings:

  - You are about to drop the column `modell` on the `Motorcycle` table. All the data in the column will be lost.
  - You are about to drop the column `powrKw` on the `Motorcycle` table. All the data in the column will be lost.
  - You are about to alter the column `powerHP` on the `Motorcycle` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `engineDisplacement` on the `Motorcycle` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - A unique constraint covering the columns `[vin]` on the table `Motorcycle` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `model` to the `Motorcycle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `odoMeter` to the `Motorcycle` table without a default value. This is not possible if the table is not empty.
  - Made the column `powerHP` on table `Motorcycle` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Motorcycle" DROP COLUMN "modell",
DROP COLUMN "powrKw",
ADD COLUMN     "model" TEXT NOT NULL,
ADD COLUMN     "odoMeter" TEXT NOT NULL,
ADD COLUMN     "powerKw" DOUBLE PRECISION,
ALTER COLUMN "powerHP" SET NOT NULL,
ALTER COLUMN "powerHP" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "engineDisplacement" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Service" ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE UNIQUE INDEX "Motorcycle_vin_key" ON "Motorcycle"("vin");
