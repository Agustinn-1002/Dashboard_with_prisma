/*
  Warnings:

  - Added the required column `categoriaId` to the `Productos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `precio` to the `Productos` table without a default value. This is not possible if the table is not empty.
  - Made the column `descripcion` on table `Productos` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Productos" ADD COLUMN     "categoriaId" INTEGER NOT NULL,
ADD COLUMN     "precio" INTEGER NOT NULL,
ALTER COLUMN "descripcion" SET NOT NULL;

-- CreateTable
CREATE TABLE "Categoria" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Categoria_titulo_key" ON "Categoria"("titulo");

-- AddForeignKey
ALTER TABLE "Productos" ADD CONSTRAINT "Productos_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
