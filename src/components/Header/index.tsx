"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";

const Header = () => {
  const { width, height } = useWindowDimensions();

  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if(window.scrollY > 4*height-100) {
      setSticky(false);
    } else if(window.scrollY > 3*height-100) {
      setSticky(true);
    } else if ((window.scrollY > 2*height-100)) {
      setSticky(false);
    } else if ((window.scrollY > height-100)) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  return (
    <div className={`${sticky ? "text-black" : "text-white"} m-0 p-0 b-0 block`}>
      {/** menu bar */}
      <div className="top-[20px] right-[40px] fixed z-50">
        <button className="border-nome bg-none h-[40px] p-[25px] w-[33px] relative box-content">
          <span className="h-full overflow-hidden block relative">
            <div className={`${sticky ? "bg-black" : "bg-white"} top-[10px] h-[3px] absolute block left-0 w-full overflow-hidden`}>
              <span className="w-full h-full"></span>
            </div>
            <div className={`${sticky ? "bg-black" : "bg-white"} top-[21px] h-[3px] absolute block left-0 w-full overflow-hidden`}>
              <span className="w-full h-full"></span>
            </div>
          </span>
        </button>
      </div>
      {/** header */}
      <header className="w-full h-[110px] fixed t-0 l-0 z-50">
        <div className="mx-[64px] my-0 h-full relative">
          {/** Logo */}
          <h1 className="w-[116px] h-[24px] top-[44px] absolute left-0">
            <Link href="/" className="block w-full h-full text-3xl">
              Lasker
            </Link>
          </h1>
          {/** Language */}
          <nav className="top-[44px] left-[156px] absolute">
            <ul>
              <li className=" float-left relative">
                <Link href="/" 
                  className="text-xs inline-block
                              relative py-[10px] px-[9px] font-bold">
                  <span className="relative hover:border-b-2 hover:border-[#f52f23] pb-[2px]">
                    KOR
                  </span>
                </Link>
              </li>
              <li className=" float-left relative">
                <Link href="/" 
                  className=" text-xs inline-block
                              relative py-[10px] px-[9px] font-bold">
                  <span className="relative hover:border-b-2 hover:border-[#f52f23] pb-[2px]">
                    ENG
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
          {/** Menu */}
          <div className="mt-[24px] mr-[54px] block relative float-right">
            <nav className="block float-left">
              <ul className="inline-block align-top">
                <li className="inline-block aligh-top relative">
                  <Link href="" className="text-[15px] py-[27px] px-[22px] relative block font-semibold">
                    <span className="relative">
                      회사소개
                    </span>
                  </Link>
                </li>
                <li className="inline-block aligh-top relative">
                  <Link href="" className="text-[15px] py-[27px] px-[22px] relative block font-semibold">
                    <span className="relative">
                      인재영입
                    </span>
                  </Link>
                </li>
                <li className="inline-block aligh-top relative">
                  <Link href="" className="text-[15px] py-[27px] px-[22px] relative block font-semibold">
                    <span className="relative">
                      회사소식
                    </span>
                  </Link>
                </li>
                <li className="inline-block aligh-top relative">
                  <Link href="" className="text-whitelllll text-[15px] py-[27px] px-[22px] relative block font-semibold">
                    <span className="relative">
                      문의하기
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header;