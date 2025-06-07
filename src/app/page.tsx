import Challenges from "@/(app)/challenges/page";
import Examples from "@/(app)/examples/page";
import Footer from "@/(app)/footer/page";
import IA from "@/(app)/ia/page";
import Importance from "@/(app)/importance/page";
import Resume from "@/(app)/resume/page";
import TopBar from "@/(app)/topbar/page";

export default function Home() {
  return (
    <div>
      <TopBar />
      <Resume />
      <Importance />
      <Challenges />
      <Examples />
      <IA />
      <Footer />
    </div>
  );
}
