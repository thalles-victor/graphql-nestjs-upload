/*
  Warnings:

  - Added the required column `created_at` to the `Cat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cat" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL;
