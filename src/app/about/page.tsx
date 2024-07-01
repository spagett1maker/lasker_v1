
import Image from 'next/image';
import Link from 'next/link';
import HeaderO from "@/components/Header/other";

import { ProIcon, InovIcon, JoyIcon, ShareIcon } from '@/components/ui/icons';

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
                <div className="pt-[105px] mb-[60px]">
                  <div className="relative max-w-[984px] my-0 mx-auto">
                    <div className="relative">
                      <p className=" text-lg text-[#00a0e9] mb-[17px] font-semibold ">About Lasker</p>
                      <h1 className="mb-[27px] ml-[-4px] font-bold text-5xl leading-tight">
                        Lasker 소개
                      </h1>
                    </div>
                  </div>
                </div>

{/** 
                <div className='max-w-[984px] my-0 mx-auto'>
                  <nav className='mb-[70px] relative mt-[-7px]'>
                    <div></div>
                    <ul className='ml-[-10px] clear-both text-black'>
                      <li className='inline-block relative'>
                        <Link href="/about" className=' text-lg p-[10px]'>소개</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
*/}
                <div className="pb-[94px]">
                  <div className="my-0 mx-auto max-w-[984px]">
                    <div className='w-full flex'>
                      <div className='mt-[29px] mr-[25px]'>
                        <div className='border-b-2 pb-[1px] border-black '>
                          <span className='font-bold'>Our Vision</span>
                        </div>
                      </div>
                      <h2 className=" mb-[17px] mt-[29px] text-2xl font-semibold relative text-black">
                        <span>글로벌 디지털 영상 광고 시장을 선도하는</span>
                        <br/>
                        <span>No.</span>
                        <span>1 Ad-Tech Startup</span>
                      </h2>
                    </div>
                    
                    <div className='mt-[35px]'>
                      <div className='relative overflow-hidden border w-full h-[500px] my-0 mx-auto items-center'>
                        <Image src="/logo/logo_bg_cut.png" alt="logo_feature" width={2001} height={2001} className='w-3/5 h-full object-cover mx-auto' />
                      </div>
                    </div>
                    <div className='mt-[64px] mb-[30px]'>
                      <div className='float-left w-1/2'>
                        <h3 className='text-2xl font-semibold mb-[20px]'>
                          <span>Lasker Inc.는</span> <br/>
                          <span>현재의 광고 시스템에서 나아가</span>
                          <br/>
                          <span>사용자들에게 더 나은 광고 경험을 제공합니다.</span>
                        </h3>
                        <div className='pt-[6px]'>
                          <Link
                            href="/solution"
                            className="flex w-[180px] justify-center mt-[10px] px-[20px] py-[10px] text-center border-2 border-black font-bold text-md hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
                          >
                            Let&apos;s go
                          </Link>
                        </div>
                      </div>
                      <div className='float-left w-1/2'>
                        <p className='text-md mb-[20px] text-justify'>
                          디지털 광고 시장은 끊임없이 변화하고 있습니다. 특히, 영상 광고 시장은 폭발적으로 성장 하고 있지만, 광고주의 고민은 여전히 남아 있습니다.
                        </p>
                        <p className=' text-md mb-[20px] text-justify'>
                        긴 영상 콘텐츠 속에서 적절한 시점에 광고를 삽입하지 않으면 시청자의 몰입을 방해하고, 광고 효과는 반감될 수밖에 없습니다. 
                        이러한 문제를 해결하기 위해 우리는 혁신적인 솔루션을 개발하게 되었습니다.

                        </p>
                        <p className=" text-md break-keep whitespace-pre-line">
                        유저 데이터 기반의 광고 시스템을 넘어서 컨텐츠와 어울리는 광고를 자동으로 검색 및 삽입하여,
                        영상 시청을 방해하지 않으며 시청자의 광고 인식 경험을 개선시키고 효과를 극대 화하고자 합니다.
                      </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-[200px] mb-[60px]">
                  <div className="relative max-w-[984px] my-0 mx-auto">
                    <div className="relative">
                      
                    </div>
                  </div>
                </div>
                
                <div className='pt-[64px] pb-[100px] bg-[#f8f8f8]'>
                  <div className='max-w-[984px] my-0 mx-auto'>
                    <h3 className=' text-2xl font-bold mb-[15px]'>핵심가치</h3>
                    <ul className='mx-[-15px] mt-[10px]'>
                      <li className='h-[300px] my-0 mx-[15px] w-[calc(1/4-30px)] px-[15px] py-[48px] inline-block align-top text-center bg-white'>
                        <figure className='w-[64px] my-0 mx-auto'>
                          <ProIcon className="w-full h-full" />
                        </figure>
                        <b className=' text-lg mt-[24px] font-semibold block text-black'>프로페셔널리즘</b>
                        <p className='h-[92px] text-sm mt-[10px]'>
                        맡은 바에 있어 책임감을 가지고 <br/>
                        끊임없이 탁월한 성과를 지향하는 <br/>
                        전문가
                        </p>
                      </li>
                      <li className='h-[300px] my-0 mx-[15px] w-[calc(1/4-30px)] px-[15px] py-[48px] inline-block align-top text-center bg-white'>
                        <figure className='w-[64px] my-0 mx-auto'>
                          <InovIcon className="w-full h-full" />
                        </figure>
                        <b className=' text-lg mt-[24px] font-semibold block text-black'>혁신</b>
                        <p className='h-[92px] text-sm mt-[10px]'>
                        지속적으로 새로운 아이디어와 <br/>
                        기술을 탐구하고 도입하여 <br/>
                        광고 산업의 변화와 트렌드 선도
                        </p>
                      </li>
                      <li className='h-[300px] my-0 mx-[15px] w-[calc(1/4-30px)] px-[15px] py-[48px] inline-block align-top text-center bg-white'>
                        <figure className='w-[64px] my-0 mx-auto'>
                          <ShareIcon className="w-full h-full" />
                        </figure>
                        <b className=' text-lg mt-[24px] font-semibold block text-black'>공유</b>
                        <p className='h-[92px] text-sm mt-[10px]'>
                        팀, 그리고 고객과 함께 적극적으로 <br/>
                        지식과 정보를 공유하여 <br/>
                        모두가 함께 성장하고 발전할 수 있는<br/>
                        환경 조성
                        </p>
                      </li>
                      <li className='h-[300px] my-0 mx-[15px] w-[calc(1/4-30px)] px-[15px] py-[48px] inline-block align-top text-center bg-white'>
                        <figure className='w-[64px] my-0 mx-auto'>
                          <JoyIcon className="w-full h-full" />
                        </figure>
                        <b className=' text-lg mt-[24px] font-semibold block text-black'>즐거움</b>
                        <p className='h-[92px] text-sm mt-[10px]'>
                        우리의 업무와 고객과의 관계에서<br/>
                        긍정적이고 즐거운 경험을 추구하는<br/>
                        기업 문화
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>

                {/** section 2 */}
                <div className='px-0 py-[95px] bg-[#13144d]'>
                  <div className=' text-2xl font-medium my-0 mx-auto max-w-[984px]'>
                    <div className="relative">
                      <p className=" text-lg text-[#898be1] mb-[17px] font-semibold ml-[-3px]">Our mission</p>
                      <h1 className="mb-[27px] text-white ml-[-5px] font-bold text-4xl leading-tight">
                        기술을 활용해 광고 경험을 디자인하고, <br/>
                        AI를 통해 광고 효율을 최적화하며, <br/>
                        시장 트렌드를 선도하는 디지털 광고 솔루션을 제공합니다.
                      </h1>
                        
                    </div>
                  </div>
                </div>

                <div className='pt-[64px]'>
                  <div className='max-w-[984px] my-0 mx-auto'>
                    <h3 className='w-[306px] mt-0 text-2xl inline-block align-top font-bold'>회사정보</h3>
                    <ul className='inline-block align-top w-[calc(100%-354px)]'>
                      <li className='pt-0 py-[20px] border-b border-[#eaeaea]'>
                        <b className='w-[126px] text-[16px] text-black inline-block'>회사명</b>
                        <p className='inline-block relative top-[2px] text-[15px] font-light'>{'('}주{')'}라스커</p>
                      </li>
                      <li className='py-[20px] border-b border-[#eaeaea]'>
                        <b className='w-[126px] text-[16px] text-black inline-block'>대표이사</b>
                        <p className='inline-block relative top-[2px] text-[15px] font-light'>유수진</p>
                      </li>
                      <li className='py-[20px] border-b border-[#eaeaea]'>
                        <b className='w-[126px] text-[16px] text-black inline-block'>설립일</b>
                        <p className='inline-block relative top-[2px] text-[15px] font-light'>2024년 3월 19일</p>
                      </li>
                      <li className='py-[20px] border-b border-[#eaeaea]'>
                        <b className='w-[126px] text-[16px] text-black inline-block'>주소</b>
                        <p className='inline-block relative top-[2px] text-[15px] font-light'>대전광역시 유성구 문지로 193, KAIST 문지캠퍼스 진리관동 T139호 (34051)</p>
                      </li>
                      <li className='py-[20px] border-b border-[#eaeaea]'>
                        <b className='w-[126px] text-[16px] text-black inline-block'>연락처</b>
                        <p className='inline-block relative top-[2px] text-[15px] font-light'>contact@lakser.tech</p>
                      </li>
                      <li className='py-[20px] '>
                        <b className='w-[126px] mr-[17px] text-[16px] text-black inline-block align-top'>주요 사업</b>
                        <ul className='inline-block mt-[2px] list-disc font-light'>
                          <li className='text-[15px] mb-[7px] relative pl-[7px]'>Ad Tech 관련 솔루션 개발</li>
                          <li className='text-[15px] mb-[7px] relative pl-[7px]'>AI를 활용한 영상 광고 솔루션 개발</li>
                          <li className='text-[15px] mb-[7px] relative pl-[7px]'>End-to-End 디지털 영상 광고 거래 자동화 솔루션 개발</li>
                          <li className='text-[15px] mb-[7px] relative pl-[7px]'>데이터 기반 영상 광고 기획 및 분석 컨설팅</li>
                        </ul>
                        
                      </li>
                    </ul>
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