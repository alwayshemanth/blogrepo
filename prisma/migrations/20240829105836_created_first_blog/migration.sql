/*
  Warnings:

  - A unique constraint covering the columns `[blogHeading]` on the table `Blogs` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Blogs_blogHeading_key" ON "Blogs"("blogHeading");
