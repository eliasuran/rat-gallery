import React, { FC } from "react";

interface SocialsProps extends React.HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  link: string;
}

const Socials: FC<SocialsProps> = ({ link, ...props }) => {
  return (
    <a href={link} target="_blank">
      <img {...props} className="w-full" />
    </a>
  );
};

export default Socials;
