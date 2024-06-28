import Link from "next/link";
import Image from "next/image";
import { Spotlight } from "@/components/ui/bgGrad";

/** */

const Hero = () => {
  return (
    <>
      {/** main section */}
      <div className="relative overflow-hidden h-screen w-full bg-black">
        {/** main section - bg */}
        <div className="w-full h-full absolute top-0 left-0 bg-cover">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          <div className="z-0 absolute top-0 left-0 w-[200%] h-[200%] -rotate-[45deg] bg-[#3f3fbf]l bg-[#13144d]"/>
          <div className=" z-0 absolute top-32 left-0 w-[200%] h-[200%] -rotate-[45deg] bg-black"/>
          <div className="z-0 absolute top-40 left-0 w-[200%] h-[200%] -rotate-[45deg] bg-[#3f3fbf]l bg-[#13144d]"/>
          <div className=" z-0 absolute top-52 left-0 w-[200%] h-[200%] -rotate-[45deg] bg-black"/>
          

        </div>
        {/** main-section cont */}
        <div className="z-10 table h-full w-full relative max-w-[1280px] m-auto text-left">
            <div className=" table-cell align-middle">
              <div className="max-w-[984px] my-0 mx-auto">
                <div className=" text-md top-[12px] left-[-4px] mb-[22px] font-bold mt-[24px] relative text-white">
                  Designing Ad Experience with Tech
                </div>
                <h2 className=" text-[54px] t-[-15px] ml-[-6px] font-bold text-white relative">
                  맥락 기반 OTT/스트리밍 광고 솔루션
                </h2>
              </div>
            </div>
          </div>
      </div>
      {/** 2nd section */}
      <div className="relative overflow-hidden h-screen w-full bg-[#efeeea]">
        {/** 2nd section - bg */}
        <div className="w-full h-full absolute top-0 left-0 bg-cover">
          
        </div>
        {/** 2nd section cont */}
        <div className="table h-full w-full relative max-w-[1280px] m-auto text-left">
          <div className=" table-cell align-middle">
            <div className="max-w-[984px] my-0 mx-auto">
              <div className="mt-[-10px] float-left w-1/2">
                <h2 className="mb-[25px] relative top-[3px] pb-[33px] text-5xl font-bold">
                  Our Value, <br/>
                  Goal and Vision
                </h2>
                <Link href="/about" className=" text-base inline-block relative align-middle text-center min-w-[150px] py-[20px] pr-[25px] pl-[5px] font-normal">
                  <span className="text-black">회사 소개 바로가기</span>
                  <span aria-hidden="true" className="pl-[10px] hover:pl-[22px] relative transition-all">→</span>
                </Link>
              </div>
              <ul className="top-[4px] w-1/2 float-right pl-[20px] relative">
                <li className="mb-[33px] pb-[33px] clear-both border-b border-solid border-[#eee]">
                  <h3 className=" text-lg pb-0 float-left text-[#00a0e9] font-bold">
                    Professionalism
                  </h3>
                  <p className="pl-[146px]">
                    <strong className="text-lg pb-0 font-bold block text-black">
                      <i>No.</i> 1 영상 광고 솔루션 회사
                    </strong>
                    <span>
                      최적화된 맥락 기반 영상 광고 솔루션 제공
                    </span>
                  </p>
                </li>
                <li className="mb-[33px] pb-[33px] clear-both border-b border-solid border-[#eee]">
                  <h3 className=" text-lg pb-0 float-left text-[#00a0e9] font-bold">
                    Innovation
                  </h3>
                  <p className="pl-[146px]">
                    <strong className="text-lg pb-0 font-bold block text-black">
                      <i>No.</i> 2 맥락 기반의 광고 송출
                    </strong>
                    <span>
                      AI를 활용한 영상 맥락 분석을 통한 타겟팅
                    </span>
                  </p>
                </li>
                <li className="mb-[33px] pb-[33px] clear-both border-b border-solid border-[#eee]">
                  <h3 className=" text-lg pb-0 float-left text-[#00a0e9] font-bold">
                    Share
                  </h3>
                  <p className="pl-[146px]">
                    <strong className="text-lg pb-0 font-bold block text-black">
                      <i>No.</i> 3 영상 광고 시장의 혁신
                    </strong>
                    <span>
                      시청 경험을 방해하지 않는 광고 솔루션
                    </span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/** 3rd section */}
      <div className="relative overflow-hidden h-screen w-full bg-black">
        {/** background */}
        
        {/** 3rd-section cont */}
        <div className="table h-full w-full relative max-w-[1280px] m-auto text-left">
            <div className="table-cell align-middle">
              <div className="relative top-[20px] max-w-[984px] my-0 mx-auto">
                <div className="w-full h-full absolute top-[-25%] left-[-2%] bg-cover">
                  <div className="rounded-full h-[50px] w-[50px] bg-[#13144d] from-[#5e5f9f] bg-gradient-to-tr"></div>
                </div>
                <div className=" text-5xl font-bold relative top-[-3px] text-white pb-[40px]">What we do</div>
                <div className=" text-left text-white">
                  {/** sec1 */}
                  <div className="p-0 top-[-12px] float-left w-1/4 relative">
                    <h3 className="font-bold text-xl">AD Service</h3>
                    <ul className="top-[16px] relative">
                      <li>
                        <Link href="/" className=" text-base block max-w-[240px] leading-8">
                          <span className="hover:border-b-2 pb-[1px] transition-all">
                            맥락 기반 광고
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/" className=" text-base block max-w-[240px] leading-8">
                          <span className="hover:border-b-2 pb-[1px] transition-all">
                            맥락 기반 광고
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/" className=" text-base block max-w-[240px] leading-8">
                          <span className="hover:border-b-2 pb-[1px] transition-all">
                            맥락 기반 광고
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/** sec2 */}
                  <div className="p-0 top-[-12px] float-left w-1/4 relative">
                    <h3 className="font-bold text-xl">AD Service</h3>
                    <ul className="top-[16px] relative">
                      <li>
                        <Link href="/" className=" text-base block max-w-[240px] leading-8">
                          <span className="hover:border-b-2 pb-[1px] transition-all">
                            맥락 기반 광고
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/" className=" text-base block max-w-[240px] leading-8">
                          <span className="hover:border-b-2 pb-[1px] transition-all">
                            맥락 기반 광고
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/" className=" text-base block max-w-[240px] leading-8">
                          <span className="hover:border-b-2 pb-[1px] transition-all">
                            맥락 기반 광고
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/** sec3 */}
                  <div className="p-0 top-[-12px] float-left w-1/4 relative">
                    <h3 className="font-extrabold text-xl">AD Service</h3>
                    <ul className="top-[16px] relative">
                      <li>
                        <Link href="/" className=" text-base block max-w-[240px] leading-8">
                          <span className="hover:border-b-2 pb-[1px] transition-all">
                            맥락 기반 광고
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/" className=" text-base block max-w-[240px] leading-8">
                          <span className="hover:border-b-2 pb-[1px] transition-all">
                            맥락 기반 광고
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/" className=" text-base block max-w-[240px] leading-8">
                          <span className="hover:border-b-2 pb-[1px] transition-all">
                            맥락 기반 광고
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/** sec4 */}
                  <div className="p-0 top-[-12px] float-left w-1/4 relative">
                    <h3 className="font-bold text-xl">AD Service</h3>
                    <ul className="top-[16px] relative">
                      <li>
                        <Link href="/" className=" text-base block max-w-[240px] leading-8">
                          <span className="hover:border-b-2 pb-[1px] transition-all">
                            맥락 기반 광고
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/" className=" text-base block max-w-[240px] leading-8">
                          <span className="hover:border-b-2 pb-[1px] transition-all">
                            맥락 기반 광고
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/" className=" text-base block max-w-[240px] leading-8">
                          <span className="hover:border-b-2 pb-[1px] transition-all">
                            맥락 기반 광고
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      {/** 4th section */}
      <div className="relative overflow-hidden h-screen w-full bg-[#efeeea]">
        {/** 4th-section cont */}
        <div className="table h-full w-full relative max-w-[1280px] m-auto text-left">
          <div className="table-cell align-middle">
            <div className="table table-fixed w-full relative top-[30px]">
              <figure className="table-cell w-1/2 align-middle">
                <Image src="/main.jpg" alt="main" height={500} width={500}/>
              </figure>
              <div className="pl-[22px] table-cell w-1/2 align-middle">
                <h2 className="top-0 mb-[30px] mt-[-45px] text-4xl font-medium relative">
                  <i className="mb-[20px] top-[24px] text-sm block">Insights for Inspires</i>
                  <span className="block text-3xl left-[-3px] top-[4px]">
                    AI 기반 맥락 분석을 통한 <br/> 최적의 광고 삽입
                  </span>
                </h2>
                <Link href="/" className=" text-base inine-block relative align-middle text-center min-w-[150px] py-[20px] pr-[40px]">
                  <span className="text-black">회사 소개 바로가기</span>
                  <span aria-hidden="true" className="pl-[10px] hover:pl-[22px] relative transition-all">→</span>
                </Link>
                <Link href="/" className=" text-base inine-block relative align-middle text-center min-w-[150px] py-[20px] px-[25px]">
                  <span className="text-black">회사 소개 바로가기</span>
                  <span aria-hidden="true" className="pl-[10px] hover:pl-[22px] relative transition-all">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/** 5th section */}
      <div className="relative overflow-hidden h-screen w-full bg-[#00a0e9]">
        {/** 5th section - bg */}
        <div className="w-full h-full absolute top-0 left-0 bg-cover">
          
        </div>
        {/** 5th cont */}
        <div className="table h-full w-full relative max-w-[1280px] m-auto text-left">
            <div className="table-cell align-middle">
              <div className="top-[-29px] relative max-w-[984px] my-0 mx-auto">
                <h2 className="left-[-3px] text-5xl font-bold pb-[52px] text-white relative top-[-3px]">
                  Let{"'"}s be Together
                </h2>
                <ul className="top-[-8px] relative">
                  <li className="float-left w-1/2 text-white">
                    <h3 className="pb-[11px] text-sm font-semibold text-white">
                      Contact
                    </h3>
                    <p className="pb-[20px] w-[390px] text-[22px] font-semibold">
                      최적의 광고를 위한 첫 단추
                    </p>
                    <Link href="/about" className=" text-base inline-block relative align-middle text-center min-w-[150px] py-[20px] pr-[25px] pl-[5px] font-normal">
                      <span className="top-[-1px] relative font-semibold">회사 소개 바로가기</span>
                      <span aria-hidden="true" className="pl-[10px] hover:pl-[22px] relative transition-all">→</span>
                    </Link>
                  </li>
                  <li className="float-right w-1/2 text-white">
                    <h3 className="pb-[11px] text-sm font-semibold text-white">
                      Career
                    </h3>
                    <p className="pb-[20px] w-[390px] text-[22px] font-semibold">
                      Lakser는 인재 영입 중
                    </p>
                    <Link href="/career" className=" text-base inline-block relative align-middle text-center min-w-[150px] py-[20px] pr-[25px] pl-[5px] font-normal">
                      <span className="top-[-1px] relative font-semibold">채용 공고 바로가기</span>
                      <span aria-hidden="true" className="pl-[10px] hover:pl-[22px] relative transition-all">→</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Hero;