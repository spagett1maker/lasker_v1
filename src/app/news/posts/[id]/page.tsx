
import Image from 'next/image';
import { postList } from "@/lib/bloglist";

import HeaderO from "@/components/Header/other";

function findIndexById(id: string) {
  return postList.findIndex((post) => post.id.toString() === id);
}

export default function Page({ params }: { params: { id: string } }) {
  const index = findIndexById(params.id);
  const post = postList[index];
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
                      <p className=" text-lg text-[#00a0e9] mb-[17px] font-semibold ">해외사례</p>
                      <h1 className="mb-[15px] ml-[-4px] font-bold text-5xl leading-tight">
                        <span>{post.title}</span>
                        <br/>
                        <span></span>
                      </h1>
                      <p className=" text-lg break-keep whitespace-pre-line mb-[37px] text-[#888]">
                        {post.content}
                      </p>
                    </div>
                    <div className='relative pt-[20px] '>
                      <Image src={post.src} alt="feature" width={1920} height={1080}></Image>
                    </div>
                  </div>
                </div>

                {/** main section */}
                <div className="mt-[20px] mb-[60px]">
                  <div className="relative max-w-[984px] my-0 mx-auto">
                    <div className="relative">
                      
                      {/**<h1 className="mb-[27px] ml-[-5px] font-bold text-5xl leading-tight">현재의 광고 시스템에서 나아가 사용자들에게 <br/>더 나은 광고 경험을 제공하고자 합니다.</h1>*/}
                      <p className=" text-lg break-keep whitespace-pre-line">
                        유저 데이터 기반의 광고 시스템을 넘어서 컨텐츠와 어울리는 광고를 자동으로 검색 및 삽입하여,<br/>
                        영상 시청을 방해하지 않으며 시청자의 광고 인식 경험을 개선시키고 효과를 극대 화하고자 합니다.
                      </p>
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