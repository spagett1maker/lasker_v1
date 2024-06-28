"use client"

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const HeaderO = ({menuVisible}:{menuVisible:boolean}) => {

  const [sticky, setSticky] = useState(false);

  const handleStickyNavbar = () => {
    if (window.scrollY > 0.01) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  return (
    <div className="text-black m-0 p-0 b-0 block">
      {/** menu bar */}
      <div className="top-[20px] right-[40px] fixed z-50">
        <button className="border-nome bg-none h-[40px] p-[25px] w-[33px] relative box-content">
          <span className="h-full overflow-hidden block relative">
            <div className="bg-black top-[10px] h-[3px] absolute block left-0 w-full overflow-hidden">
              <span className="w-full h-full"></span>
            </div>
            <div className="bg-black top-[21px] h-[3px] absolute block left-0 w-full overflow-hidden">
              <span className="w-full h-full"></span>
            </div>
          </span>
        </button>
      </div>
      {/** header */}
      
      <header className={`${sticky ? "border-b bg-white shadow-md" : ""} w-full h-[117px] fixed t-0 l-0 z-10 transition-all`}>
        <div className="mx-[64px] my-0 h-full relative">
          {/** Logo */}
          <h1 className="w-[250px] h-[80px] top-[15px] absolute left-[-20px]">
            <Link href="/" className="block w-full h-full text-3xl">
              <Image src="/logo_black.png" alt="logo" className="block h-full w-full" width={600} height={200} />
              
            </Link>
          </h1>
          {/** Language */}
          { menuVisible ?
          <nav className="top-[44px] left-[230px] absolute">
            <ul>
              <li className=" float-left relative">
                <Link href="/" 
                  className="text-xs inline-block
                              relative py-[10px] px-[9px] font-bold">
                  <span className="relative hover:border-b-2 hover:border-[#00a0e9] pb-[2px]">
                    KOR
                  </span>
                </Link>
              </li>
              <li className=" float-left relative">
                <Link href="/" 
                  className=" text-xs inline-block
                              relative py-[10px] px-[9px] font-bold">
                  <span className="relative hover:border-b-2 hover:border-[#00a0e9] pb-[2px]">
                    ENG
                  </span>
                </Link>
              </li>
            </ul>
          </nav> : <></>}
          {/** Menu */}
          { menuVisible ?
          <div className="mt-[24px] mr-[54px] block relative float-right">
            <nav className="block float-left">
              <ul className="inline-block align-top">
                <li className="inline-block aligh-top relative">
                  <Link href="/about" className="text-[15px] py-[27px] px-[22px] relative block font-semibold">
                    <span className="relative">
                      회사소개
                    </span>
                  </Link>
                </li>
                <li className="inline-block aligh-top relative">
                  <Link href="/career" className="text-[15px] py-[27px] px-[22px] relative block font-semibold">
                    <span className="relative">
                      인재영입
                    </span>
                  </Link>
                </li>
                <li className="inline-block aligh-top relative">
                  <Link href="/news" className="text-[15px] py-[27px] px-[22px] relative block font-semibold">
                    <span className="relative">
                      회사소식
                    </span>
                  </Link>
                </li>
                <li className="inline-block aligh-top relative">
                  <Link href="/contact" className="text-whitelllll text-[15px] py-[27px] px-[22px] relative block font-semibold">
                    <span className="relative">
                      문의하기
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div> : <></>}
        </div>
      </header>
    </div>
  )
}

export default HeaderO;