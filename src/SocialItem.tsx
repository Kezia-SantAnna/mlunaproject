import type { JSX } from "react";

interface SocialItemProps {
  icon: JSX.Element;
  link: string;
}

function SocialItem({ link, icon }: SocialItemProps) {
  return (
    <a className="social-item" href={link} target="_blank">
      {icon}
    </a>
  );
}

export default SocialItem;
