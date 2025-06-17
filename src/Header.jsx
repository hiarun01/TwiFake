import React from "react";

import {Button} from "./components/ui/button";
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white text-black py-4 px-5 lg:px-30 flex justify-between items-center shadow-2xs">
      <NavLink to="/" className="flex items-center gap-2">
        <span className="text-2xl font-extrabold font-mono tracking-tight">
          TwiFake
        </span>
      </NavLink>

      <NavLink to="/dashboard">
        <Button
          variant="outline"
          className=" text-black px-6 py-5 rounded-lg font-semibold transition"
        >
          ⚡ Start Creating
        </Button>
      </NavLink>
    </header>
  );
};

export default Header;
