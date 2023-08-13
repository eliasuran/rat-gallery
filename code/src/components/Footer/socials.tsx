import React, { FC } from "react";
import Link from "next/link";

interface SocialsProps extends React.HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  link: string;
}

const Socials: FC<SocialsProps> = ({ link, ...props }) => {
  return (
    <Link href={link} target="_blank">
      <img {...props} className="w-full" />
    </Link>
  );
};

export default Socials;
