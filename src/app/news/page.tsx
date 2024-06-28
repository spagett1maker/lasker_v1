
import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";



export default function NewsPage() {
  return (
    <>
      <Header startColor={0} menuVisible={true}/>
      <div className="relative overflow-hidden">
        <div className="block p-0">
          <div className="relative my-0 mx-auto overflow-hidden p-0">
            <div className="pt-[125px] pb-[136px]">
              <div className="block">
                {/** top section */}
                <div className="mt-[105px] mb-[60px]">
                  <div className="relative max-w-[984px] my-0 mx-auto">
                    <div className="relative">
                      <p className=" text-lg text-[#00a0e9] mb-[17px] font-semibold ml-[-3px]">Our News</p>
                      <h1 className="mb-[82px] ml-[-5px] font-bold text-5xl">회사 블로그</h1>
                    </div>
                  </div>
                </div>
                {/** news section */}
                <div className="relative min-h-[360px]">
                  <div className="max-w-[984px] my-0 mx-auto">
                    {/** article list section */}
                    <div className="mb-[-40px] relative clear-both grid grid-cols-3 gap-[20px]">
                      <Link 
                        href="/news/article1"
                        className="mb-[40px] border border-[#eaeaea] relative clear-both float-left max-w-[398px]">
                        <div className="relative">
                          <div className="relative">
                            <Image src="/test.png" alt="news1" width={400} height={300} className="w-full h-[200px] object-cover"/>
                          </div>
                          <div className="p-[20px]">
                            <p className="text-[#00a0e9] text-lg font-semibold mb-[10px]">Article 1</p>
                            <p className="text-[#333333] text-base">This is the content of article 1</p>
                          </div>
                        </div>
                      </Link>
                      <Link 
                        href="/news/article1"
                        className="mb-[40px] border border-[#eaeaea] relative clear-both float-left max-w-[398px]">
                        <div className="relative">
                          <div className="relative">
                            <Image src="/test.png" alt="news1" width={400} height={300} className="w-full h-[200px] object-cover"/>
                          </div>
                          <div className="p-[20px]">
                            <p className="text-[#00a0e9] text-lg font-semibold mb-[10px]">Article 1</p>
                            <p className="text-[#333333] text-base">This is the content of article 1</p>
                          </div>
                        </div>
                      </Link>
                      <Link 
                        href="/news/article1"
                        className="mb-[40px] border border-[#eaeaea] relative clear-both float-left max-w-[398px]">
                        <div className="relative">
                          <div className="relative">
                            <div className="w-full h-[200px] object-cover bg-cyan-300"/>
                          </div>
                          <div className="p-[20px]">
                            <p className="text-[#00a0e9] text-lg font-semibold mb-[10px]">Article 1</p>
                            <p className="text-[#333333] text-base">This is the content of article 1</p>
                          </div>
                        </div>
                      </Link>
                      <Link 
                        href="/news/article1"
                        className="mb-[40px] border border-[#eaeaea] relative clear-both float-left max-w-[398px]">
                        <div className="relative">
                          <div className="relative">
                            <div className="w-full h-[200px] object-cover bg-sky-400"/>
                          </div>
                          <div className="p-[20px]">
                            <p className="text-[#00a0e9] text-lg font-semibold mb-[10px]">Article 1</p>
                            <p className="text-[#333333] text-base">This is the content of article 1</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}