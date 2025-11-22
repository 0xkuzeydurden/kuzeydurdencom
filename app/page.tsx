import { BentoGrid } from "@/components/bento-grid";
import { ProfileSection } from "@/components/profile-section";

export default function Home() {
  return (
    <div className="pb-20">
      <ProfileSection />
      <BentoGrid />
    </div>
  );
}
