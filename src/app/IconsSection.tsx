// MyIconsComponent.tsx
import React from 'react';
import './globals.css';
import Image from 'next/image';

const MyIconsComponent: React.FC = () => {
  return (
    <div className="container mx-auto">
      <h2 className='text-center font-bold text-4xl mt-5 tracking-tight' style={{ marginBottom: '6rem' }}>
        All in One App for all your Everyday Business Needs and Growth where not only we provide you
      </h2>
      <div className="icons-container">
        <Image src="/icons/analytics.png" height={70} width={80} alt="Icon" className="icons" />
        <Image src="/icons/appointment.png" height={70} width={80} alt="Icon" className="icons" />
        <Image src="/icons/calen.png" height={70} width={80} alt="Icon" className="icons" />
        <Image src="/icons/campaigns.png" height={70} width={80} alt="Icon" className="icons" />
        <Image src="/icons/capturesales.png" height={70} width={80} alt="Icon" className="icons" />
        <Image src="/icons/staffmanagements.png" height={70} width={80} alt="Icon" className="icons" />
        <Image src="/icons/clientmanagement.png" height={70} width={80} alt="Icon" className="icons" />
        <Image src="/icons/inventory.png" height={70} width={80} alt="Icon" className="icons" />
      </div>
    </div>
  );
};

export default MyIconsComponent;
