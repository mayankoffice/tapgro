"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Typography, Button } from "@material-tailwind/react";
import PopupForm from "./PopupForm";

function Hero() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const HeaderGradiantColor = {
    background: "linear-gradient(0deg, #0000FF 0%, #00ABFF 100%, #0000FF 100%)",
  };

  const openPopup = () => setPopupOpen(true);
  const closePopup = () => setPopupOpen(false);

  return (
    <div>
      <header style={HeaderGradiantColor} className="grid !min-h-[45rem] px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-7 lg:grid-cols-2">
          <div className="col-span-1">
            <Typography
              variant="h1"
              placeholder=""
              style={{ fontSize: "3rem" }}
              color="white"
              className="text-left font-serif"
            >
              Business Problems<span style={{ color: "#FF2121" }}>? </span>Solved
              <span style={{ color: "#90EE90" }}>.</span>
              <br/>
            </Typography>
            <span
              style={{ fontSize: "1.3rem", color: "white" }}
              className="ml-1 font-normal font-serif"
            >
              {" "}
              <p>
                Technology Assisting Professionals in Growth and Recurring
                Revenue through Optimised Operations
              </p>
              
            </span>
            <div>
              <Button
                placeholder=""
                size="lg"
                color="orange"
                onClick={openPopup}
                className="flex justify-center items-center gap-3 hover:translate-y-1 mt-5"
              >
                Join The Wishlist
              </Button>

              {isPopupOpen && <PopupForm onClose={closePopup} />}
            </div>
          </div>
          <Image
            width={470}
            height={576}
            src="/image/phones.png"
            alt="team work"
            className="col-span-1 my-20 h-full max-h-[28rem] -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[38rem] lg:translate-y-0"
          />
        </div>
      </header>
      <div
        className="container mx-auto mb-20 text-center mx-8 rounded-xl bg-white p-5 shadow-md font-serif text-black"
        style={{ marginTop: "-2rem" }}
      >
        <h3 style={{ fontSize: "1.3rem",}} className="font-bold mb-6">A Software for</h3>
        <div>
          <div className="min-w-[350px] md:min-w-[700px] xl:min-w-[800px] grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6 ">
            <div className="relative flex flex-grow !flex-row flex-col items-center rounded-[10px] rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
              <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                  <span className="flex items-center text-brand-500 dark:text-white  hover:translate-x-1">
                    <Image
                      src="/icons/Beautyp.png"
                      height={40}
                      width={40}
                      alt=""
                    />
                  </span>
                </div>
              </div>
              <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                  Beauty Parlour
                </h4>
              </div>
            </div>
            <div className="relative flex flex-grow !flex-row flex-col items-center rounded-[10px] rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
              <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                  <span className="flex items-center text-brand-500 dark:text-white hover:translate-x-1">
                    <Image
                      src="/icons/salonss.png"
                      height={50}
                      width={50}
                      alt=""
                    />
                  </span>
                </div>
              </div>
              <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                  Salon
                </h4>
              </div>
            </div>
            <div className="relative flex flex-grow !flex-row flex-col items-center rounded-[10px] rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
              <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                  <span className="flex items-center text-brand-500 dark:text-white hover:translate-x-1">
                    <Image
                      src="/icons/sapsss.png"
                      height={40}
                      width={40}
                      alt=""
                    />
                  </span>
                </div>
              </div>
              <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                  SPA
                </h4>
              </div>
            </div>
            <div className="relative flex flex-grow !flex-row flex-col items-center rounded-[10px] rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
              <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                  <span className="flex items-center text-brand-500 dark:text-white hover:translate-x-1">
                    <Image
                      src="/icons/nailiconss.png"
                      height={40}
                      width={40}
                      alt=""
                    />
                  </span>
                </div>
              </div>
              <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                  Nail Studio
                </h4>
              </div>
            </div>
            <div className="relative flex flex-grow !flex-row flex-col items-center rounded-[10px] rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
              <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                  <span className="flex items-center text-brand-500 dark:text-white hover:translate-x-1">
                    <Image
                      src="/icons/Tattoo.png"
                      height={40}
                      width={40}
                      alt=""
                    />
                  </span>
                </div>
              </div>
              <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                  Tattoo & Piercing Studio
                </h4>
              </div>
            </div>
            <div className="relative flex flex-grow !flex-row flex-col items-center rounded-[10px] rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
              <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                  <span className="flex items-center text-brand-500 dark:text-white hover:translate-x-1">
                    <Image
                      src="/icons/makeupAr.png"
                      height={40}
                      width={40}
                      alt=""
                    />
                  </span>
                </div>
              </div>
              <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                  Indiviual Artists
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
