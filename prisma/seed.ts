import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../app/generated/prisma/client";
const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
});

const questions = [
  {
    id: "q1",
    type: "select_single",
    text: "What is your age group?",
    options: ["18-24", "25-34", "35-44", "45-54", "55+"],
  },
  {
    id: "q2",
    type: "select_multiple",
    text: "Which of the following devices do you use regularly? (Select all that apply)",
    options: [
      "Smartphone",
      "Laptop",
      "Tablet",
      "Desktop Computer",
      "Smart Watch",
    ],
  },
  {
    id: "q3",
    type: "select_multiple_card",
    text: "Which travel destination appeals to you the most?",
    options: [
      {
        value: "beach",
        title: "Beach Paradise",
        description: "Relaxing sun, sand, and sea in tropical locations.",
      },
      {
        value: "mountain",
        title: "Mountain Adventure",
        description: "Hiking, fresh air, and stunning landscapes.",
      },
      {
        value: "city",
        title: "Vibrant City",
        description: "Culture, food, and urban excitement.",
      },
      {
        value: "cultural",
        title: "Historical Sites",
        description: "Ancient ruins and rich heritage.",
      },
    ],
  },
  {
    id: "q4",
    type: "select_single",
    text: "How often do you exercise per week?",
    options: ["Never", "1-2 times", "3-4 times", "5+ times"],
  },
  {
    id: "q5",
    type: "select_multiple",
    text: "What are your main sources of news? (Select all that apply)",
    options: ["Social Media", "News Websites", "TV", "Newspapers", "Podcasts"],
  },
  {
    id: "q6",
    type: "select_single",
    text: "What is your preferred way to communicate with friends?",
    options: [
      "Text messaging",
      "Voice calls",
      "Video calls",
      "Social media",
      "In person",
    ],
  },
  {
    id: "q7",
    type: "select_multiple_card",
    text: "Pick your favorite cuisine style",
    options: [
      {
        value: "italian",
        title: "Italian",
        description: "Pasta, pizza, and rich flavors.",
      },
      {
        value: "asian",
        title: "Asian",
        description: "Stir-fries, sushi, and spices.",
      },
      {
        value: "mexican",
        title: "Mexican",
        description: "Tacos, burritos, bold tastes.",
      },
      {
        value: "mediterranean",
        title: "Mediterranean",
        description: "Fresh ingredients and healthy options.",
      },
    ],
  },
  {
    id: "q8",
    type: "select_multiple",
    text: "Which hobbies interest you? (Select all that apply)",
    options: ["Reading", "Gaming", "Cooking", "Sports", "Music", "Painting"],
  },
  {
    id: "q9",
    type: "select_single",
    text: "What is your education level?",
    options: [
      "High School",
      "Bachelor's Degree",
      "Master's Degree",
      "PhD or Higher",
      "Other",
    ],
  },
  {
    id: "q10",
    type: "select_multiple_card",
    text: "Which type of movie do you enjoy most?",
    options: [
      {
        value: "action",
        title: "Action",
        description: "Explosions, chases, and heroes.",
      },
      {
        value: "comedy",
        title: "Comedy",
        description: "Laughs and light-hearted fun.",
      },
      {
        value: "drama",
        title: "Drama",
        description: "Emotional stories and character development.",
      },
      {
        value: "scifi",
        title: "Sci-Fi",
        description: "Future, tech, and imagination.",
      },
    ],
  },
  {
    id: "q11",
    type: "select_single",
    text: "How satisfied are you with your current job?",
    options: [
      "Very Satisfied",
      "Satisfied",
      "Neutral",
      "Dissatisfied",
      "Very Dissatisfied",
    ],
  },
  {
    id: "q12",
    type: "select_multiple",
    text: "What features are important in a smartphone? (Select all that apply)",
    options: [
      "Camera Quality",
      "Battery Life",
      "Performance/Speed",
      "Screen Size",
      "Price",
    ],
  },
  {
    id: "q13",
    type: "select_single",
    text: "Do you prefer working from home or office?",
    options: ["Fully Remote", "Hybrid", "Office Only", "No Preference"],
  },
  {
    id: "q14",
    type: "select_multiple_card",
    text: "Which pet would you like to have?",
    options: [
      {
        value: "dog",
        title: "Dog",
        description: "Loyal companion, energetic.",
      },
      {
        value: "cat",
        title: "Cat",
        description: "Independent, affectionate.",
      },
      {
        value: "bird",
        title: "Bird",
        description: "Colorful, sings beautifully.",
      },
      {
        value: "fish",
        title: "Fish",
        description: "Calming, low maintenance.",
      },
    ],
  },
  {
    id: "q15",
    type: "select_multiple",
    text: "Which social media platforms do you use? (Select all that apply)",
    options: ["Instagram", "Facebook", "Twitter/X", "TikTok", "LinkedIn"],
  },
  {
    id: "q16",
    type: "select_single",
    text: "What is your favorite season?",
    options: ["Spring", "Summer", "Autumn", "Winter"],
  },
  {
    id: "q17",
    type: "select_multiple",
    text: "What motivates you the most? (Select all that apply)",
    options: [
      "Career Growth",
      "Family",
      "Personal Health",
      "Financial Success",
      "Helping Others",
    ],
  },
  {
    id: "q18",
    type: "select_multiple_card",
    text: "Choose your ideal weekend activity",
    options: [
      {
        value: "outdoor",
        title: "Outdoor Adventure",
        description: "Hiking, sports, nature.",
      },
      {
        value: "relax",
        title: "Relax at Home",
        description: "Movies, reading, rest.",
      },
      {
        value: "social",
        title: "Social Gathering",
        description: "Parties, dinners with friends.",
      },
      {
        value: "creative",
        title: "Creative Hobby",
        description: "Art, music, crafting.",
      },
    ],
  },
  {
    id: "q19",
    type: "select_single",
    text: "How do you rate your overall life satisfaction?",
    options: ["Very High", "High", "Medium", "Low", "Very Low"],
  },
  {
    id: "q20",
    type: "select_multiple",
    text: "Which environmental actions do you take? (Select all that apply)",
    options: [
      "Recycling",
      "Using Public Transport",
      "Reducing Plastic Use",
      "Energy Saving",
      "Planting Trees",
    ],
  },
];

export async function seedQuestions() {
  console.log(`🌱 Seeding ${questions.length} questions...`);

  const createdQuestions = await prisma.question.createMany({
    data: questions.map((q) => ({
      id: q.id,
      type: q.type,
      text: q.text,
      options: q.options,
    })),
  });

  console.log(`✅ Successfully seeded ${createdQuestions.count} questions`);
}

export async function seedSurvey() {
  console.log("🌱 Seeding survey...");

  const surveyQuestions = questions.map((question, index) => ({
    questionId: question.id,
    order: index + 1,
  }));

  const survey = await prisma.survey.create({
    data: {
      id: "1",
      surveyQuestions: {
        createMany: {
          data: surveyQuestions,
        },
      },
    },
  });

  console.log(
    `✅ Successfully seeded survey with ${surveyQuestions.length} questions`,
  );
  console.log(`📋 Survey ID: ${survey.id}`);
}

async function main() {
  try {
    await seedQuestions();
    await seedSurvey();
    console.log("🎉 All seeding completed successfully!");
  } catch (error) {
    console.error("❌ Error during seeding:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
