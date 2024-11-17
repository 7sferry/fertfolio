/************************
 * Made by [MR Ferry™]  *
 * on November 2024     *
 ************************/

import React from "react";
import { data } from "../../Data";

const Header = () => {
  return (
    <header>
      <h1>{data.siteConfig.realName}</h1>
      <p>
        {data.siteConfig.role}
        <br />
        {data.siteConfig.tagline}
      </p>
    </header>
  );
};

export default Header;
