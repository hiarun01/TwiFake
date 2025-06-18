import React from "react";

import {Button} from "./components/ui/button";
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <header className="max-w-7xl mx-auto bg-white text-black py-4 px-5  flex justify-between items-center shadow-2xs">
      <NavLink to="/" className="flex items-center gap-2">
        <span className="text-2xl font-bold ">TwiFake</span>
      </NavLink>

      <NavLink to="/dashboard">
        <Button
          variant="outline"
          className=" text-black px-4 py-5 rounded-lg font-semibold transition"
        >
          ⚡ Start Creating
        </Button>
      </NavLink>
    </header>
  );
};

export default Header;
