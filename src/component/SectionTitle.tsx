/************************
 * Made by [MR Ferry™]  *
 * on Oktober 2026      *
 ************************/

import React from "react";

type SectionTitleProps = {
  id: string;
  className?: string;
  children: React.ReactNode;
};

const SectionTitle = ({ id, className, children }: SectionTitleProps) => {
  return (
    <h2 className={className}>
      <a href={`#${id}`} className="section-anchor">
        {children}
      </a>
    </h2>
  );
};

export default SectionTitle;
