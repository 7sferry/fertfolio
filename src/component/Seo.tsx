/************************
 * Made by [MR Ferry™]  *
 * on November 2024     *
 ************************/

import React from "react";
import { data } from "../Data";

/************************
 * Made by [MR Ferry™]  *
 * on November 2024     *
 ************************/

export default function Seo() {
  const cardImagePath = `ferry-suhandri-large2.jpg`;
  return (
    <>
      <html lang={data.lang} />
      <title>{data.siteConfig.realName}</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"anonymous"} />
      <link
        href="https://fonts.googleapis.com/css2?family=PT+Sans+Caption:wght@400;700&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
      />
      <meta name="description" content={data.siteConfig.description} />
      <meta name="og:title" content={data.siteConfig.realName} />
      <meta name="og:description" content={data.siteConfig.description} />
      <meta name="og:type" content={`website`} />
      <meta name="og:site_name" content={data.siteConfig.realName} />
      <meta name="og:url" content={data.siteConfig.metaUrl} />
      <meta name="og:image" content={`${data.siteConfig.metaUrl}/${cardImagePath}`} />
      <meta name="og:image:type" content={`image/jpeg`} />
      <meta name="og:image:width" content={`338`} />
      <meta name="og:image:height" content={`463`} />
      <meta name="twitter:card" content={`summary`} />
      <meta name="twitter:creator" content={data.siteConfig.realName} />
      <meta name="twitter:title" content={data.siteConfig.realName} />
      <meta name="twitter:image" content={`${data.siteConfig.metaUrl}/${cardImagePath}`} />
      <meta name="twitter:description" content={data.siteConfig.description} />
      <meta name="fb:app_id" content={`708906762920155`} />
      <meta name="google-site-verification" content={`_vePp137T-7MmSzfDlV3zAbJB7941sgDpPP-Z7I5-RY`} />
    </>
  );
}
