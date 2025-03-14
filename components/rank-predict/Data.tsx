import { FeatureTab } from "@/types/featureTab";

const rankPredictionSteps: FeatureTab[] = [
  {
    id: "tabOne",
    title: "Comprehensive Data Analysis",
    desc1: `We analyze historical data, including past exam results and rank distributions, to offer a detailed comparison with previous trends.`,
    desc2: `This extensive data analysis helps identify patterns that influence rank prediction and provides an in-depth understanding of how your performance compares to historical data.`,
    image: "/images/features/features-light-01.png",
    imageDark: "/images/features/features-dark-01.svg",
  },
  {
    id: "tabTwo",
    title: "Exam Performance Benchmarking",
    desc1: `Benchmark your exam performance against a comprehensive dataset, comparing your scores and percentile with other candidates' results.`,
    desc2: `This benchmarking process helps to understand how your current performance stands in relation to others and highlights areas of strength and improvement.`,
    image: "/images/features/features-light-02.png",
    imageDark: "/images/features/features-dark-02.svg",
  },
  {
    id: "tabThree",
    title: "Rank Prediction Model Accuracy",
    desc1: `Using advanced algorithms, we predict your rank with high accuracy based on percentile and historical data patterns.`,
    desc2: `Our model ensures precise rank prediction, factoring in the latest exam trends and data insights for a reliable estimate of your performance.`,
    image: "/images/features/features-light-03.png",
    imageDark: "/images/features/features-dark-03.svg",
  },
];

export default rankPredictionSteps;
