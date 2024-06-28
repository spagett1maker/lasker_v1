import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
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
                      <p className=" text-lg text-[#00a0e9] mb-[17px] font-semibold ml-[-3px]">Our mission</p>
                      <h1 className="mb-[27px] ml-[-5px] font-bold text-5xl leading-tight">현재의 광고 시스템에서 나아가 사용자들에게 <br/>더 나은 광고 경험을 제공하고자 합니다.</h1>
                      <p className=" text-lg break-keep whitespace-pre-line">
                        유저 데이터 기반의 광고 시스템을 넘어서 컨텐츠와 어울리는 광고를 자동으로 검색 및 삽입하여,<br/>
                        영상 시청을 방해하지 않으며 시청자의 광고 인식 경험을 개선시키고 효과를 극대 화하고자 합니다.
                      </p>
                    </div>
                  </div>
                </div>
                {/** main section */}
                <div className="mb-[94px]">
                  <div className="my-0 mx-auto max-w-[984px]">
                    <h2 className="mb-[37px] mt-[59px] text-2xl font-semibold relative text-black">
                      <span>No.</span>
                      <span>1 디지털 마케팅 플랫폼 컴퍼티</span>
                      <br/>
                      <span>통합 미디어 플래닝, 등</span>
                    </h2>
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