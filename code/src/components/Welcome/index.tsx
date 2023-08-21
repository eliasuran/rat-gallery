import Button from "@/components/Universal/button";

export default function Welcome() {
  return (
    <section
      id="welcome"
      className="min-h-screen bg-xdd bg-local bg-cover z-10 overflow-hidden"
    >
      <div className="absolute h-full w-screen bg-[#110915ec] -z-20"></div>
      <div className="z-10 xl:m-36 lg:m-12 m-12 flex xxl:flex-row xl:flex-row lg:flex-col flex-col xl:gap-0 gap-6">
        <div className="text-text xl:w-1/2 xs:w-2/3 w-full flex flex-col gap-12">
          <h1
            id="shadow"
            className="md:text-8xl xs:text-7xl text-5xl font-Berlin"
          >
            Introduction
          </h1>
          <span className="font-Barlow-Bold text-lg xl:w-1/2 w-full">
            Welcome to the Rat Gallery: a unique and captivating destination
            that offers an unconventional yet enchanting experience for all who
            step through its doors. Discover all the wonders that the Rat has to
            offer, and maybe you will learn something new about our small fuzzy
            friends. xdd we rise
          </span>
          <Button text="view gallery" link="/gallery" />
        </div>
        <div id="welcome-seperator" className="w-1 relative"></div>
        <div className="lg:w-1/2 w-full flex lg:justify-center justify-start items-center">
          <div id="rat-examples" className="w-96 h-64 z-50">
            <img
              className="w-full h-full border-2 rounded-md border-accent relative z-10"
              src={"/img/xdd.png"}
              alt="rat"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
