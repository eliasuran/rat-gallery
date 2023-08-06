import Nav from "@/components/Nav";
import TopContainer from "../../components/about/top-container";
import Team from "../../components/about/team";

export default function About() {
  return (
    <div className="bg-bg h-screen overflow-hidden flex flex-col">
      <Nav />
      <TopContainer />
      <Team />
    </div>
  );
}
