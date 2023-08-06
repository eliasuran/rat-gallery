interface Props {
  text: string;
  onClick?: () => void;
  link?: string;
}

const Items = ({ text, onClick, link }: Props) => {
  return (
    <a href={link}>
      <div
        className="hover:text-accent duration-300 cursor-pointer uppercase"
        onClick={onClick}
      >
        {text}
      </div>
    </a>
  );
};

export default Items;
