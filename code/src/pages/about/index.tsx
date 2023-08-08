import Nav from "@/components/Nav";
import TopContainer from "../../components/About components/top-container";
import Team from "../../components/About components/team";

export default function About() {
  return (
    <div className="bg-bg h-screen overflow-x-hidden flex flex-col">
      <Nav />
      <TopContainer />
      <Team />
    </div>
  );
}
