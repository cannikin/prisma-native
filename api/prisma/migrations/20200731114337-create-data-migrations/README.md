# Migration `20200731114337-create-data-migrations`

This migration has been generated by Rob Cameron at 7/31/2020, 11:43:37 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "RW_DataMigration" (
"version" TEXT NOT NULL,
"name" TEXT NOT NULL,
"startedAt" DATE NOT NULL,
"finishedAt" DATE NOT NULL,
PRIMARY KEY ("version"))

PRAGMA foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200731111208-migration..20200731114337-create-data-migrations
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource DS {
   provider = "sqlite"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider      = "prisma-client-js"
@@ -15,4 +15,11 @@
   id    Int     @id @default(autoincrement())
   email String  @unique
   name  String?
 }
+
+model RW_DataMigration {
+  version    String   @id
+  name       String
+  startedAt  DateTime
+  finishedAt DateTime
+}
```


