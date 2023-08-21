import Button from "../../Universal/button";

interface Props {
  title: string;
  text: string;
}

const SubDescription = ({ title, text }: Props) => {
  return (
    <div className="w-96 h-4/5 p-4 flex flex-col gap-4 text-text font-Berlin break-words">
      <h2 className="text-5xl uppercase">{title}</h2>
      <span className="text-xl">{text}</span>
      <Button text="view" link={`/gallery/${title}`} />
    </div>
  );
};

export default SubDescription;
