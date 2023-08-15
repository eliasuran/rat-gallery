import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  text: string;
  link: string;
}

const Items = ({ text, link }: Props) => {
  const activePage = usePathname();

  let selectedColor = "";
  if (activePage === link) {
    selectedColor = "border-b-2";
  }
  return (
    <Link href={link}>
      <div
        className={`hover:text-accent duration-300 cursor-pointer uppercase border-accent ${selectedColor}`}
      >
        {text}
      </div>
    </Link>
  );
};

export default Items;
