import Link from "next/link";
import { DownloadIcon } from "../ui/icons";


const Footer = () => {
  return (
    <div className="relative">
      <footer className="px-0 pt-[138px] pb-[100px] bg-black block">
        <div className="max-w-[984px] my-0 mx-auto relative">
          {/** top */}
          <div className="pb-0 block">
            <nav className="float-left w-1/2 relative top-[-4px]">
              <ul className="block ps-[40px]">
                <li className="relative max-w-[300px] pb-[14px]">
                  <Link href="" className="text-white font-medium text-2xl">
                    <span>회사소개</span>
                  </Link>
                  <ul className="hidden left-[174px] top-[4px] absolute">
                    <li>
                      <Link href="" className="py-[6px] px-[5px] text-white inline-block text-base whitespace-nowrap">
                        <span>라스커 소개</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="" className="py-[6px] px-[5px] text-white inline-block text-base whitespace-nowrap">
                        <span>정관</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="relative max-w-[300px] pb-[14px]">
                  <Link href="" className="text-white font-medium text-2xl">
                    <span>인재영입</span>
                  </Link>
                  <ul className="hidden left-[174px] top-[4px] absolute">
                    
                  </ul>
                </li>
                <li className="relative max-w-[300px] pb-[14px]">
                  <Link href="" className="text-white font-medium text-2xl">
                    <span>회사소식</span>
                  </Link>
                  <ul className="hidden left-[174px] top-[4px] absolute">
                    
                  </ul>
                </li>
                <li className="relative max-w-[300px]">
                  <Link href="" className="text-white font-medium text-2xl">
                    <span>문의하기</span>
                  </Link>
                  <ul className="hidden left-[174px] top-[4px] absolute">
                    
                  </ul>
                </li>
              </ul>
            </nav>
            <div className="mb-[107px] pl-[20px] float-left text-white top-[3px] relative">
              <div>
                <b className="text-[13px] pb-[10px] block text-[#eee] font-semibold">Address</b>
                <p className="text-[13px] mb-[21px] text-[#888]">대전광역시 유성구 문지로 193, KAIST 진리관 T-139호 {'('}34051{')'}</p>
              </div>
              <div>
                <b className="text-[13px] pb-[10px] block text-[#eee] font-semibold">Contact</b>
                <p className="text-[13px] mb-[21px] text-[#888]">전화번호</p>
              </div>
              <div className="mt-[54px] block align-baseline">
                <Link href="" className="min-w-[180px] py-[18px] pr-[19px] pl-[19px] shadow-none outline-none text-sm overflow-hidden relative bg-[#00a0e9] inline-box align-middle text-white ">
                  <span className="pr-[20px] inline-block relative top-[-1px]">회사소개서 다운로드</span>
                  <DownloadIcon className="right-[10px] absolute top-1/2 mt-[-7px]"/>
                </Link>
                
              </div>
            </div>
          </div>
          {/** bottom */}
          <div className="pt-[41px] mt-[20px] clear-both w-full border-t border-gray-700">
            <div className="float-left">
              <nav className="ml-[-15px] block">
                <ul>
                  <li className="float-left">
                    <Link href="/" className="text-[#ddd] font-bold text-xs inline-block py-[10px] px-[15px]">
                      개인정보처리방침
                    </Link>
                  </li>
                  <li className="float-left">
                    <Link href="/" className="text-[#888] font-bold text-xs inline-block py-[10px] px-[15px]">
                      개인정보처리방침
                    </Link>
                  </li>
                  <li className="float-left">
                    <Link href="/" className="text-[#888] font-bold text-xs inline-block py-[10px] px-[15px]">
                      개인정보처리방침
                    </Link>
                  </li>
                  <li className="float-left">
                    <Link href="/" className="text-[#888] font-bold text-xs inline-block py-[10px] px-[15px]">
                      개인정보처리방침
                    </Link>
                  </li>
                </ul>
              </nav>
              <div>
                <div className="pt-[6px] pb-[2px]">
                  <small className="pr-[10px] mr-[7px] text-xs text-[#888]">상호명 : (주)라스커</small>
                  <small className="pr-0 mr-0 text-xs text-[#888] relative">사업자등록번호 : 407-81-33448</small>
                </div>
                <small className="block clear-both text-[#888] text-xs">Copyright ⓒ LASKER Co., LTD. All Rights Reserved.</small>
              </div>
            </div>
            <div className="pt-[20px] float-right">
              <div>
                <span className="text-white font-bold text-lg">Lakser</span>
              </div>
            </div>
          </div>
          <div className="w-full h-[50px]"></div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;