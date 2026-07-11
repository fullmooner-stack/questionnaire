"use strict";
// const survey1 = {
//   userId: "string",
//   lastUpdate: "string",
//   consent: {
//     agreedToTOS: "boolean",
//     agreedToPrivacyPolicy: "boolean",
//     timestamp: "string",
//   },
//   region: {
//     question: "In which part of the world do you live?",
//     options: {
//       Americas: ["North America", "Central or South America"],
//       Europe: ["Europe"],
//       Africa: ["North Africa", "Central Africa", "South Africa"],
//       Asia: ["North Asia", "Middle East", "Central or South Asia"],
//       "Australia and Oceania": ["Australia or Oceania"],
//     },
//   },
//   questions: [
//     {
//       id: "q1",
//       type: "select_single",
//       text: "What is your age group?",
//       options: ["18-24", "25-34", "35-44", "45-54", "55+"],
//     },
//     {
//       id: "q2",
//       type: "select_multiple",
//       text: "Which of the following devices do you use regularly? (Select all that apply)",
//       options: [
//         "Smartphone",
//         "Laptop",
//         "Tablet",
//         "Desktop Computer",
//         "Smart Watch",
//       ],
//     },
//     {
//       id: "q3",
//       type: "select_multiple_card",
//       text: "Which travel destination appeals to you the most?",
//       options: [
//         {
//           value: "beach",
//           title: "Beach Paradise",
//           description: "Relaxing sun, sand, and sea in tropical locations.",
//         },
//         {
//           value: "mountain",
//           title: "Mountain Adventure",
//           description: "Hiking, fresh air, and stunning landscapes.",
//         },
//         {
//           value: "city",
//           title: "Vibrant City",
//           description: "Culture, food, and urban excitement.",
//         },
//         {
//           value: "cultural",
//           title: "Historical Sites",
//           description: "Ancient ruins and rich heritage.",
//         },
//       ],
//     },
//     {
//       id: "q4",
//       type: "select_single",
//       text: "How often do you exercise per week?",
//       options: ["Never", "1-2 times", "3-4 times", "5+ times"],
//     },
//     {
//       id: "q5",
//       type: "select_multiple",
//       text: "What are your main sources of news? (Select all that apply)",
//       options: [
//         "Social Media",
//         "News Websites",
//         "TV",
//         "Newspapers",
//         "Podcasts",
//       ],
//     },
//     {
//       id: "q6",
//       type: "select_single",
//       text: "What is your preferred way to communicate with friends?",
//       options: [
//         "Text messaging",
//         "Voice calls",
//         "Video calls",
//         "Social media",
//         "In person",
//       ],
//     },
//     {
//       id: "q7",
//       type: "select_multiple_card",
//       text: "Pick your favorite cuisine style",
//       options: [
//         {
//           value: "italian",
//           title: "Italian",
//           description: "Pasta, pizza, and rich flavors.",
//         },
//         {
//           value: "asian",
//           title: "Asian",
//           description: "Stir-fries, sushi, and spices.",
//         },
//         {
//           value: "mexican",
//           title: "Mexican",
//           description: "Tacos, burritos, bold tastes.",
//         },
//         {
//           value: "mediterranean",
//           title: "Mediterranean",
//           description: "Fresh ingredients and healthy options.",
//         },
//       ],
//     },
//     {
//       id: "q8",
//       type: "select_multiple",
//       text: "Which hobbies interest you? (Select all that apply)",
//       options: ["Reading", "Gaming", "Cooking", "Sports", "Music", "Painting"],
//     },
//     {
//       id: "q9",
//       type: "select_single",
//       text: "What is your education level?",
//       options: [
//         "High School",
//         "Bachelor's Degree",
//         "Master's Degree",
//         "PhD or Higher",
//         "Other",
//       ],
//     },
//     {
//       id: "q10",
//       type: "select_multiple_card",
//       text: "Which type of movie do you enjoy most?",
//       options: [
//         {
//           value: "action",
//           title: "Action",
//           description: "Explosions, chases, and heroes.",
//         },
//         {
//           value: "comedy",
//           title: "Comedy",
//           description: "Laughs and light-hearted fun.",
//         },
//         {
//           value: "drama",
//           title: "Drama",
//           description: "Emotional stories and character development.",
//         },
//         {
//           value: "scifi",
//           title: "Sci-Fi",
//           description: "Future, tech, and imagination.",
//         },
//       ],
//     },
//     {
//       id: "q11",
//       type: "select_single",
//       text: "How satisfied are you with your current job?",
//       options: [
//         "Very Satisfied",
//         "Satisfied",
//         "Neutral",
//         "Dissatisfied",
//         "Very Dissatisfied",
//       ],
//     },
//     {
//       id: "q12",
//       type: "select_multiple",
//       text: "What features are important in a smartphone? (Select all that apply)",
//       options: [
//         "Camera Quality",
//         "Battery Life",
//         "Performance/Speed",
//         "Screen Size",
//         "Price",
//       ],
//     },
//     {
//       id: "q13",
//       type: "select_single",
//       text: "Do you prefer working from home or office?",
//       options: ["Fully Remote", "Hybrid", "Office Only", "No Preference"],
//     },
//     {
//       id: "q14",
//       type: "select_multiple_card",
//       text: "Which pet would you like to have?",
//       options: [
//         {
//           value: "dog",
//           title: "Dog",
//           description: "Loyal companion, energetic.",
//         },
//         {
//           value: "cat",
//           title: "Cat",
//           description: "Independent, affectionate.",
//         },
//         {
//           value: "bird",
//           title: "Bird",
//           description: "Colorful, sings beautifully.",
//         },
//         {
//           value: "fish",
//           title: "Fish",
//           description: "Calming, low maintenance.",
//         },
//       ],
//     },
//     {
//       id: "q15",
//       type: "select_multiple",
//       text: "Which social media platforms do you use? (Select all that apply)",
//       options: ["Instagram", "Facebook", "Twitter/X", "TikTok", "LinkedIn"],
//     },
//     {
//       id: "q16",
//       type: "select_single",
//       text: "What is your favorite season?",
//       options: ["Spring", "Summer", "Autumn", "Winter"],
//     },
//     {
//       id: "q17",
//       type: "select_multiple",
//       text: "What motivates you the most? (Select all that apply)",
//       options: [
//         "Career Growth",
//         "Family",
//         "Personal Health",
//         "Financial Success",
//         "Helping Others",
//       ],
//     },
//     {
//       id: "q18",
//       type: "select_multiple_card",
//       text: "Choose your ideal weekend activity",
//       options: [
//         {
//           value: "outdoor",
//           title: "Outdoor Adventure",
//           description: "Hiking, sports, nature.",
//         },
//         {
//           value: "relax",
//           title: "Relax at Home",
//           description: "Movies, reading, rest.",
//         },
//         {
//           value: "social",
//           title: "Social Gathering",
//           description: "Parties, dinners with friends.",
//         },
//         {
//           value: "creative",
//           title: "Creative Hobby",
//           description: "Art, music, crafting.",
//         },
//       ],
//     },
//     {
//       id: "q19",
//       type: "select_single",
//       text: "How do you rate your overall life satisfaction?",
//       options: ["Very High", "High", "Medium", "Low", "Very Low"],
//     },
//     {
//       id: "q20",
//       type: "select_multiple",
//       text: "Which environmental actions do you take? (Select all that apply)",
//       options: [
//         "Recycling",
//         "Using Public Transport",
//         "Reducing Plastic Use",
//         "Energy Saving",
//         "Planting Trees",
//       ],
//     },
//   ],
// };
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var questions = [
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
var extension_1 = require("@prisma/client/extension");
var prisma = new extension_1.PrismaClient();
function seedQuestions() {
    return __awaiter(this, void 0, void 0, function () {
        var createdQuestions;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("\uD83C\uDF31 Seeding ".concat(questions.length, " questions..."));
                    return [4 /*yield*/, prisma.question.createMany({
                            data: questions.map(function (q) { return ({
                                id: q.id,
                                type: q.type,
                                text: q.text,
                                options: q.options,
                            }); }),
                        })];
                case 1:
                    createdQuestions = _a.sent();
                    console.log("\u2705 Successfully seeded ".concat(createdQuestions.count, " questions"));
                    return [2 /*return*/];
            }
        });
    });
}
function seedSurvey() {
    return __awaiter(this, void 0, void 0, function () {
        var surveyQuestions, survey;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("🌱 Seeding survey...");
                    surveyQuestions = questions.map(function (question, index) { return ({
                        questionId: question.id,
                        order: index + 1,
                    }); });
                    return [4 /*yield*/, prisma.survey.create({
                            data: {
                                id: "survey_1",
                                surveyQuestions: {
                                    createMany: {
                                        data: surveyQuestions,
                                    },
                                },
                            },
                        })];
                case 1:
                    survey = _a.sent();
                    console.log("\u2705 Successfully seeded survey with ".concat(surveyQuestions.length, " questions"));
                    console.log("\uD83D\uDCCB Survey ID: ".concat(survey.id));
                    return [2 /*return*/];
            }
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, 4, 6]);
                    return [4 /*yield*/, seedQuestions()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, seedSurvey()];
                case 2:
                    _a.sent();
                    console.log("🎉 All seeding completed successfully!");
                    return [3 /*break*/, 6];
                case 3:
                    error_1 = _a.sent();
                    console.error("❌ Error during seeding:", error_1);
                    process.exit(1);
                    return [3 /*break*/, 6];
                case 4: return [4 /*yield*/, prisma.$disconnect()];
                case 5:
                    _a.sent();
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    });
}
main();
