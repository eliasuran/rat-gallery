import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import FetchRats from "./../../components/Gallery components/fetchRats";

const SubGalleryBody = () => {
  const [id, setId] = useState<string | null>(null);
  const url = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && url !== null) {
      const urlParts = url.split("/");
      if (urlParts.length >= 3) {
        const newId = urlParts[2];
        setId(newId);
      }
    }
  }, [url]);

  return (
    <main className="bg-bg min-h-screen p-16">
      <div className="text-text font-Berlin text-8xl uppercase ">
        <span className="text-lg">gallery/</span>
        <h1>{id}</h1>
      </div>
      {id && <FetchRats id={id} />}
    </main>
  );
};

export default SubGalleryBody;
