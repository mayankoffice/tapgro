"use client";
import React from "react";
const FAQS = [
  {
    title: "What is TapGro, and how can it benefit my beauty business?",
    desc: "TapGro is an all-in-one solution designed to streamline and enhance beauty businesses. It helps you manage appointments, track sales, engage with clients through marketing, and automate various tasks—all conveniently accessible from your mobile device.",
  },
  {
    title: "Is a desktop or laptop necessary to use TapGro?",
    desc: "No, TapGro is designed to be fully functional on mobile devices, eliminating the need for a desktop or laptop. Manage your beauty business efficiently on the go!",
  },
  {
    title: "Can I schedule appointments easily with TapGro?",
    desc: "Absolutely! TapGro simplifies appointment scheduling, allowing you to manage your salon or spa bookings effortlessly through the app.",
  },
  {
    title: "How does TapGro help with promotional activities?",
    desc: "TapGro empowers you to design promotional banners without the need for a design team. Easily create eye-catching promotions to attract clients and boost your business.",
  },
  {
    title: "Does TapGro assist in managing inventory and client information?",
    desc: "Yes, TapGro is equipped to help you manage both inventory and client details, ensuring a well-organized and personalized approach to your beauty business.",
  },
  {
    title: "Can I engage with my clients using WhatsApp through TapGro?",
    desc: "Certainly! TapGro facilitates hassle-free WhatsApp marketing, allowing you to communicate with clients seamlessly and enhance customer engagement.",
  },
  {
    title: "How does TapGro automate reminders and follow-ups?",
    desc: "TapGro automates reminders and follow-ups, ensuring that your clients stay informed about appointments and allowing you to maintain consistent communication effortlessly.",
  },
  {
    title: "How does TapGro provide automated designs?",
    desc: "TapGro eliminates the need for a design team by providing automated design options. Easily create visually appealing content for your promotions and marketing efforts.",
  },
  {
    title: "Can I collect reviews and ratings from clients using TapGro?",
    desc: "Yes, TapGro allows you to collect positive reviews and ratings from clients, helping you build a positive online reputation and attract new customers.",
  },
];

export function Faqs() {
  return (
    <div id="FAQ" className="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-5xl mt-5 tracking-tight">FAQ</h2>
        <p className="text-neutral-500 text-xl mt-3">
          Frequenty asked questions
        </p>
      </div>
      <div className="grid divide-y divide-neutral-200  mx-auto mt-8">
        <div className="py-5 shadow-l p-3 m-1 rounded-lg">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>What is TapGro, and how can it benefit my beauty business?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height={24}
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width={24}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
            TapGro is an all-in-one solution designed to streamline and enhance beauty businesses. It helps you manage appointments, track sales, engage with clients through marketing, and automate various tasks—all conveniently accessible from your mobile device.
            </p>
          </details>
        </div>
        <div className="py-5 shadow-l p-3 m-1 rounded-lg">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span> Is a desktop or laptop necessary to use TapGro?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height={24}
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width={24}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
            No, TapGro is designed to be fully functional on mobile devices, eliminating the need for a desktop or laptop. Manage your beauty business efficiently on the go!
            </p>
          </details>
        </div>
        <div className="py-5 shadow-l p-3 m-1 rounded-lg">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span> Can I schedule appointments easily with TapGro?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height={24}
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width={24}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
            Absolutely! TapGro simplifies appointment scheduling, allowing you to manage your salon or spa bookings effortlessly through the app.
            </p>
          </details>
        </div>
        <div className="py-5 shadow-l p-3 m-1 rounded-lg">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span> How does TapGro help with promotional activities?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height={24}
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width={24}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
            TapGro empowers you to design promotional banners without the need for a design team. Easily create eye-catching promotions to attract clients and boost your business.
            </p>
          </details>
        </div>
        <div className="py-5 shadow-l p-3 m-1 rounded-lg">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>Does TapGro assist in managing inventory and client information?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height={24}
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width={24}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
            Yes, TapGro is equipped to help you manage both inventory and client details, ensuring a well-organized and personalized approach to your beauty business.
            </p>
          </details>
        </div>
        <div className="py-5 shadow-l p-3 m-1 rounded-lg">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>Can I engage with my clients using WhatsApp through TapGro?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height={24}
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width={24}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
            Certainly! TapGro facilitates hassle-free WhatsApp marketing, allowing you to communicate with clients seamlessly and enhance customer engagement.
            </p>
          </details>
        </div>
        <div className="py-5 shadow-l p-3 m-1 rounded-lg">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>How does TapGro automate reminders and follow-ups?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height={24}
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width={24}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
            TapGro automates reminders and follow-ups, ensuring that your clients stay informed about appointments and allowing you to maintain consistent communication effortlessly.
            </p>
          </details>
        </div>
        <div className="py-5 shadow-l p-3 m-1 rounded-lg">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>How does TapGro provide automated designs?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height={24}
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width={24}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
            TapGro eliminates the need for a design team by providing automated design options. Easily create visually appealing content for your promotions and marketing efforts.
            </p>
          </details>
        </div>
        <div className="py-5 shadow-l p-3 m-1 rounded-lg">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span> Can I collect reviews and ratings from clients using TapGro?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height={24}
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width={24}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
            Yes, TapGro allows you to collect positive reviews and ratings from clients, helping you build a positive online reputation and attract new customers.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
