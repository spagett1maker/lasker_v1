"use client";

import { useState } from "react";

import Image from 'next/image';
import Link from 'next/link';
import HeaderO from "@/components/Header/other";

import { AnalyticsIcon, PuzzleIcon, GearIcon } from "@/components/ui/icons";

{/*<section className='pt-[120px] pb-[90px]'>
          <div className="mx-auto">
            <div className="text-center">
              <h2 className="font- font-semibold text-lg mb-[17px] text-[#6F56E6]">
                Our Goal
              </h2>
              <p className="font-bold text-[40px] leading-tight  mb-[30px] whitespace-pre-wrap">
                콘텐츠 맥락에 맞는 광고 솔루션으로<br/>
                시청자 경험을 향상시키고자 합니다.
              </p>
              <p className="font-medium text-lg whitespace-pre-wrap text-[#8e8e8e] mb-[20px]">
                시청경험을 방해하지 않는 미드롤(mid-roll) 광고로 긍정적 광고인식을 전달합니다.
              </p>
            </div>
            <div>
              <Image src="/example.png" alt="example" width={2000} height={500} className='w-full pt-[50px]' />
            </div>
          </div>
    </section>*/}

export default function About() {
  const [currentTab, clickTab] = useState(0);

  const menuArr = [
    { 
      name: 'DSP', 
      title: '영상 광고 상세 타겟팅 DSP',
      content:
        <div className="mt-[40px]">
          <Image src="/sol1.png" width={2264} height={1054} alt="DSP" />
          
        </div>
    },
    { 
      name: '맥락 광고', 
      title: '콘텐츠 맥락에 맞는 광고 매칭 시스템',
      content: 
        <div>
          <div className="mt-[60px]">
            <figure className="block">
              <Image src="/example.png" alt="example" width={2000} height={500} className='w-full pt-[50px]' />
            </figure>
          </div>
          <div className="my-[43px] border-[#eaeaea] h-[140px] border-b">
            <div className="w-[300px] float-left pr-[30px]">
              <h2 className="block text-xl mb-[12px] font-bold">
                Video Understanding 활용<br/>인스트림 맥락 타겟팅
              </h2>
            </div>
            <div className="w-[calc(100%-300px)] float-right">
              <h3 className="mb-[15px] font-semibold text-lg">맥락에 맞는 광고를 통해 피로도 감소 및 브랜드 이미지 보호</h3>
                <ul className="mb-[45px] ml-[15px] list-disc">
                  <li className="relative mt-0">
                    <h5>콘텐츠 맥락에 맞는 광고 매칭</h5>
                  </li>
                  <li className="relative mt-[11px]">
                    <h5>장면 및 분위기 전환 인식을 통한 광고 매칭</h5>
                  </li>
                </ul>
            </div>
          </div>
          <div className="mt-[43px] border-[#eaeaea] h-[240px]">
            <div className="w-[300px] float-left pr-[30px]">
              <h2 className="block text-xl mb-[12px] font-bold">
                콘텐츠 맥락 분석 모델
              </h2>
            </div>
            <div className="w-[calc(100%-300px)] float-right">
              <h3 className="mb-[15px] font-semibold text-lg">맥락에 맞는 광고를 통해 피로도 감소 및 브랜드 이미지 보호</h3>
              <ul className="my-0 mx-[-10px] mb-[32px] mt-[40px]">
                <li className="w-1/3 float-left text-[16px]">
                  <div className="h-[200px] py-[30px] px-[20px] border border-[#eaeaea] mt-0 mx-[10px] mb-[20px]">
                    <i className="text-lg font-bold block mb-[17px] text-left ml-[10px]">Step 1</i>
                    <h4 className="ml-[10px] font-bold mb-[7px]">비디오 카테고리 분류</h4>
                    <p className="ml-[10px] font-medium text-[15px]">Video Categorizing</p>
                  </div>
                </li>
                <li className="w-1/3 float-left text-[16px]">
                  <div className="h-[200px] py-[30px] px-[20px] border border-[#eaeaea] mt-0 mx-[10px] mb-[20px]">
                    <i className="text-lg font-bold block mb-[17px] text-left ml-[10px]">Step 2</i>
                    <h4 className="ml-[10px] font-bold mb-[7px]">적절한 광고 삽입 <br/>위치 선택</h4>
                    <p className="ml-[10px] font-medium text-[15px]">Scene Boundary Detection</p>
                  </div>
                </li>
                <li className="w-1/3 float-left text-[16px]">
                  <div className=" h-[200px] py-[30px] px-[20px] border border-[#eaeaea] mt-0 mx-[10px] mb-[20px]">
                    <i className="text-lg font-bold block mb-[17px] text-left ml-[10px]">Step 3</i>
                    <h4 className="ml-[10px] font-bold mb-[7px]">비디오 맥락 분석</h4>
                    <p className="font-medium text-[15px] ml-[10px] ">Video Context Understanding</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
    },
    { 
      name: '광고 거래 자동화', 
      title: '프로그래매틱 방식 End-to-End 디지털 영상 광고 거래 자동화 솔루션',
      content: 
        <div className="mt-[52px] mb-[50px]">
          <ul className="my-0 mx-[-10px] mb-[32px] mt-[40px]">
            <li className="w-1/3 float-left text-center text-[16px]">
              <div className="h-[230px] py-[30px] px-[20px] border border-[#eaeaea] mt-0 mx-[10px] mb-[20px]">
                <figure className='w-[70px] my-0 mx-auto mb-[9px] table'>
                  <GearIcon className="w-full h-full"/>
                </figure>
                <h4 className="font-bold mb-[7px]">광고 집행</h4>
                <p className="font-medium text-[15px]">투명한 광고 집행 및 분석</p>
              </div>
            </li>
            <li className="w-1/3 float-left text-center text-[16px]">
              <div className="h-[230px] py-[30px] px-[20px] border border-[#eaeaea] mt-0 mx-[10px] mb-[20px]">
                <figure className='w-[64px] my-0 mx-auto mb-[19px] table'>
                  <PuzzleIcon className="w-full h-full"/>
                </figure>
                <h4 className="font-bold mb-[7px]">광고 매칭</h4>
                <p className="font-medium text-[15px]">RTB 영상 광고 집행을 통한<br/>시간과 비용 절약</p>
              </div>
            </li>
            <li className="w-1/3 float-left text-center text-[16px]">
              <div className="h-[230px] py-[30px] px-[20px] border border-[#eaeaea] mt-0 mx-[10px] mb-[20px]">
                <figure className='w-[90px] my-0 mx-auto mt-[-5px] mb-[3px] table'>
                  <AnalyticsIcon className="w-full h-full"/>
                </figure>
                <h4 className="font-bold mb-[7px]">광고 효율 분석</h4>
                <p className="font-medium text-[15px]">영상 맥락 분석을 통한<br/>효과적인 타겟팅</p>
              </div>
            </li>
          </ul>

          <div className="">
            <div className="">
              <div className="w-[300px] float-left pr-[30px] mt-[30px]">
                <h2 className="mb-[px] font-bold text-2xl">광고주 및 대행사</h2>
              </div>
              <div className="w-[calc(100%-300px)] float-right mt-[35px]">
                <h3 className="mb-[15px] font-semibold text-lg">영상 광고 최적화를 통한 광고주/대행사의 광고 효율 증가</h3>
                <ul className="mb-[45px] ml-[15px] list-disc">
                  <li className="relative mt-0">
                    <h5>AI 기반의 맥락 분석을 통해 광고 효율이 높고, 
                      사용자의 부정적인 감정을 유발하지 않는 위치에 광고 개재</h5>
                  </li>
                  <li className="relative mt-[11px]">
                    <h5>광고가 어디에, 어떻게 송출되었는지에 대한 광고 투명성</h5>
                  </li>
                </ul>
              </div>
            </div>

            <div className="h-[5px] border-[#eaeaea] border-b-2 w-full pt-[425px]"></div>

            <div className="">
              <div className="w-[300px] float-left pr-[30px] mt-[30px]">
                <h2 className="mt-[7px] font-bold text-2xl">퍼블리셔</h2>
              </div>
              <div className="w-[calc(100%-300px)] float-right mt-[35px]">
                <h3 className="mb-[15px] font-semibold text-lg">퍼블리셔 수익성 향상 및 사용자 경험 개선</h3>
                <ul className="mb-[45px] ml-[15px] list-disc">
                  <li className="relative mt-0">
                    <h5>A영상 콘텐츠 맞춤형 광고를 통해 광고 수익률을 높이고, 비효율적인 광고 타겟팅 문제를 해결</h5>
                  </li>
                  <li className="relative mt-[11px] pb-[40px]">
                    <h5>맥락에 맞는 광고 삽입으로 광고 피로도를 줄이고, 사용자 경험 유지를 통한 고객 이탈 방지</h5>
                  </li>
                </ul>
              </div>
            </div>
            
          </div>
          
        </div>
    },
  ];

  const selectMenuHandler = (index:any) => {
    clickTab(index);
  };
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
                
                {/** content section */}
                <div className='relative min-h-[360px]'>
                  <div className='max-w-[984px] my-0 mx-auto'>
                    <nav className='mb-[70px] mt-[-7px] relative block'>
                      <ul className='ml-[-10px] clear-both'>
                        {menuArr.map((el,index) => (
                          <div key={index} className='p-[10px] text-lg inline-block font-bold text-black cursor-pointer'
                          >
                            <li  className={index === currentTab ? "inline-block relative border-b-2 border-[#00a0e9]" : "inline-block relative" }
                            onClick={() => selectMenuHandler(index)}>
                              <span>{el.name}</span>
                            </li>
                          </div>
                        ))}
                      </ul>
                    </nav>

                    <div className="block">
                      <div className="mt-[59px] mb-[17px] text-2xl font-semibold relative">
                        <span>{menuArr[currentTab].title}</span>
                      </div>
                      <div className="mt-[28px] border-t-2 border-black">
                        {menuArr[currentTab].content}
                      </div>
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