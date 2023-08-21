import HomeSection from "@/components/Home";
import WelcomeSection from "@/components/Welcome";

export default function Home() {
  return (
    <div className="overflow-hidden flex flex-col">
      <HomeSection />
      <WelcomeSection />
    </div>
  );
}
