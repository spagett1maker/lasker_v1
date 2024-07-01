
import Image from 'next/image';

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
                      <p className=" text-lg text-[#00a0e9] mb-[17px] font-semibold ">Solution</p>
                      <h1 className="mb-[27px] ml-[-4px] font-bold text-5xl leading-tight">
                        디지털 광고 솔루션
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="pb-[94px]">
                  <div className="my-0 mx-auto max-w-[984px]">
                    <h2 className="mb-[37px] mt-[59px] text-2xl font-semibold relative text-black">
                      <span>글로벌 디지털 영상 광고 시장을 선도하는</span>
                      <br/>
                      <span>No.</span>
                      <span>1 Ad-Tech Startup</span>
                    </h2>
                    <div className='mt-[45px]'>
                      <div className='relative overflow-hidden '>
                        <Image src="/example.png" alt="example" width={2000} height={500} className='w-full pt-[50px]' />
                      </div>
                    </div>
                    <div className='mt-[64px]'>
                      <div className='float-left w-1/2'>
                        <h3 className='text-2xl font-semibold'>
                          <span>Lasker Inc.는</span> <br/>
                          <span>현재의 광고 시스템에서 나아가</span>
                          <br/>
                          <span>사용자들에게 더 나은 광고 경험을 제공합니다.</span>
                        </h3>
                      </div>
                      <div className='float-left w-1/2'>
                        <p className=' text-sm mb-[15px] text-justify'>
                        유저 데이터 기반의 광고 시스템을 넘어서 컨텐츠와 어울리는 광고를 자동으로 검색 및 삽입하여,
                        영상 시청을 방해하지 않으며 시청자의 광고 인식 경험을 개선시키고 효과를 극대 화하고자 합니다.
                        </p>
                        <p className=" text-sm break-keep whitespace-pre-line">
                        유저 데이터 기반의 광고 시스템을 넘어서 컨텐츠와 어울리는 광고를 자동으로 검색 및 삽입하여,
                        영상 시청을 방해하지 않으며 시청자의 광고 인식 경험을 개선시키고 효과를 극대 화하고자 합니다.
                      </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-[105px] mb-[60px]">
                  <div className="relative max-w-[984px] my-0 mx-auto">
                    <div className="relative">
                      
                    </div>
                  </div>
                </div>
                

                {/** section 2 */}
                <div className='px-0 py-[95px] bg-[#13144d]'>
                  <div className=' text-2xl font-medium my-0 mx-auto max-w-[984px]'>
                    <div className="relative">
                        <p className=" text-lg text-[#696be1] mb-[17px] font-semibold ml-[-3px]">Our mission</p>
                        <h1 className="mb-[27px] text-white ml-[-5px] font-bold text-4xl leading-tight">
                          기술을 활용해 광고 경험을 디자인하고, <br/>
                          AI를 통해 광고 효율을 최적화하며, <br/>
                          시장 트렌드를 선도하는 디지털 광고 솔루션을 제공합니다.
                        </h1>
                        
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