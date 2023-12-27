import React from "react";
import Image from "next/image";
import Head from "next/head";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography

      placeholder=""
        as="a"
        href={href || "#"}
        variant="small"
        className="font-medium"
      >
        {children}
      </Typography>
    </li>
  );
}
export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div>    <Head>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
      integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
      crossOrigin="anonymous"
      referrerPolicy="no-referrer"
    />

    <meta
      name="title"
      content="India's No.1 Software for Beauty Business - Tapgro"
    />
    <meta
      name="description"
      content="Boost sales, manage staff, and streamline operations with TapGro's salon software. Grow your business with Tapgro today"
    />
    <meta
      name="keywords"
      content="tapgro, tapgroofficial, what is tapgro, is tapgro good, tapgro linked in, tapgro location, tapgro instagram, tapgro app, tapgro software , tapgro tool, tapgro website"
    />
    <meta name="robots" content="index, follow" />
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="language" content="English" />
    <meta name="revisit-after" content="1 days" />
    <meta
      property="og:title"
      content="Simplify management, supercharge marketing with tapgro"
    />
    <meta property="og:site_name" content="TapGro" />
    <meta property="og:url" content="https://www.tapgro.com/" />
    <meta
      property="og:description"
      content="Your key to boosting sales managing staff, and thriving in your industry"
    />
    <meta property="og:type" content="website" />
    <meta
      property="og:image"
      content="https://tapgro.com/_next/image?url=%2Flogos%2Flogo.png&w=640&q=75"
    />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@Tapgro" />
    <meta
      name="twitter:title"
      content="Simplify Management, Supercharge Marketing with TapGro"
    />
    <meta
      name="twitter:description"
      content="Your key to boosting sales, managing staff, and thriving in your industry"
    />
    <meta
      name="twitter:image"
      content="https://tapgro.com/_next/image?url=%2Flogos%2Flogo.png&w=640&q=75"
    />

    <link rel="shortcut icon" href="/favicon.png" type="image/png" />
  </Head>
    </div>
    <MTNavbar
    placeholder=""
      fullWidth
      shadow={true}
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-3 left-0 right-0 mx-auto max-w-screen-2xl z-50 border-0 rounded-xl"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography
        placeholder=""
          as="a"
          href=""
          variant="h5"
          className="flex pl-2"
          color={isScrolling ? "black" : "white"}
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
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${isScrolling ? "text-gray-900" : "text-white"
            }`}
        >
          <NavItem href="#">Home</NavItem>
          <NavItem href="#Features">Features</NavItem>
          <NavItem href="#FAQ">FAQ</NavItem>
          <NavItem href="#contact">Contact Us</NavItem>
        </ul>
        <div className="hidden gap-2 lg:flex lg:items-center">
          <a href="https://twitter.com/tapgroofficial" className="hover:translate-y-1" target="_blank">
            <IconButton
              placeholder=""
              variant="text"
              color={isScrolling ? "blue" : "white"}
              size="sm"
            >
              <i className="fa-brands fa-twitter text-base"></i>
            </IconButton>
          </a>
          <a href="https://www.instagram.com/tapgroofficial/" className="hover:translate-y-1" target="_blank">
            <IconButton
              placeholder=""
              variant="text"
              color={isScrolling ? "red" : "white"}
              size="sm"
            >
              <i className="fa-brands fa-instagram  text-base" />
            </IconButton>
          </a>
          <a href="https://www.facebook.com/tapgroofficial/" className="hover:translate-y-1" target="_blank">
            <IconButton
            placeholder=""
              variant="text"
              color={isScrolling ? "blue" : "white"}
              size="sm"
            >
              <i className="fa-brands fa-facebook text-base" />
            </IconButton>
          </a>
          <a href="https://www.snapchat.com/add/tapgroofficial" className="hover:translate-y-1" target="_blank">
            <IconButton
            placeholder=""
              variant="text"
              color={isScrolling ? "yellow" : "white"}
              size="sm"
            >
              <i className="fa-brands fa-snapchat text-base" />
            </IconButton>
          </a>
          <a href="https://www.linkedin.com/company/tapgro" className="hover:translate-y-1" target="_blank">
            <IconButton
            placeholder=""
              variant="text"
              color={isScrolling ? "blue" : "white"}
              size="sm"
            >
              <i className="fa-brands fa-linkedin text-base" />
            </IconButton>
          </a>
          <a href="https://www.youtube.com/@tapgroofficial" className="hover:translate-y-1" target="_blank">
            <IconButton
            placeholder=""
              variant="text"
              color={isScrolling ? "red" : "white"}
              size="sm"
            >
              <i className="fa-brands fa-youtube text-base" />
            </IconButton>
          </a>
          <a href="#contact">
            <Button placeholder="" className="hover:translate-y-1" color={isScrolling ? "orange" : "orange"} size="sm">
              Contact Now
            </Button>
          </a>
        </div>
        <IconButton
        placeholder=""
          variant="text"
          color={isScrolling ? "gray" : "white"}
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg border-t border-blue-gray-50 bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-black">
            <NavItem href="#">Home</NavItem>
            <NavItem href="#Features">Features</NavItem>
            <NavItem href="#FAQ">FAQ</NavItem>
            <NavItem href="#contact">Contact Us</NavItem>
          </ul>
          <div className="mt-4 flex items-center gap-2">
            <a href="https://twitter.com/tapgroofficial" target="_blank">
              <IconButton placeholder="" variant="text" color="gray" size="sm">
                <i className="fa-brands fa-twitter text-base" />
              </IconButton>
            </a>
            <a href="https://www.facebook.com/tapgroofficial/">
              <IconButton placeholder="" variant="text" color="gray" size="sm">
                <i className="fa-brands fa-facebook text-base" />
              </IconButton>
            </a>
            <a href="https://www.instagram.com/tapgroofficial/">
              <IconButton placeholder="" variant="text" color="gray" size="sm">
                <i className="fa-brands fa-instagram text-base" />
              </IconButton>
            </a>
            <a href="https://www.linkedin.com/company/tapgro">
              <IconButton placeholder="" variant="text" color="gray" size="sm">
                <i className="fa-brands fa-linkedin text-base" />
              </IconButton>
            </a>
            <a href="https://www.instagram.com/tapgroofficial/">
              <IconButton placeholder="" variant="text" color="gray" size="sm">
                <i className="fa-brands fa-youtube text-base" />
              </IconButton>
            </a>
            <a href="" target="_blank">
              <Button placeholder="" color="gray" size="sm" className="ml-auto">
                Contact
              </Button>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
    </div>
  );
}

export default Navbar;
