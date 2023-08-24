import Sub from "./Sub/subGallery";

const Gallery = () => {
  return (
    <main className="min-h-screen pt-16 sm:px-32 xs:px-24 px-12 flex flex-col items-center gap-4">
      <h2 className="font-Berlin text-3xl text-text text-center border-b-2 border-text p-6 sm:w-1/2 xs:w-full w-72">
        RAT GALLERY
      </h2>
      <Sub
        src="https://cdn.7tv.app/emote/613937fcf7977b64f644c0d2/4x.webp"
        alt="picture of the original xdd emote"
        title="basics"
        text="These are the basic rat emotes, they are the most used, having countless usecases. Appropriate for any and all situations."
      />
      <Sub
        src="https://cdn.7tv.app/emote/62faeb630ece072bb90feb21/4x.webp"
        alt="picture of an xdd blushing uwu"
        title="cute"
        text="The cutest among the rats. Appropriate for cute situations. Use with caution, as they are very powerful."
      />
      <Sub
        src="https://cdn.7tv.app/emote/640f8f471db1890a6196cbc1/4x.webp"
        alt="cursed xdd"
        title="cursed"
        text="The cursed rat emotes. These are the ones that you use when you want to make someone feel uncomfortable. Use with caution."
      />
      <Sub
        src="https://cdn.7tv.app/emote/630c398c581c4d862ef98a19/4x.webp"
        alt="xdd jerking off"
        title="sus"
        text="Susge"
      />
      <Sub
        src="https://cdn.7tv.app/emote/633489007500557623297eb7/4x.webp"
        alt="pro player FAKER as a rat"
        title="players"
        text="Pro players that are rats."
      />
    </main>
  );
};

export default Gallery;
