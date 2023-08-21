import Header from "@/components/Gallery components/header";
import GalleryBody from "@/components/Gallery components/gallery";

export default function Gallery() {
  return (
    <main className="bg-bg overflow-hidden flex flex-col">
      <Header />
      <GalleryBody />
    </main>
  );
}
