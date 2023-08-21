import Sub from "./Sub/subGallery";
import Fetch from "./fetchRats";

const Gallery = () => {
  return (
    <main className="min-h-screen pt-16 px-32 flex flex-col items-center gap-4">
      <h2 className="font-Berlin text-3xl text-text text-center border-b-2 border-text p-6 w-1/2">
        RAT GALLERY
      </h2>
      <Sub
        src="https://cdn.7tv.app/emote/613937fcf7977b64f644c0d2/4x.webp"
        alt="picture of the original xdd emote"
        title="basics"
        text="These are the basic rat emotes, they are the most used, having countless usecases. Appropriate for any and all situations."
      />
      <Sub
        src="https://cdn.7tv.app/emote/640f8f471db1890a6196cbc1/4x.webp"
        alt="xdd"
        title="cursed"
        text="The cursed rat emotes. These are the ones that you use when you want to make someone feel uncomfortable. Use with caution."
      />
      <Sub
        src="https://cdn.7tv.app/emote/630c398c581c4d862ef98a19/4x.webp"
        alt="xdd"
        title="sus"
        text="Susge"
      />
      <Fetch />
    </main>
  );
};

export default Gallery;
