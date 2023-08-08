interface Props {
  text: string;
  onClick?: () => void;
  link: string;
  selectedStyle?: string;
}

const Items = ({ text, onClick, link, selectedStyle }: Props) => {
  return (
    <a href={link}>
      <div
        className={`hover:text-accent duration-300 cursor-pointer uppercase ${selectedStyle}`}
        onClick={onClick}
      >
        {text}
      </div>
    </a>
  );
};

export default Items;
