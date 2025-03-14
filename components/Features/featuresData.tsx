import { Feature } from "@/types/feature";

// Rank Prediction Data (for KCET, COMEDK, and JEE)
export const rankPredictionData: Feature[] = [
  {
    id: 1,
    icon: "/images/icon/icon-01.svg",
    title: "KCET Engineering Rank Prediction from KCET Marks",
    description:
      "Predict your potential KCET rank and explore college admission chances based on performance.",
  },
  {
    id: 2,
    icon: "/images/icon/icon-02.svg",
    title: "KCET BSc Ag Rank Prediction from KCET Marks",
    description:
      "Estimate your KCET rank for agriculture courses and explore eligible colleges.",
  },
  {
    id: 3,
    icon: "/images/icon/icon-03.svg",
    title: "KCET Veterinary Rank Prediction from KCET Marks",
    description:
      "Get your expected KCET rank for veterinary science and find matching colleges.",
  },
  {
    id: 4,
    icon: "/images/icon/icon-04.svg",
    title: "COMEDK Rank Prediction from COMEDK Marks",
    description:
      "Predict your COMEDK rank and assess engineering college admissions possibilities.",
  },
  {
    id: 5,
    icon: "/images/icon/icon-05.svg",
    title: "JEE Mains Rank Prediction from JEE Mains Percentile",
    description:
      "Estimate your JEE Mains rank based on percentile and explore college admission chances.",
  },
  {
    id: 6,
    icon: "/images/icon/icon-06.svg",
    title: "JEE Advanced Rank Prediction from JEE Advanced Marks",
    description:
      "Predict your JEE Advanced rank and assess IIT admission possibilities.",
  },
];

// College Prediction Data (based on rank)
export const collegePredictionData: Feature[] = [
  {
    id: 1,
    icon: "/images/icon/icon-07.svg",
    title: "Engineering College Prediction by KCET Rank",
    description:
      "Find the best engineering colleges tailored to your KCET rank and preferences.",
  },
  {
    id: 2,
    icon: "/images/icon/icon-08.svg",
    title: "BSc Ag College Prediction by KCET Rank",
    description:
      "Discover top agriculture colleges based on your KCET rank and available courses.",
  },
  {
    id: 3,
    icon: "/images/icon/icon-09.svg",
    title: "Veterinary College Prediction by KCET Rank",
    description:
      "Identify the best veterinary colleges using your KCET rank, filtered by your priorities.",
  },
  {
    id: 4,
    icon: "/images/icon/icon-10.svg",
    title: "Engineering College Prediction by COMEDK Rank",
    description:
      "Find out which engineering colleges you can get into based on your COMEDK rank.",
  },
  {
    id: 5,
    icon: "/images/icon/icon-11.svg",
    title: "NIT College Prediction by JEE Mains Rank",
    description:
      "Discover which National Institutes of Technology (NITs) are available for your JEE Mains rank.",
  },
  {
    id: 6,
    icon: "/images/icon/icon-12.svg",
    title: "IIT College Prediction by JEE Advanced Rank",
    description:
      "Find the Indian Institutes of Technology (IITs) that match your JEE Advanced rank.",
  },
];
