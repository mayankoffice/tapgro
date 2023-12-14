"use client";

import React from "react";
import Image from "next/image";
import { Typography} from "@material-tailwind/react";


export function MobileConvenience() {
  return (
    <section className="py-20 px-8">
      <h2 className="font-bold text-5xl mt-5 tracking-tight text-center">But Also,</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        <Image
          width={256}
          height={256}
          src="/image/bannerscreatives.png"
          className="col-span-1 w-1/2 mx-auto lg:w-10/12 p-20"
          alt="iphone-photo"
        />
        <div className="col-span-1 mx-auto max-w-lg px-4 lg:px-0">
          <Typography placeholder="" variant="h2" color="orange" className="mb-4">
          Free Banners/Creatives
          </Typography>
          <Typography
          placeholder=""
            variant="lead"
            className="mb-3 px-4 text-left text-2xl text-slate-950 lg:px-0 font-sans lg:font-serif"
          >
            With TapGro you can easily <span className="font-bold" style={{color:"#2035E5"}}>Create attractive banners for your beauty business.</span> Our system generated automated designs save your time and effort so that it becomes easy to promote your services and attract more clients.
          </Typography>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        <div className="col-span-1 mx-auto max-w-lg px-4 lg:px-0">
          <Typography placeholder="" variant="h2"  color="orange" className="mb-4">
          One click WhatsApp Marketing
          </Typography>
          <Typography
          placeholder=""
            variant="lead"
            className="mb-3 px-4 text-left text-2xl text-slate-950 lg:px-0"
          >
            With TapGro WhatsApp marketing becomes the simplest and the easiest for your beauty business. With just one click, You can <span className="font-bold" style={{color:'#2035E5'}}>send promotional or conversational messages to over 100 people in just one click</span> without worrying about your number getting blocked, making client communication efficient.
          </Typography>
        </div>
        <Image
          width={256}
          height={256}
          src="/image/whatsapp.png"
          className="col-span-1 w-1/2 mx-auto lg:w-10/12 p-20 order-first lg:order-none"
          alt="iphone-photo"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        <Image
          width={256}
          height={256}
          src="/image/Automated.png"
          className="col-span-1 w-1/2 mx-auto lg:w-10/12 p-20"
          alt="Automated"
        />
        <div className="col-span-1 mx-auto max-w-lg px-4 lg:px-0">
          <Typography placeholder="" variant="h2"  color="orange" className="mb-4">
          Automated Reminders
          </Typography>
          <Typography
          placeholder=""
            variant="lead"
            className="mb-3 px-4 text-left text-2xl text-slate-950 lg:px-0  "
          >
           With TapGro you can retain your existing and manage your new clients by sending them automated reminders. You will never miss an appointment <span className="font-bold" style={{color:'#2035E5'}}>our system automatically sends friendly reminders for services</span> making sure that customers stay updated and engage effortlessly
          </Typography>
        </div>
      </div>
      <h2 className="font-bold text-5xl mt-5 tracking-tight text-center">Exclusively on TapGro...!!</h2>
    </section>
  );
}
export default MobileConvenience;
