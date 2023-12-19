"use client";

import React from "react";
import { Typography} from "@material-tailwind/react";
import TestimonialCard from "../components/testimonial-card";


const TESTIMONIALS = [
  {
    feedback:
      "I am in beauty industry for 8 years and there has been no solution yet which solves our daily problems like maintaining registers, online promotions , etc. I am really excited about the features TapGro is providing and will surely use this software for our business once its launched.",
    client: "Imran",
    title: "Salon Owner @ Blunt",
    img: "/image/imranji.png",
  },
  {
    feedback:
      "All in one app which resolves our daily problems of client appointment, contact management, follow up, marketing, inventory management, etc at one place. I am eagerly waiting to use the app.",
    client: "Vikram",
    title: "Salon Manager @ Nayledit",
    img: "/image/Vikramji.png",
  },
  {
    feedback:
      "Since 7 years I am running my salon and I face problems like maintaining registers, billing & Invoices, employee management. TapGro looks like a  game-changer app for our business as it is assuring to resolve all our problems & hence will surely try it.",
    client: "Dilip",
    title: "Salon Owner @ RD Nails",
    img: "/image/Dilipji.png",
  },
];

export function Testimonials() {
  return (
    <section className="px-10 !py-20">
      <div className="container mx-auto">
        <div className="mb-20 flex w-full flex-col items-center">
          <Typography placeholder="" variant="h2" color="blue-gray" className="mb-2">
          What are prospect clients say ?
          </Typography>
          <Typography
          placeholder=""
            variant="lead"
            className="max-w-3xl text-center !text-gray-600"
          >
            While developing the product, we had done surveys to have an opinion of salon owners, managers, individuial artists on the problems our App is solving.
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3 lg:px-20">
          {TESTIMONIALS.map((props, key) => (
            <TestimonialCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Testimonials;
