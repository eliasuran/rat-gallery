import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  text: string;
  link: string;
  setDropdown?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Items = ({ text, link, setDropdown }: Props) => {
  const activePage = usePathname();

  let selectedColor = "";
  if (activePage === link) {
    selectedColor = "border-b-2";
  }
  return (
    <Link href={link}>
      <div
        onClick={() => setDropdown && setDropdown(false)}
        className={`hover:text-accent duration-300 cursor-pointer uppercase border-accent ${selectedColor}`}
      >
        {text}
      </div>
    </Link>
  );
};

export default Items;
