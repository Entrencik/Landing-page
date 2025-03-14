import { FAQ } from "@/types/faq";

const faqData: FAQ[] = [
  {
    id: 1,
    quest: "How does your platform predict college rankings in Karnataka?",
    ans: "We utilize a data-driven approach, analyzing factors such as academic performance, faculty qualifications, infrastructure quality, student satisfaction surveys, and historical ranking data to forecast potential rankings.",
  },
  {
    id: 2,
    quest: "What data sources do you use for your ranking predictions?",
    ans: "Our predictions are based on publicly available data, including government educational statistics, university reports, peer-reviewed publications, and feedback from current students and alumni.",
  },
  {
    id: 3,
    quest: "How often are the ranking predictions updated?",
    ans: "We update our predictions annually to align with the release of official rankings and to incorporate the latest available data.",
  },
  {
    id: 4,
    quest: "Can I rely solely on your predicted rankings to choose a college?",
    ans: "While our predictions offer valuable insights, we recommend considering them alongside other factors such as specific program strengths, campus culture, location, and financial considerations to make an informed decision.",
  },
  {
    id: 5,
    quest: "How do your predicted rankings compare to official rankings like those from QS or THE?",
    ans: "Our predictions are based on a proprietary methodology focusing on Karnataka-specific data, whereas official rankings often consider global metrics. Both can serve as useful references, but they may vary due to differing evaluation criteria.",
  }
];

export default faqData;
