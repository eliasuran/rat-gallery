interface Props {
  text: string;
  onClick: () => void;
}

const Items = ({ text, onClick }: Props) => {
  return (
    <div
      className="hover:text-accent duration-300 cursor-pointer"
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default Items;
