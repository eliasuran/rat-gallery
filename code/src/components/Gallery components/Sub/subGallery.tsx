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
    <div className="xl:h-96 md:w-3/4 w-full m-8 flex justify-around items-center rounded-md border-accent border-2 xl:flex-row flex-col xl:pt-0 pt-6 overflow-hidden">
      <Img src={src} alt={alt} />
      <div className="w-[1.5px] h-5/6 bg-accent xl:block hidden"></div>
      <Desc title={title} text={text} />
    </div>
  );
};

export default SubGallery;
