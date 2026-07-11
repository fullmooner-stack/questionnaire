/*
  Warnings:

  - You are about to drop the column `version` on the `Survey` table. All the data in the column will be lost.
  - You are about to drop the column `surveyVersion` on the `UserSurvey` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Survey" DROP COLUMN "version";

-- AlterTable
ALTER TABLE "UserSurvey" DROP COLUMN "surveyVersion";
