/*
  Warnings:

  - A unique constraint covering the columns `[sessionId,surveyId]` on the table `UserSurvey` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `sessionId` to the `UserSurvey` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserSurvey" ADD COLUMN     "sessionId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "UserSurvey_sessionId_surveyId_key" ON "UserSurvey"("sessionId", "surveyId");
