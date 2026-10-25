/************************
 * Made by [MR Ferry™]  *
 * on Oktober 2026      *
 ************************/

/************************
 * Made by [MR Ferry™]  *
 * on October 2026      *
 ************************/

import React from "react";
import type { GatsbySSR } from "gatsby";
import { THEME_STORAGE_KEY } from "./src/component/DarkModeToggle";

export const onRenderBody: GatsbySSR["onRenderBody"] = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="theme-init"
      dangerouslySetInnerHTML={{
        __html: `try{if(localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)})==="dark")document.documentElement.dataset.theme="dark"}catch(e){}`,
      }}
    />,
  ]);
};
