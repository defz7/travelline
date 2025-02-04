import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

import Person1 from "../../public/Images/Home/Group 5436.svg";

function Testimony() {
    return (
      <div className="w-full h-full bg-white">
        <div className="py-24 px-7 sm:px-16 xl:px-32 2xl:px-52">
          <div className="grid xl:grid-cols-2 gap-10 xl:container xl:mx-auto">
            <div
              className="grid justify-items-center xl:justify-items-start mx-auto space-y-3 lg:space-y-5"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <div className="flex items-center">
                <div className="hidden xl:block border border-[#2C2D32] w-[50px] h-0 mr-3 lg:-mb-2"></div>
                <p className="text-[15px] md:text-[16px] font-nunito uppercase lg:-mb-2">Testimonial</p>
              </div>
              <p className="text-[24px] md:text-[28px] 2xl:text-3xl font-poppinsBold text-center xl:text-left">
                What Customers Say?
              </p>
              <p className="md:w-5/6 xl:w-3/4 font-nunito text-base text-center xl:text-left pt-1 pb-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
              <button className="flex justify-between w-[220px] md:w-[240px] h-fit rounded-full border border-[#EE5060] cursor-pointer">
                <div className="grid content-center justify-items-center pl-8 pt-2 text-[#EE5060]">
                  Write your thought
                </div>
                <div className="p-2 rounded-full border border-[#EE5060]">
                  <ArrowLongRightIcon className="w-6 text-[#EE5060]" />
                </div>
              </button>
            </div>
            <div
              className="grid content-center justify-items-center"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <div className="flex items-center p-8 pb-3 rounded-2xl shadow-lg bg-gray-100 max-w-xl">
                <div className="grid content-center">
                  <p className="font-nunitoBold max-w-xs">
                    "Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry."
                  </p>
                  <div className="flex items-center justify-center">
                    <img
                      src={Person1.src}
                      className="mt-3 -ml-2 w-[100=px] h-[100px]"
                      loading="lazy"
                      alt="profile picture"
                    />
                    <div className="grid">
                      <p className="font-poppinsSemiBold">Fay Nakila</p>
                      <p className="font-poppinsRegular text-slate-500">
                        Traveller
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export { Testimony };