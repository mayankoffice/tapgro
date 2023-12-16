
"use client"
// Import necessary libraries and components
import React from 'react';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Image from "next/image";

export function MobileTabs() {
  const data = [
    {
      label: <span >Free Banners/Creatives</span>,
      value: "html",
      Image: <Image width={200} height={200} src="/image/bannerscreatives.png" alt="iphone-photo" />,
      desc: <span>With TapGro you can easily <span className="font-bold" style={{color:"#2035E5"}}>Create attractive banners for your beauty business.</span> Our system generated automated designs save your time and effort so that it becomes easy to promote your services and attract more clients.</span>
    },
    {
      label: "One click WhatsApp Marketing",
      value: "next.js",
      Image: <Image width={200} height={200} src="/image/whatsapp.png" alt="iphone-photo" />,
      desc: <span>With TapGro WhatsApp marketing becomes the simplest and the easiest for your beauty business. With just one click, You can <span className="font-bold" style={{color:'#2035E5'}}>send promotional or conversational messages to over 100 people in just one click</span> without worrying about your number getting blocked, making client communication efficient.</span>
    },
    {
      label: "Automated Reminders",
      value: "tapgro",
      Image: <Image width={200} height={200} src="/image/Automated.png" alt="iphone-photo" />,
      desc: <span>With TapGro you can retain your existing and manage your new clients by sending them automated reminders. You will never miss an appointment <span className="font-bold" style={{color:'#2035E5'}}>our system automatically sends friendly reminders for services</span> making sure that customers stay updated and engage effortlessly</span>
    },
  ];

  const defaultActiveTab = "html";
  return (
    <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center">
      <h2 className="font-bold text-5xl tracking-tight text-center" style={{marginBottom:'5rem'}}>But Also</h2>
      <Tabs orientation="vertical" value={defaultActiveTab}>
        <TabsHeader placeholder="">
          {data.map(({ label, value }) => (
            <Tab placeholder="" className="h-40" key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody placeholder="">
          
          {data.map(({ value, Image ,desc }) => (
            <TabPanel key={value} value={value} className="py-0">
              {Image}
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}
