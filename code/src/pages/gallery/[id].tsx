import { usePathname } from "next/navigation";

const SubGalleryBody = () => {
  const id = usePathname();
  return <main>rat name: {id}</main>;
};

export default SubGalleryBody;
