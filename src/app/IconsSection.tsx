"use client";
import React from 'react';
import "./globals.css"
import Image from 'next/image';
import Link from 'next/link';

const MyIconsComponent: React.FC = () => {
  return (
    <div className="container mx-auto" id="Features">
      {/* Heading */}
      <h2 className="text-center font-bold text-4xl mt-4 tracking-tight font-sans lg:font-serif">
        All in One App for your Everyday <span className='bg-yellow-400 rounded-2xl p-1' style={{color:"#3EB0FE"}}>Business Needs</span> and <span className='rounded-2xl p-1' style={{color:"#158D00", background:"#BDFF30"}}>Growth</span> <br /> where not only we provide you
      </h2>
      <div className="icons-container flex flex-wrap justify-center">
        <Link href='#contact' className="flex flex-col items-center  sm:w-1/2 md:w-1/4 lg:w-1/4">
          <Image src="/icons/i6.png" height={150} width={150} alt="Icon" className="icons drop-shadow-lg " />
          <p className="text-center mt-2 font-bold">Appointments</p>
        </Link>
        <Link href='#contact' className="flex flex-col items-center  sm:w-1/2 md:w-1/4 lg:w-1/4">
          <Image src="/icons/i5.png" height={150} width={150} alt="Icon" className="icons drop-shadow-lg" />
          <p className="text-center mt-2 font-bold">CRM</p>
        </Link>
        <Link href='#contact' className="flex flex-col items-center  sm:w-1/2 md:w-1/4 lg:w-1/4">
          <Image src="/icons/i7.png" height={150} width={150} alt="Icon" className="icons drop-shadow-lg" />
          <p className="text-center mt-2 font-bold">Staff Management</p>
        </Link>
        <Link href='#contact' className="flex flex-col items-center  sm:w-1/2 md:w-1/4 lg:w-1/4">
          <Image src="/icons/i3.png" height={150} width={150} alt="Icon" className="icons drop-shadow-lg" />
          <p className="text-center mt-2 font-bold">Campaigns</p>

        </Link>
        <Link href='#contact' className="flex flex-col items-center  sm:w-1/2 md:w-1/4 lg:w-1/4">
          <Image src="/icons/i2.png" height={150} width={150} alt="Icon" className="icons drop-shadow-lg" />
          <p className="text-center mt-2 font-bold">Calendar</p>
        </Link>
        <Link href='#contact' className="flex flex-col items-center  sm:w-1/2 md:w-1/4 lg:w-1/4">
          <Image src="/icons/i8.png" height={150} width={150} alt="Icon" className="icons drop-shadow-lg" />          
          <p className="text-center mt-2 font-bold">Analytics</p>
        </Link>
        <Link href='#contact' className="flex flex-col items-center  sm:w-1/2 md:w-1/4 lg:w-1/4">
          <Image src="/icons/i4.png" height={150} width={150} alt="Icon" className="icons drop-shadow-lg" />
          <p className="text-center mt-2 font-bold">Inventory</p>
        </Link>
        <Link href='#contact' className="flex flex-col items-center  sm:w-1/2 md:w-1/4 lg:w-1/4">
          <Image src="/icons/i1.png" height={150} width={150} alt="Icon" className="icons drop-shadow-lg" />
          <p className="text-center mt-2 font-bold">Capture Sales</p>
          
        </Link>
      </div>
    </div>
  );
};

export default MyIconsComponent;
