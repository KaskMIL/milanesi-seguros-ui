/*
  Warnings:

  - The values [bici] on the enum `Category` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `phoneNumber` to the `Contact` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Category_new" AS ENUM ('auto', 'moto', 'bicicleta', 'mascota', 'hogar', 'consorcio', 'comercio', 'art');
ALTER TABLE "Contact" ALTER COLUMN "category" TYPE "Category_new" USING ("category"::text::"Category_new");
ALTER TYPE "Category" RENAME TO "Category_old";
ALTER TYPE "Category_new" RENAME TO "Category";
DROP TYPE "Category_old";
COMMIT;

-- AlterTable
ALTER TABLE "Contact" ADD COLUMN     "phoneNumber" TEXT NOT NULL;
