/*
  Warnings:

  - You are about to drop the `userSurvey1` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Answer" DROP CONSTRAINT "Answer_userSurveyId_fkey";

-- DropTable
DROP TABLE "userSurvey1";

-- CreateTable
CREATE TABLE "UserSurvey1" (
    "id" TEXT NOT NULL,
    "lastUpdate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "termsOfService" BOOLEAN NOT NULL DEFAULT false,
    "privacyPolicy" BOOLEAN NOT NULL DEFAULT false,
    "region" TEXT,

    CONSTRAINT "UserSurvey1_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_userSurveyId_fkey" FOREIGN KEY ("userSurveyId") REFERENCES "UserSurvey1"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
