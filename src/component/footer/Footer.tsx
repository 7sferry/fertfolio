/************************
 * Made by [MR Ferry™]  *
 * on November 2024     *
 ************************/

import React from "react";
import { data } from "../../Data";

const Footer = () => {
  return (
    <footer>
      <p>
        &copy; 2026 {data.siteConfig.realName} | {data.footer.text}
      </p>
    </footer>
  );
};

export default Footer;
