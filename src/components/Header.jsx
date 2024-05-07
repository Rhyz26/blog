import React from "react";
import { Link } from "react-router-dom";
import "@mantine/core/styles.css";
import { Button } from "@mantine/core";
import { useState } from 'react';
import { MantineProvider } from "@mantine/core";



function Header() {




  return (
    
      <div className="header">
        <ul>
          <li className="text-black bg-white font-extrabold h-7">
            <Link to="/">N R K</Link>
          </li>

         



  
  





          <li className="text-white font-extrabold">
            <Link to="/">Home</Link>
          </li>

          <li className="text-white font-extrabold">
            <Link to="/about">About</Link>
          </li>

          <li className="text-white font-extrabold">
            <Link to="/worldfootball">WORLD FOOTBALL</Link>
          </li>

          <li className="text-white font-extrabold">
            <Link to="/wwe">WWE</Link>
          </li>

          <li className="text-white font-extrabold">
            <Link to="/boxing">BOXING</Link>
          </li>

          <li className="text-white font-extrabold">
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
