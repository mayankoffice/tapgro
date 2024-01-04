"use client";

import axios from "axios";
import { useState } from "react";

export function Contact() {
  const [name, setName]=useState('');
  const [phone, setPhone]=useState('');
  const [location, setLocation]=useState('');
  const [company, setCompany]=useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      phone: phone,
      location:location,
      company:company
    };

    axios.post('https://sheet.best/api/sheets/b304d009-864c-4663-a063-34c7978bc5e7', data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error('Error sending data:', error);
      });
  };

  return (
 
    <div className="place-items-center">
      <h2
        id="contact"
        className="font-bold text-3xl mt-5 tracking-tight text-center"
      >
        Complete this Form to get a Free Early Access of TapGro.
              </h2>
      <div className="mt-15 container mx-auto grid h-full w-full grid-cols-1 lg:mt-7 lg:grid-cols-2">
        <div className="col-span-1">
          <form onSubmit={handleSubmit} className="max-w-lg rounded-lg shadow-xl p-3 mx-auto" name="submit-to-google-sheet">
            <div className="relative z-0 w-full mb-5 group">
            <input
                type="text"
                onChange={(e)=>setName(e.target.value)}
                value={name}
                name="name"
                id="phone"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label
              htmlFor="name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="tel"
                onChange={(e)=>setPhone(e.target.value)}
                value={phone}
                name="phone"
                id="phone"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label
              htmlFor="phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="location"
                onChange={(e)=>setLocation(e.target.value)}
                value={location}
                id="location"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="loaction"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Location
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <select
                id="company"
                onChange={(e)=>setCompany(e.target.value)}
                value={company}
                name="company"
                className="block text-gray-500 dark:text-gray-400 py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer text-gray-500 dark:text-gray-400"
              >
                <option value="Select Business Categories:">
                  Select Business Categories:
                </option>
                <option value="Beauty Parlour">Beauty Parlour</option>
                <option value="Salon Services">Salon Services</option>
                <option value="SPA Services">SPA Services</option>
                <option value="Nail Studio">Nail Studio</option>
                <option value="Tatto & Piercing Studio">
                  Tatto & Piercing Studio
                </option>
              </select>
            </div>
            <button
              type="submit"
              className="text-white ml-2 bg-orange-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
            
          </form>
          
        </div>
        <div>
          <iframe
            className="mx-auto shadow-xl m-5"
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.067157807754!2d77.22800219999999!3d28.567745999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c093c824ef%3A0x1702277fda6152ad!2sTapGro!5e0!3m2!1sen!2sin!4v1702466049513!5m2!1sen!2sin"
            width="300"
            height="280"
            loading="lazy"
            style={{ borderRadius: "10px" }}
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
