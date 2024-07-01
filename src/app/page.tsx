import Hero from "@/components/Hero";
import Header from "@/components/Header/main";

export default function Home() {
  return (
    <>
      <Header startColor={1} menuVisible={true} bg={true}/>
      <div className="relative overflow-hidden">
        <div className="block p-0">
          <div className="relative my-0 mx-auto overflow-hidden p-0">
            <Hero />
          </div>
        </div>
      </div>
      
    </>
  );
}
