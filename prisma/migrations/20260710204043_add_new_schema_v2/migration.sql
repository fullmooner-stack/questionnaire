/*
  Warnings:

  - You are about to drop the column `surveyId` on the `Question` table. All the data in the column will be lost.
  - Added the required column `surveyId` to the `Answer` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_surveyId_fkey";

-- AlterTable
ALTER TABLE "Answer" ADD COLUMN     "surveyId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Question" DROP COLUMN "surveyId";

-- CreateTable
CREATE TABLE "SurveyQuestion" (
    "surveyId" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "SurveyQuestion_pkey" PRIMARY KEY ("surveyId","questionId")
);

-- CreateIndex
CREATE UNIQUE INDEX "SurveyQuestion_surveyId_order_key" ON "SurveyQuestion"("surveyId", "order");

-- AddForeignKey
ALTER TABLE "SurveyQuestion" ADD CONSTRAINT "SurveyQuestion_surveyId_fkey" FOREIGN KEY ("surveyId") REFERENCES "Survey"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SurveyQuestion" ADD CONSTRAINT "SurveyQuestion_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_surveyId_fkey" FOREIGN KEY ("surveyId") REFERENCES "Survey"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
