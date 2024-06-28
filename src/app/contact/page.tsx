"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { ContactSchemaType, contactSchema } from "@/lib/contactScheme";

export default function About() {
  const [checkReq, setCheckReq] = useState(true);

  function checkhandle(event: any) {
    const { value, checked } = event.target;

    if(value === "necessary") {
      if(checked) {
        setCheckReq(false);
      } else {
        setCheckReq(true);
      }
    }
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactSchemaType>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<ContactSchemaType> = (data) => {
    console.log(data);
  }

  return (
    <>
      <Header startColor={0} menuVisible={false} />
      <div className="relative overflow-hidden">
        <div className="block p-0">
          <div className="relative my-0 mx-auto overflow-hidden p-0">
            {/** contact section */}
            <div className="relative overflow-hidden h-screen w-full bg-white">
              <div className="table h-full w-full relative max-w-[1280px] m-auto text-left text-black">
                <div className=" table-cell align-middle">
                  <div className="max-w-[984px] my-0 mx-auto">
                    {/** left section */}
                    <div className="mt-[-10px] float-left w-1/2">
                      <h2 className="mb-[25px] relative top-[3px] pb-[33px] text-5xl font-bold">
                        문의하기
                      </h2>
                      
                      <p className="text-base inline-block relative aligh-middle min-w-[150px] pr-[25px] pl-[5px]">
                        <span>contact@lasker.tech</span>
                      </p>
                    </div>
                    {/** right section */}
                    <div className="top-[4px] w-1/2 float-right pl-[20px] relative">
                      <div className='w-full flex flex-col'>
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                          <section className='pb-[17px] flex'>
                            <div className='w-11/12 items-stretch'>
                              <div className='relative pb-[37px]'>
                                <label className={`flex h-[60px] border-b ${errors.name && 'border-red-300'} cursor-text gap-[2px]`}>
                                  <input 
                                    type='text' id='name'
                                    {...register("name")}
                                    className='w-full h-full border-none outline-none px-0 pt-[28px] pb-[2px] text-[15px] leading-6 bg-blackl' />
                                  <label className=' text-[15px] absolute left-[0px] top-[7px]'>이름</label>
                                  <span className='text text-red-500 absolute top-[1px] left-[31.5px]'>*</span>
                                </label>
                                {errors.name && <span className="text-sm text-red-500 font-light">{errors.name?.message}</span>}
                              </div>
                              <div className='relative pb-[37px]'>
                                <label className={`flex h-[60px] border-b ${errors.email && 'border-red-300'} cursor-text gap-[2px]`}>
                                  <input 
                                    type='text' id='email'
                                    {...register("email")}
                                    className='w-full h-full border-none outline-none px-0 pt-[28px] pb-[2px] text-[15px] leading-6 bg-blackl' />
                                  <label className='text-[15px] absolute left-[0px] top-[7px]'>이메일</label>
                                  <span className='text text-red-500 absolute top-[1px] left-[43.5px]'>*</span>
                                </label>
                                {errors.email && <span className="text-sm text-red-500 font-light">{errors.email?.message}</span>}
                              </div>
                              <div className='relative pb-[37px]'>
                                <label className={`flex h-[60px] border-b ${errors.phone && 'border-red-300'} cursor-text gap-[2px]`}>
                                  <input 
                                    type='text' id='phone'
                                    {...register("phone")}
                                    className='w-full h-full border-none outline-none px-0 pt-[28px] pb-[2px] text-[15px] leading-6 bg-blackl' />
                                  <label className=' text-[15px] absolute left-[0px] top-[7px]'>전화번호</label>
                                  <span className='text text-red-500 absolute top-[1px] left-[55px]'>*</span>
                                </label>
                                {errors.phone && <span className="text-sm text-red-500 font-light">{errors.phone?.message}</span>}
                              </div>
                              <div className='relative pb-[50px]'>
                                <label className={`flex h-[60px] ${errors.phone && 'border-red-300'} cursor-text gap-[2px]`}>
                                  <label className=' text-[15px] absolute left-[0px] top-[7px]'>문의내용</label>
                                  <textarea className="h-[130px] absolute top-[30px] border w-full" {...register("content")}></textarea>
                                  <span className='text text-red-500 absolute top-[1px] left-[55px]'>*</span>
                                </label>
                                {errors.phone && <span className="text-sm text-red-500 font-light">{errors.content?.message}</span>}
                              </div>
                            </div>
                          </section>
                          
                          <section className="">
                            <div className='flex flex-row items-center justify-start mb-[10px]'>
                              <label className='inline-block h-[18px] w-[18px] justify-center items-center'>
                                <input 
                                  type='checkbox' name='agree' id='agree' 
                                  onChange={checkhandle}
                                  value = "necessary"
                                  className='h-full w-fullg rounded-lg border-gray-300 text-indigo-600 focus:ring-indigo-600'/>
                              </label>
                              <div className='ml-[8px]'>
                                <p className='font-normal text-sm text-[#8c8c8c]'>
                                  {`(필수)`} <span className='font-semibold underline'>개인정보 수집 및 이용</span>에 동의합니다.
                                </p>
                              </div>
                            </div>
                            <div className='flex flex-row items-center justify-start mb-[20px]'>
                              <label className='inline-block h-[18px] w-[18px] justify-center items-center'>
                                <input 
                                  type='checkbox' name='agree' id='agree' 
                                  onChange={checkhandle}
                                  value = "unnecessary"
                                  className='h-full w-fullg rounded-lg border-gray-300 text-indigo-600 focus:ring-indigo-600'/>
                              </label>
                              <div className='ml-[8px]'>
                                <p className='font-normal text-sm text-[#8c8c8c]'>
                                  {`(선택)`} <span className='font-semibold underline'>회사정보 수신</span>에 동의합니다.
                                </p>
                              </div>
                            </div>
                          </section>
                          <section>
                            <button 
                            type="submit" disabled={checkReq} 
                            className={`${checkReq ? "bg-[#a4a4a4]" : "bg-[#646464] hover:bg-[#3c3c3c]"} 
                                w-[150px] h-[40px] rounded-md text-white text-[15px] tracking-wide font-semibold transition-all ease-in-out`}>
                              제출하기 
                            </button>
                          </section>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}