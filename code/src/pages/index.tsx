import Header from "@/components/header";
import Button from "@/components/button";

export default function Home() {
  return (
    <main className="h-screen overflow-hidden bg-bg flex flex-col justify-center items-center">
      <div className="w-96 h-full flex flex-col justify-center items-center gap-12 text-center">
        <Header text="Rat Gallery" />
        <Button text="Head to the gallery" link="/gallery" />
      </div>
    </main>
  );
}
