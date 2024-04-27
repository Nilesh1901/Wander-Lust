import { Button, Label, TextInput } from "flowbite-react";
import React from "react";

import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="w-full h-full flex justify-center p-5 mt-20">
      <div className="flex lg:flex-row lg:h-[400px] flex-col rounded-md gap-10 shadow-lg">
        <img
          className="sm:max-w-md lg:max-w-xl w-full object-cover rounded-md"
          src="https://img.freepik.com/free-photo/young-man-beach-by-sea-generative-ai_169016-29381.jpg?t=st=1714237598~exp=1714241198~hmac=0e4ede02cceed493d87bec77d29cfb76cd814c9a0463e381ba4a5b59eaf26210&w=1380"
          alt=""
        />
        <div className="md:w-[410px] mx-auto flex-2 w-full p-5">
          <h2 className="text-center font-semibold text-2xl mb-5">Sign-Up</h2>
          <form action="">
            <div className="mb-2">
              <Label htmlFor="username" className="font-semibold">
                Username:
              </Label>
              <TextInput
                required
                placeholder="@username"
                id="username"
                type="text"
                className="mt-1"
              ></TextInput>
            </div>
            <div>
              <Label htmlFor="password" className="font-semibold">
                Password:
              </Label>
              <TextInput
                placeholder="*******"
                id="password"
                type="password"
                className="mt-1"
                required
              ></TextInput>
            </div>
            <Button
              type="submit"
              className="w-full my-5 bg-gradient-to-r from-rose-400 to-orange-300 font-semibold"
            >
              Sign-Up
            </Button>
          </form>

          <p className="text-xs sm:text-sm ">
            Have an account?
            <Link to={"/sign-in"}>
              <span className="text-blue-500 ml-1 cursor-pointer">Sign-In</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
