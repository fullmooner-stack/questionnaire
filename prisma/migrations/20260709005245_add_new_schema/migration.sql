/*
  Warnings:

  - You are about to drop the `Item` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserSurvey1` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `surveyId` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Answer" DROP CONSTRAINT "Answer_userSurveyId_fkey";

-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "surveyId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Item";

-- DropTable
DROP TABLE "UserSurvey1";

-- CreateTable
CREATE TABLE "Survey" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Survey_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserSurvey" (
    "id" TEXT NOT NULL,
    "lastUpdate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "termsOfService" BOOLEAN NOT NULL DEFAULT false,
    "privacyPolicy" BOOLEAN NOT NULL DEFAULT false,
    "region" TEXT,
    "surveyId" TEXT NOT NULL,

    CONSTRAINT "UserSurvey_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_surveyId_fkey" FOREIGN KEY ("surveyId") REFERENCES "Survey"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSurvey" ADD CONSTRAINT "UserSurvey_surveyId_fkey" FOREIGN KEY ("surveyId") REFERENCES "Survey"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_userSurveyId_fkey" FOREIGN KEY ("userSurveyId") REFERENCES "UserSurvey"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
