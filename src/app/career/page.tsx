
import HeaderO from "@/components/Header/other";
import Link from "next/link";

export default function Career() {
  return (
    <>
      <HeaderO menuVisible={true}/>
      <div className="relative overflow-hidden">
        <div className="block p-0">
          <div className="relative my-0 mx-auto overflow-hidden p-0">
            <div className="pt-[95px] pb-[36px]">
              <div className="block">
                {/** top section */}
                <div className="mt-[105px] mb-[60px]">
                  <div className="relative max-w-[984px] my-0 mx-auto">
                    <div className="relative">
                      <p className=" text-lg text-[#00a0e9] mb-[17px] font-semibold ml-[-3px]">Hiring</p>
                      <h1 className="mb-[82px] ml-[-5px] font-bold text-5xl">Lasker와 함께 나아갈 동료를 찾습니다.</h1>
                    </div>
                  </div>
                </div>

                <div className="mb-[50px]">
                  <div className="my-0 mx-auto max-w-[984px]">
                    <h2 className="text-xl mt-[59px] font-medium">Designing Ad Experiences with Tech</h2>
                    <p className="mt-[25px] my-[10px] font-normal text-md">
                      Lasker Inc.는 현재의 광고 시스템에서 나아가 사용자들에게 더 나은 광고 경험을 제공하고자 합니다.</p>
                    <p className="mb-[20px] font-normal text-md">
                      유저 데이터 기반의 광고 시스템을 넘어서 콘텐츠와 어울리는 광고를 자동으로 검색 및 삽입하여, 영상 시청을 방해하지 않으며 시청자의 광고 인식 경험을 개선시키고 효과를 극대화하고자 합니다.</p>
                    <div className="mt-[37px]">
                      <div className="mr-[15px] bg-[#eee] h-[220px] py-[44px] px-[52px] w-[calc(50%-15px)] relative inline-block">
                        <div className="relative font-medium text-base">
                          <span className="border-b-2 border-black pb-[3px]">Vision</span>
                        </div>
                        <h3 className="mt-[30px] font-bold text-xl">
                          <span>글로벌 디지털 영상 광고 시장을 선도하는<br/>No.1 Ad-Tech Startup</span>
                        </h3>
                      </div>
                      <div className="mr-[15px] bg-[#13144d] h-[220px] py-[44px] px-[52px] w-[calc(50%-15px)] relative inline-block">
                        <div className="relative font-medium text-base">
                          <span className="border-b-2 border-white pb-[3px] text-white">Mission</span>
                        </div>
                        <h3 className="mt-[30px] font-bold text-xl text-white">
                          <span>
                            기술을 활용해 시장 트렌드를 선도하는 <br/>디지털 광고 솔루션 제공</span>
                        </h3>
                      </div>
                    </div>
                    <div className='pt-[45px] justify-center'>
                        <Link
                          href="https://childish-denim-9a7.notion.site/daff2521b100426b9a811dbd41942aad"
                          className="flex w-[250px] justify-center mt-[10px] px-[20px] py-[10px] text-center border-2 border-black hover:bg-black hover:text-white font-bold text-md transition-all duration-300 ease-in-out"
                        >
                          채용 공고 바로가기
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
  );
}
