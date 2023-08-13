import Link from "next/link";

interface Props {
  text: string;
  onClick?: () => void;
  link: string;
  selectedStyle?: string;
}

const Items = ({ text, onClick, link, selectedStyle }: Props) => {
  return (
    <Link href={link}>
      <div
        className={`hover:text-accent duration-300 cursor-pointer uppercase ${selectedStyle}`}
        onClick={onClick}
      >
        {text}
      </div>
    </Link>
  );
};

export default Items;
