import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import HeaderO from "@/components/Header/other";

export default function About() {
  return (
    <>
      <HeaderO menuVisible={true}/>
      <div className="relative overflow-hidden">
        <div className="block p-0">
          <div className="relative my-0 mx-auto overflow-hidden p-0">
            <div className="pt-[95px] pb-[136px]">
              <div className="block">
                {/** top section */}
                <div className="mt-[105px] mb-[60px]">
                  <div className="relative max-w-[984px] my-0 mx-auto">
                    <div className="relative">
                      <p className=" text-lg text-[#00a0e9] mb-[17px] font-semibold ml-[-3px]">About Us</p>
                      <h1 className="mb-[82px] ml-[-5px] font-bold text-5xl">Lasker 소개</h1>
                    </div>
                  </div>
                </div>
                {/** news section */}

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}