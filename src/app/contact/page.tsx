import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

import Link from "next/link";

export default function About() {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="block p-0">
          <div className="relative my-0 mx-auto overflow-hidden p-0">
            {/** contact section */}
            <div className="relative overflow-hidden h-screen w-full bg-black">
              <div className="table h-full w-full relative max-w-[1280px] m-auto text-left text-white">
                <div className=" table-cell align-middle">
                  <div className="max-w-[984px] my-0 mx-auto">
                    {/** left section */}
                    <div className="mt-[-10px] float-left w-1/2">
                      <h2 className="mb-[25px] relative top-[3px] pb-[33px] text-5xl font-bold">
                        문의하기
                      </h2>
                      
                      <p className="text-base inline-block relative aligh-middle min-w-[150px] pr-[25px] pl-[5px]">
                        <span>contact@lasker.tech</span>
                      </p>
                    </div>
                    {/** right section */}
                    <div className="top-[4px] w-1/2 float-right pl-[20px] relative">
                      <div className="w-full flex flex-col">
                        <form>
                          
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}