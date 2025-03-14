"use client";
import React from "react";
import { rankPredictionData, collegePredictionData } from "./featuresData"; // Import both datasets
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";

const Feature = () => {
  return (
    <>
      {/* ===== Features Section for Rank Prediction Start ===== */}
      <section id="rank-prediction" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* Section Title Start */}
          <SectionHeader
            headerInfo={{
              title: "Entrencik Rank Prediction",
              subtitle: "Rank Prediction Features",
              description: `Entrencik provides smart rank predictions using advanced algorithms to forecast your performance in different streams like Engineering, Agriculture, and Veterinary before the official rank announcements.`,
            }}
          />
          {/* Section Title End */}

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {/* Rank Prediction Features */}
            {rankPredictionData.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))}
          </div>
        </div>
      </section>
      {/* ===== Features Section for Rank Prediction End ===== */}

      {/* ===== Features Section for College Prediction Start ===== */}
      <section id="college-prediction" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* Section Title Start */}
          <SectionHeader
            headerInfo={{
              title: "Entrencik College Prediction",
              subtitle: "College Prediction Features",
              description: `Entrencik helps predict the best colleges tailored to your KCET and COMEDK ranks, ensuring that you get the most accurate and up-to-date information for your college admissions.`,
            }}
          />
          {/* Section Title End */}

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {/* College Prediction Features */}
            {collegePredictionData.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))}
          </div>
        </div>
      </section>
      {/* ===== Features Section for College Prediction End ===== */}
    </>
  );
};

export default Feature;
