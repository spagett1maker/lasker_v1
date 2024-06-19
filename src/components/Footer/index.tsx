import Link from "next/link";


const Footer = () => {
  return (
    <div className="relative">
      <footer className="px-0 pt-[138px] pb-[100px] bg-black block">
        <div className="max-w-[984px] my-0 mx-auto relative">
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
                  <small className="pr-[10px] mr-[7px] text-xs text-[#888]">대표자 : 유수진</small>
                  <small className="pr-0 mr-0 text-xs text-[#888] relative">사업자등록번호 : 000-00-00000</small>
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
        </div>
      </footer>
    </div>
  )
}

export default Footer;