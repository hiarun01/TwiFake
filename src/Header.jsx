import React from "react";
import {NavLink, useLocation} from "react-router-dom";
import {Button} from "./components/ui/button";

const Header = () => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <header className="bg-white text-black py-4 px-5 lg:px-30 flex justify-between items-center shadow-2xs">
      <NavLink to="/" className="flex items-center gap-2">
        <span className="text-2xl font-extrabold font-mono tracking-tight">
          TwiFake
        </span>
      </NavLink>
      {!isDashboard ? (
        <NavLink to="/dashboard">
          <Button
            variant="outline"
            className="px-2 py-2 rounded-md font-semibold "
          >
            ⚡ Start Creating
          </Button>
        </NavLink>
      ) : (
        <p>Hi, stranger </p>
      )}
    </header>
  );
};

export default Header;
