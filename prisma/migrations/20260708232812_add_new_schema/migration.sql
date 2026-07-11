/*
  Warnings:

  - You are about to drop the column `q1` on the `userSurvey1` table. All the data in the column will be lost.
  - You are about to drop the column `q10` on the `userSurvey1` table. All the data in the column will be lost.
  - You are about to drop the column `q11` on the `userSurvey1` table. All the data in the column will be lost.
  - You are about to drop the column `q12` on the `userSurvey1` table. All the data in the column will be lost.
  - You are about to drop the column `q13` on the `userSurvey1` table. All the data in the column will be lost.
  - You are about to drop the column `q14` on the `userSurvey1` table. All the data in the column will be lost.
  - You are about to drop the column `q15` on the `userSurvey1` table. All the data in the column will be lost.
  - You are about to drop the column `q16` on the `userSurvey1` table. All the data in the column will be lost.
  - You are about to drop the column `q17` on the `userSurvey1` table. All the data in the column will be lost.
  - You are about to drop the column `q18` on the `userSurvey1` table. All the data in the column will be lost.
  - You are about to drop the column `q19` on the `userSurvey1` table. All the data in the column will be lost.
  - You are about to drop the column `q2` on the `userSurvey1` table. All the data in the column will be lost.
  - You are about to drop the column `q20` on the `userSurvey1` table. All the data in the column will be lost.
  - You are about to drop the column `q3` on the `userSurvey1` table. All the data in the column will be lost.
  - You are about to drop the column `q4` on the `userSurvey1` table. All the data in the column will be lost.
  - You are about to drop the column `q5` on the `userSurvey1` table. All the data in the column will be lost.
  - You are about to drop the column `q6` on the `userSurvey1` table. All the data in the column will be lost.
  - You are about to drop the column `q7` on the `userSurvey1` table. All the data in the column will be lost.
  - You are about to drop the column `q8` on the `userSurvey1` table. All the data in the column will be lost.
  - You are about to drop the column `q9` on the `userSurvey1` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "userSurvey1" DROP COLUMN "q1",
DROP COLUMN "q10",
DROP COLUMN "q11",
DROP COLUMN "q12",
DROP COLUMN "q13",
DROP COLUMN "q14",
DROP COLUMN "q15",
DROP COLUMN "q16",
DROP COLUMN "q17",
DROP COLUMN "q18",
DROP COLUMN "q19",
DROP COLUMN "q2",
DROP COLUMN "q20",
DROP COLUMN "q3",
DROP COLUMN "q4",
DROP COLUMN "q5",
DROP COLUMN "q6",
DROP COLUMN "q7",
DROP COLUMN "q8",
DROP COLUMN "q9";

-- CreateTable
CREATE TABLE "Question" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "options" JSONB NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Answer" (
    "id" TEXT NOT NULL,
    "value" JSONB NOT NULL,
    "userSurveyId" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,

    CONSTRAINT "Answer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Answer_userSurveyId_questionId_key" ON "Answer"("userSurveyId", "questionId");

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_userSurveyId_fkey" FOREIGN KEY ("userSurveyId") REFERENCES "userSurvey1"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
