-- CreateTable
CREATE TABLE "Blogs" (
    "id" SERIAL NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "entireBlog" TEXT NOT NULL,
    "blogHeading" TEXT NOT NULL,
    "blogDescription" TEXT NOT NULL,

    CONSTRAINT "Blogs_pkey" PRIMARY KEY ("id")
);
