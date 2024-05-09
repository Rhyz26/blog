import React from "react";
import { Link } from "react-router-dom";
import "@mantine/core/styles.css";
import { Button } from "@mantine/core";
import { MantineProvider } from "@mantine/core";

function Header() {
  return (
    <div className="header">
      <ul>
        <li className="text-black bg-white font-extrabold h-7">
          <Link to="/">N R K</Link>
        </li>

        <li className="text-gray-300 font-extrabold hover:border-b-4 hover:text-white">
          <Link to="/">Home</Link>
        </li>

        <li className="text-gray-300 font-extrabold hover:border-b-4 hover:text-white">
          <Link to="/about">About</Link>
        </li>

        <li className="text-gray-300 font-extrabold hover:border-b-4 hover:text-white">
          <Link to="/worldfootball">WORLD FOOTBALL</Link>
        </li>

        <li className="text-gray-300 font-extrabold hover:border-b-4 hover:text-white">
          <Link to="/wwe">WWE</Link>
        </li>

        <li className="text-gray-300 font-extrabold hover:border-b-4 hover:text-white">
          <Link to="/boxing">BOXING</Link>
        </li>

        <li className="text-gray-300 font-extrabold hover:border-b-4 hover:text-white">
          <Link to="/scores">SCORES</Link>
        </li>
      </ul>

      <div className="button">
        <MantineProvider>
          <Button
            variant="filled"
            color="rgba(8, 255, 61, 1)"
            size="sm"
            radius="xl"
            className="text-black"
          >
            Account
          </Button>
        </MantineProvider>
      </div>
    </div>
  );
}

export default Header;
