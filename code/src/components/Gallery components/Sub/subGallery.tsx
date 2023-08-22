import Img from "./subImage";
import Desc from "./subDescription";

interface Props {
  src: string;
  alt: string;
  title: string;
  text: string;
}

const SubGallery = ({ src, alt, title, text }: Props) => {
  return (
    <div className="h-96 w-3/4 m-8 flex justify-around items-center rounded-md border-accent border-2">
      <Img src={src} alt={alt} />
      <div className="w-[1.5px] h-5/6 bg-accent"></div>
      <Desc title={title} text={text} />
    </div>
  );
};

export default SubGallery;
