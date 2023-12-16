"use client";
import Image from "next/image";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { Typography, IconButton, Button } from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();
export function Footer() {
  return (
    <footer className="mt-10 bg-gray-900 px-8 pt-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:justify-between">
          <div className="text-center md:text-left">
            <Typography
              placeholder=""
              as="a"
              href=""
              target="_blank"
              variant="h5"
              color="white"
              className="mb-4 flex"
            >
            <Image
                 width={256}
                 height={256}
                 src="/logos/logo.png"
                 className="mr-2 h-6 w-6"
                 alt="ios"
          />
              TapGro
            </Typography>
            <Typography placeholder="" color="white" className="mb-12 font-normal">
              SAAS for beauty Industry
            </Typography>
            <ul className="flex flex-wrap items-center justify-center md:justify-start">
                  <li><a className="text-white mr-2" href="#"> Home</a></li>
                  <li><a className="text-white mr-2" href="#Features"> Features</a></li>
                  <li><a className="text-white mr-2" href="#FAQ"> FAQ</a></li>
                  <li><a className="text-white mr-2" href="#contact"> Contact Us</a></li>
            </ul>
          </div>
          <div className="mt-8 w-full md:mt-0 md:w-auto">
            <Typography placeholder="" variant="h6" color="white" className="mb-3">
              Coming Soon
            </Typography>
            <div className="flex flex-col gap-2">
              <Button
              placeholder=""
                color="white"
                className="flex items-center justify-center"
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-apple.png"
                  className="-mt-0.5 mr-2 h-6 w-6"
                  alt="ios"
                />
                App Store
              </Button>
              <Button
              placeholder=""
                color="white"
                className="flex items-center justify-center"
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-google.png"
                  className="-mt-0.5 mr-2 h-6 w-6"
                  alt="ios"
                />
                Google Play
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center border-t border-gray-700 justify-between">
          <Typography
          placeholder=""
            color="white"
            className="text-center font-normal opacity-75"
          >
            &copy; {CURRENT_YEAR} TapGro Technologies. All rights reserved
          </Typography>
          <div className="flex items-center">
            <a href="https://twitter.com/tapgroofficial">
            <IconButton placeholder="" variant="text" className="hover:text-orange-500" color="white">
              <i className="fa-brands fa-twitter text-2xl not-italic opacity-75"></i>
            </IconButton>
            </a>
            <a href="https://www.instagram.com/tapgroofficial/">
            <IconButton placeholder="" variant="text" className="hover:text-orange-500" color="white">
              <i className="fa-brands fa-instagram text-2xl not-italic opacity-75"></i>
            </IconButton>
            </a>
            <a href="https://www.facebook.com/tapgroofficial/">
            <IconButton placeholder="" variant="text"className="hover:text-orange-500" color="white">
              <i className="fa-brands fa-facebook text-2xl not-italic opacity-75"></i>
            </IconButton>
            </a>
            <a href="https://www.snapchat.com/add/tapgroofficial">
            <IconButton placeholder="" variant="text"className="hover:text-orange-500" color="white">
              <i className="fa-brands fa-snapchat text-2xl not-italic opacity-75"></i>
            </IconButton>
            </a>
            <a href="https://www.linkedin.com/company/tapgro">
            <IconButton placeholder="" variant="text"className="hover:text-orange-500" color="white">
              <i className="fa-brands fa-linkedin text-2xl not-italic opacity-75"></i>
            </IconButton>
            </a>
            <a href="https://www.youtube.com/@tapgroofficial">
            <IconButton placeholder="" variant="text"className="hover:text-orange-500" color="white">
              <i className="fa-brands fa-youtube text-2xl not-italic opacity-75"></i>
            </IconButton>
            </a>
          </div>
            <FloatingWhatsApp phoneNumber={"8287244305"} accountName={"TapGro Team"} avatar={"/favicon.png"}/>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
