// MyIconsComponent.tsx
import React from 'react';
import './globals.css';
import Image from 'next/image';

const MyIconsComponent: React.FC = () => {
  return (
    <div className="container mx-auto">
      {/* Heading */}
      <h2 className='text-center font-bold text-4xl mt-5 tracking-tight' style={{ marginBottom: '6rem' }}>
        All in One App for all your Everyday Business Needs and Growth where not only we provide you
      </h2>

      {/* Icons container */}
      <div className="icons-container flex flex-wrap justify-center">
        {/* Individual icon with label */}
        <div className="flex flex-col items-center m-4">
          <Image src="/icons/iconno1.png" height={70} width={80} alt="Icon" className="icons" />
          <p className="text-center">Staff Managements</p>
        </div>
        <div className="flex flex-col items-center m-4">
          <Image src="/icons/iconno2.png" height={70} width={80} alt="Icon" className="icons" />
          <p className="text-center">Calendar</p>
        </div>
        <div className="flex flex-col items-center m-4">
          <Image src="/icons/iconno3.png" height={70} width={80} alt="Icon" className="icons" />
          <p className="text-center">Capture Sales</p>
        </div>
        <div className="flex flex-col items-center m-4">
          <Image src="/icons/iconno4.png" height={70} width={80} alt="Icon" className="icons" />
          <p className="text-center">Campaigns</p>
        </div>
        <div className="flex flex-col items-center m-4">
          <Image src="/icons/iconno5.png" height={70} width={80} alt="Icon" className="icons" />
          <p className="text-center">Analytics</p>
        </div>
        <div className="flex flex-col items-center m-4">
          <Image src="/icons/iconno6.png" height={70} width={80} alt="Icon" className="icons" />
          <p className="text-center">Inventory</p>
        </div>
        <div className="flex flex-col items-center m-4">
          <Image src="/icons/iconno7.png" height={70} width={80} alt="Icon" className="icons" />
          <p className="text-center">Appointment</p>
        </div>
        <div className="flex flex-col items-center m-4">
          <Image src="/icons/iconno8.png" height={70} width={80} alt="Icon" className="icons" />
          <p className="text-center">Client <br />
          Management</p>
        </div>
      </div>
    </div>
  );
};

export default MyIconsComponent;
