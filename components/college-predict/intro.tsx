"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Intro = () => {
  return (
    <>
      <section>
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0 border-t-gray-800">
          <div className="flex items-center gap-8 lg:gap-32.5">
            {/* Image on the left */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="./images/college-prediction-light.svg"
                alt="College Prediction"
                className="dark:hidden"
                fill
              />
              <Image
                src="./images/college-prediction-dark.svg"
                alt="College Prediction"
                className="hidden dark:block"
                fill
              />
            </motion.div>

            {/* Content on the right */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <h4 className="font-medium uppercase text-black dark:text-white">
                College Prediction Based on Rank
              </h4>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Your Rank,{" "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark">
                  Your Future College
                </span>
              </h2>
              <p>
                Our prediction system helps you identify which colleges you can
                potentially get admitted to, based on your rank and preferences.
                We analyze historical data, cutoff trends, and course
                preferences to provide a personalized list of colleges that
                match your profile.
              </p>
              <p className="mt-4">
                By leveraging data science and machine learning techniques, we
                predict the best college options for you, considering factors
                like rank, category, past admission patterns, and your preferred
                courses. With real-time updates, you can stay informed on your
                admission chances as ranks fluctuate.
              </p>
              <div>
                <a
                  href="#"
                  className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                >
                  <span className="duration-300 group-hover:pr-2">
                    Explore More
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                  >
                    <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
