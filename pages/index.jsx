import { AnimatedEnglishCard } from "../components/AnimatedEnglishCard";


export default function Home() {
  return (
    <div className="container">
      <AnimatedEnglishCard
        word="peacock" 
        pronounce="[piːkɒk]" 
        translation1="孔雀" 
        translation2="kujaku"
        bgUrl="/background_with_objects.png"
        animatedData={{
          jsonUrl: "/spine/peacock/atlas/peacock.json",
          atlasUrl: "/spine/peacock/atlas/peacock.atlas",
          animation: "animation"
        }}/>
    </div>
  );
}
