"use client";
import React from "react";
import SingleBrand from "./SingleBrand";
// import brandData from "./brandData";

const Brands = () => {
  return (
    <>
      {/* <!-- ===== Clients Start ===== --> */}
      <section className="border border-x-0 border-y-stroke bg-alabaster py-11 dark:border-y-strokedark dark:bg-black">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="grid place-content-center  text-center">
            {/* Uncomment the brandData map when you have brands to showcase */}
            {/* {brandData.map((brand, key) => (
    <SingleBrand brand={brand} key={key} />
  ))} */}

            <p className="text-lg font-semibold">
              <span className="block">
                No sponsors yet, but your brand could be the first!
              </span>
              <span className="block">
                Partner with us and let's create something incredible together!
                ✨
              </span>
            </p>
          </div>
        </div>
      </section>
      {/* <!-- ===== Clients End ===== --> */}
    </>
  );
};

export default Brands;
