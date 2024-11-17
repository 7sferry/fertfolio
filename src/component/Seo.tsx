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
  const cardImagePath = `ferry-suhandri-large2.png`;
  return (
    <>
      <html lang={data.lang} />
      <title>{data.siteConfig.realName}</title>
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
      <meta name="google-site-verification" content={`6RziIE_ZhYMRcSOJtYpoYAYsnqTn0nUbLZS3nXgC2Hw`} />
    </>
  );
}
