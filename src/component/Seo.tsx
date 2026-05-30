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
  const imageUrl = `${data.siteConfig.metaUrl}/${cardImagePath}`;
  const pageTitle = `${data.siteConfig.realName} | ${data.siteConfig.role}`;
  const keywords = [
    data.siteConfig.realName,
    data.siteConfig.role,
    "Software Engineer Portfolio",
    "Java Developer",
    "Spring Boot",
    "Hibernate",
    "Backend Engineer",
    "Clean Code",
    "Design Patterns",
    "Online CV",
    "Resume",
  ].join(", ");

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: data.siteConfig.realName,
    url: data.siteConfig.metaUrl,
    image: imageUrl,
    jobTitle: data.siteConfig.role,
    description: data.siteConfig.description,
    sameAs: data.contacts.map((c) => c.url),
    knowsAbout: [
      "Java",
      "Spring Boot",
      "Hibernate",
      "SQL",
      "Object-Oriented Programming",
      "Design Patterns",
      "Clean Architecture",
      "Unit Testing",
      "TypeScript",
    ],
  };

  return (
    <>
      <html lang={data.lang} />
      <title>{pageTitle}</title>
      <meta name="description" content={data.siteConfig.description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={data.siteConfig.realName} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="theme-color" content="#34495E" />
      <link rel="canonical" href={data.siteConfig.metaUrl} />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={data.siteConfig.description} />
      <meta property="og:type" content="profile" />
      <meta property="og:site_name" content={data.siteConfig.realName} />
      <meta property="og:url" content={data.siteConfig.metaUrl} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:secure_url" content={imageUrl} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="338" />
      <meta property="og:image:height" content="463" />
      <meta property="og:image:alt" content={`${data.siteConfig.realName} - ${data.siteConfig.role}`} />
      <meta property="profile:first_name" content="Ferry" />
      <meta property="profile:last_name" content="Suhandri" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={data.siteConfig.realName} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={data.siteConfig.description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={`${data.siteConfig.realName} - ${data.siteConfig.role}`} />

      <meta property="fb:app_id" content="708906762920155" />
      <meta name="google-site-verification" content="_vePp137T-7MmSzfDlV3zAbJB7941sgDpPP-Z7I5-RY" />

      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </>
  );
}
