/*
  Warnings:

  - You are about to drop the column `image` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `tag` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `posts` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_posts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "parentID" TEXT,
    "userID" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "posts_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "posts_parentID_fkey" FOREIGN KEY ("parentID") REFERENCES "posts" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_posts" ("content", "createAt", "id", "parentID", "userID") SELECT "content", "createAt", "id", "parentID", "userID" FROM "posts";
DROP TABLE "posts";
ALTER TABLE "new_posts" RENAME TO "posts";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
