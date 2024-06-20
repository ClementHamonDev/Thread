-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_posts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "image" TEXT,
    "parentID" TEXT,
    "userID" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    CONSTRAINT "posts_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "posts_parentID_fkey" FOREIGN KEY ("parentID") REFERENCES "posts" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_posts" ("content", "id", "image", "parentID", "tag", "userID", "username") SELECT "content", "id", "image", "parentID", "tag", "userID", "username" FROM "posts";
DROP TABLE "posts";
ALTER TABLE "new_posts" RENAME TO "posts";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
