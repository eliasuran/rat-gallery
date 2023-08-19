import Nav from "@/components/Nav";
import Header from "@/components/Gallery components/header";
import GalleryBody from "@/components/Gallery components/gallery";
import Footer from "@/components/Footer";

export default function Gallery() {
  return (
    <main className="bg-bg overflow-hidden flex flex-col">
      <Nav />
      <Header />
      <GalleryBody />
      <Footer />
    </main>
  );
}
