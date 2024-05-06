import React from "react";
import { Link } from "react-router-dom";
import "@mantine/core/styles.css";
import { Button } from "@mantine/core";

import { MantineProvider } from "@mantine/core";

function Header() {
  return (
    
      <div className="header">
        <ul>
          <li>
            <Link to="/">N R K</Link>
          </li>

          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/worldfootball">WORLD FOOTBALL</Link>
          </li>

          <li>
            <Link to="/wwe">WWE</Link>
          </li>

          <li>
            <Link to="/boxing">BOXING</Link>
          </li>

          <li>
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
            
          >
            Account
          </Button>
        </MantineProvider>
      </div>
    </div>
  );
}

export default Header;
