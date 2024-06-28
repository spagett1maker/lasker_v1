
import HeaderO from "@/components/Header/other";
import Link from "next/link";

export default function Career() {
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
                      <p className=" text-lg text-[#00a0e9] mb-[17px] font-semibold ml-[-3px]">Hiring</p>
                      <h1 className="mb-[82px] ml-[-5px] font-bold text-5xl">Lasker와 함께 나아갈 동료를 찾습니다.</h1>
                    </div>
                  </div>
                </div>
                {/** bottom section */}
                <div className="relative ml-[-15px]">
                  <div className="my-0 mx-auto max-w-[984px]">
                    <div className="relative mb-[-40px]">
                      <Link href="https://childish-denim-9a7.notion.site/daff2521b100426b9a811dbd41942aad" className=" text-base inline-block relative align-middle text-center min-w-[150px] py-[20px] pr-[25px] pl-[5px] font-normal">
                        <span className="text-black">채용 공고 바로가기 {'('}Notion{')'}</span>
                        <span aria-hidden="true" className="pl-[10px] hover:pl-[22px] relative transition-all">→</span>
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
