interface Props {
  src: string;
  alt: string;
}

const SubImage = ({ src, alt }: Props) => {
  return (
    <div id="sub-gallery" className="relative xl:w-96 w-1/2 h-4/5 rounded-md ">
      <img
        className="w-full h-full rounded-md border-accent border-2 relative z-30"
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default SubImage;
