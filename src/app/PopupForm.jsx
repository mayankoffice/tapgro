import React, { useState, useEffect } from "react";

const PopupForm = ({ onClose }) => {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    company: "Select Business Categories:",
  });
  
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = async () => {
    // API integration
    try {
      let formdata = new FormData();
      formdata.append("name", name);
      formdata.append("phone", phone);
      formdata.append("location", location);
      formdata.append("company", company);
      console.log("formdata ::::::", formdata);

      const response = await fetch(
        "http://dev.tapgro.com/api/V1/storeContact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formdata),
        }
      );
      console.log("response ::::::", response);
      if (response.ok) {
        // Handle success, e.g., show a success message or redirect
        alert("Form submitted successfully");
      } else {
        // Handle errors, e.g., show an error message
        console.error("Form submission failed");
      }
    } catch (error) {
      alert("Error during form submission:", error);
    }
  };



  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div className="popup">
      <div
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        <form className="max-w-lg rounded-lg shadow-xl p-3 mx-auto">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="name"
                id="name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                onChange={(e) => setName(e.target.value)}
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
                name="phone"
                id="phone"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <label
                htmlFor="tel"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="loaction"
                id="loaction"
                onChange={(e) => setLocation(e.target.value)}
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
                onChange={(e) => setCompany(e.target.value)}
                id="company"
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
              onClick={handleSubmit}
              className="text-white ml-2 bg-orange-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
      </div>
    </div>
  );
};

export default PopupForm;
