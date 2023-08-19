import Sub from "./Sub components/subGallery";

const Gallery = () => {
  return (
    <main className="min-h-screen pt-16 px-32 flex flex-col items-center gap-4">
      <h2 className="font-Berlin text-3xl text-text text-center border-b-2 border-text p-6 w-1/2">
        RAT GALLERY
      </h2>
      <Sub
        src="https://cdn.7tv.app/emote/613937fcf7977b64f644c0d2/4x.webp"
        alt="xdd"
        title="basics"
        text="These are the basic rat emotes, they are the most used, having countless usecases. Appropriate for any and all situations."
      />
    </main>
  );
};

export default Gallery;
