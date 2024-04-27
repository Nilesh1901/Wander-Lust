import React from "react";
import { Avatar, Button, Dropdown, Modal, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import appIcon from "../assets/app-icon.png";
import { IoSunny, IoMoonSharp } from "react-icons/io5";

const Header = () => {
  const currentUser = false;
  const theme = "light";
  return (
    <Navbar className=" shadow-sm py-4">
      <Navbar.Brand href="/" className=" text-2xl font-bold font-[syne]">
        <img src={appIcon} className="w-8 mr-2" />
        Wander Lust
      </Navbar.Brand>
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search your Stay..."
          className=" shadow-sm outline-none border-none rounded-full hover:bg-slate-50"
        />
        <Button pill color={"gray"} size={"md"} className="px-4 shadow-sm">
          filter
        </Button>
      </div>
      <div className="flex md:order-2 gap-4">
        <Button pill color={"gray"} size="sm" className="pt-1">
          {theme === "light" ? (
            <IoMoonSharp className="text-base" />
          ) : (
            <IoSunny className="text-base" />
          )}
        </Button>
        {!currentUser ? (
          <Link to={"/sign-in"}>
            <Button pill outline color={"failure"}>
              Sign-In
            </Button>
          </Link>
        ) : (
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt="User settings" img="" rounded />}
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Link to={"/profile"}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        )}
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
};

export default Header;
